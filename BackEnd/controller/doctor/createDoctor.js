import Doctor from "../../database/doctor.js";
import Specialization from "../../database/specialization.js";

const createDoctor = async (req, res) => {
  /*
    scalability:
      multiple oldSpecialization ids or multiple newSpecialization name can 
      be received that is why oldSpecialization & newSpecialization are 
      receiving in array.
    
     Input: doctor info along with specialization name (new) & oldSpecialization IDs (existing in Specialization model)
     
     how it work: (when new specialization is recieved :- not existing yet)
     new doctor document is created with empity specialization,
     then doctor's Id is added to doctorId array in specialization model,
     then specialization Id is added to specialization array of doctor model
     
     & if received oldSpecialization's _ids(existing specialization) 
      now find these oldSpecialization's _ids and add doctor's _id to each of 
      its doctorId array
     */
  try {
    //  separating specialization from doctor information
    const { oldSpecialization, newSpecialization, ...withoutSpecialization } =
      req.body;

    // creating doctor document
    const doctor = new Doctor(withoutSpecialization);

    // saving doctor document
    const savedDoctor = await doctor.save();

    // ########### Adding doctor's _id to specializations (existing in model)
    if (oldSpecialization && oldSpecialization.length) {
      /*  received oldSpecialization's _ids(existing specialization) 
      now find these oldSpecialization's _ids and add doctor's _id to each of 
      its doctorId array
      */

      // adding doctor's _id to doctorId array of each specialization
      // document in Specialization model
      await Specialization.updateMany(
        { _id: { $in: oldSpecialization } },
        { $addToSet: { doctorId: savedDoctor._id } }
      );

      // Add the specialization IDs to the new doctor's document
      savedDoctor.specialization.addToSet(...oldSpecialization);

      // Save the updated doctor document to the database
      await savedDoctor.save();
    }

    /////////////  Creating New Specialization (that doesn't exist yet) ///////////

    // decleraing variable to later access it after /outside this condition body
    let savedSpecializationDoc = null;

    if (newSpecialization && newSpecialization.length) {
      // adding newSpecializations names (doesn't in SpecializationModel)

      // function to return array of objects of specialization documents
      const specializationDocs = newSpecialization.map((item) => {
        return {
          name: item,
          doctorId: [savedDoctor._id],
        };
      });

      // query
      savedSpecializationDoc = await Specialization.insertMany(
        specializationDocs
      );

      // Add the specialization ID to the new doctor's document
      savedSpecializationDoc.map((item) => {
        savedDoctor.specialization.addToSet(item._id);
      });

      // Save the updated doctor document to the database
      await savedDoctor.save();
    }

    // Send the response
    res.status(201).json({
      message: "Doctor with specialization created successfully!",
      doctor: savedDoctor,
      savedSpecializationDoc: savedSpecializationDoc,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to create doctor with specialization." });
  }
};

export default createDoctor;
