import Doctor from "../../database/doctor.js";

import Specialization from "../../database/specialization.js";

const addSpecialization = async (req, res) => {
  /*
    Purpose:
      When doctor is already created and If doctor want to add another
      specialization (existing or new).

     Input: doctor's _id along with specialization name (new) & oldSpecialization IDs (existing in Specialization model)
     how it work:
     doctor document is fetched &
     if received newSpecialization's name (doesn't exist specialization)  
     then create specialization model with doctor's Id is added to doctorId array in specialization model,
     then specialization Id is added to specialization array of doctor model

     & if received oldSpecialization's _ids(existing specialization) 
      now find these oldSpecialization's _ids and add doctor's _id to each of 
      its doctorId array
     */
  try {
    //  separating specialization from doctor information
    const { oldSpecialization, newSpecialization, docId } = req.body;

    // getting doctor document
    const doctor = await Doctor.findById(docId);

    // ########### Adding doctor's _id to specializations (existing in model)

    if (oldSpecialization.length) {
      /*  received oldSpecialization's _ids(existing specialization) 
            now find these oldSpecialization's _ids and add doctor's _id to each of 
            its doctorId array
            */

      // adding doctor's _id to doctorId array of each specialization
      // document in Specialization model
      await Specialization.updateMany(
        { _id: { $in: oldSpecialization } },
        { $addToSet: { doctorId: docId } }
      );

      // Add the specialization IDs to the new doctor's document
      doctor.specialization.addToSet(...oldSpecialization);

      // Save the updated doctor document to the database
      await doctor.save();
    }

    /////////////  Creating New Specialization (that doesn't exist yet) ///////////

    // decleraing variable to later access it after /outside this condition body
    let savedSpecializationDoc = null;

    if (newSpecialization.length) {
      // adding newSpecializations names (doesn't in SpecializationModel)

      // function to return array of objects of specialization documents
      const specializationDocs = newSpecialization.map((item) => {
        return {
          name: item,
          doctorId: [docId],
        };
      });

      // query
      savedSpecializationDoc = await Specialization.insertMany(
        specializationDocs
      );

      // Add the specialization ID to the new doctor's document
      savedSpecializationDoc.map((item) => {
        doctor.specialization.addToSet(item._id);
      });

      // Save the updated doctor document to the database
      await doctor.save();
    }

    // Send the response
    res.status(201).json({
      message: "Doctor's specialization is modified successfully!",
      doctor: doctor,
      savedSpecializationDoc: savedSpecializationDoc,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to modify doctor with specialization." });
  }
};

export default addSpecialization;
/*

*/
