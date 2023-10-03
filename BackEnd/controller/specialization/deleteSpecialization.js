import Doctor from "../../database/doctor.js";
import Specialization from "../../database/specialization.js";

const deleteSpecialization = async (req, res) => {
  try {
    const { specializationId, doctorId } = req.body;

    // delete specialization's _id from doctor model's specialization's array
    const deletedSpecialization = await Doctor.updateOne(
      { _id: doctorId },
      {
        $pull: { specialization: { $in: specializationId } },
      }
    );

    // delete doctor's _id from specialization model's doctorId's array
    const deletedDoctorId = await Specialization.updateMany(
      { _id: { $in: specializationId } },
      { $pull: { doctorId: doctorId } }
    );

    // Send the response
    res.status(201).json({
      message: "Specialization was deleted successfully!",
      doctor: deletedSpecialization,
      deletedDoctorId: deletedDoctorId,
      //   specialization: specializationDoc,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to delete specialization." });
  }
};

export default deleteSpecialization;

/**
 *
 */

/*
I am implementing  functionality where only doctors of a specific specialization appear when a user selects a specialization field (such as heart, eye, or children), for this I have already CREATED two database models: a Doctor model and a Specialization model.

The Doctor model include attributes such as name, address, phone_number, and email, as well as a reference to the Specialization model, such as specialization_id. 

The Specialization model include attributes such as name (UNIQUE) and a list of doctor_ids who have that specialization. Each doctor can have one or more specializations.

now I wrote steps / algorithm for whenever doctor delete specialization.

steps / algorithm:

on doctor login: change profile page:change specialization section:
deleting: input select tag that will have all the available 
specializations of this doctor along with it's specialization's
_id attribute.
if doctor selects a children (which he has yet) value from select tag.
now we have doctor's _id & specialization's _id 
then pull / delete specialization's _id from doctor model's specialization's array
then pull / delete doctor's _id from specialization model's doctorId's array

code for this:

import Doctor from "../../model/doctor.js";
import Specialization from "../../model/specialization.js";

const deleteSpecialization = async (req, res) => {
  try {
    const { specializationId, doctorId } = req.body;

    // delete specialization's _id from doctor model's specialization's array
    const deletedSpecialization = await Doctor.updateOne(
      { _id: doctorId },
      {
        $pull: { specialization: specializationId },
      }
    );

    // Send the response
    res.status(201).json({
      message: "Specialization was deleted successfully!",
      doctor: deletedSpecialization,
      //   specialization: specializationDoc,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to delete specialization." });
  }
};

export default deleteSpecialization;

and the below is document of doctor model, which I want to modify.

{
        "_id": "64489924074e000d668c2877",
        "firstName": "asdlkfja;",
        "age": 25,
        "specialization": [
            "64478c5f89b92c106e02575a"
        ],
        "__v": 1
    }

but now when I send {
    "specializationId":"64478c5f89b92c106e02575a"
    , "doctorId":"64489924074e000d668c2877"
} to this api, then I receive this "{
    "message": "Specialization was deleted successfully!",
    "doctor": {
        "acknowledged": true,
        "modifiedCount": 0,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}" , And the specialization_Id from doctor model's specialization array doesn't get deleted?
*/

/*  

these are documents of my specialization model,
    {
        "_id": "64478c5f89b92c106e02575a",
        "name": "heart",
        "doctor": [
            "643da64fb531de23f93622b4",
            "643dad8bd17c73815a380b31"
        ],
        "__v": 2
    },
    {
        "_id": "64478c8b89b92c106e02575c",
        "name": "children",
        "doctor": [
            "643da64fb531de23f93622b4"
        ],
        "__v": 0
    },
    {
        "_id": "64478cae89b92c106e02575e",
        "name": "eyes",
        "doctor": [
            "643da64fb531de23f93622b4"
        ],
        "__v": 0
    },
    {
        "_id": "64478cae5465465465402575e",
        "name": "Kidney",
        "doctor": [
            "643da64fb531de23f93622b4"
        ],
        "__v": 0
    }


I want to delete / pull "643da64fb531de23f93622b4" from doctor attribute but 
from these DOCUMENTS which has "_id" equal to  "_id": "64478c8b89b92c106e02575c" and "_id": "64478cae89b92c106e02575e" and "_id": "64478cae5465465465402575e"

I have written this code for it:

Specialization.updateMany(
    {_id:{$in:["64478c8b89b92c106e02575c" , "64478cae89b92c106e02575e" , "64478cae5465465465402575e"]}},
    {$pull:{doctor:"643da64fb531de23f93622b4"}}
)

the above code is correct in mongodb / mongoose for this?
*/
