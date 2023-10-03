import React from 'react';

const PatientRequest = () => {
    return (
        <div>
             <div className="chart bg-green-100 w-[320px] h-[300px] mt-2 ml-2">
          <h1 className='text-center'>Appointment Request</h1>
          <div className="flex pt-4 pl-4">

            <h1 className="">Patient</h1>
            <h1 className="pl-20">Name</h1>
            <h1 className="pl-20">Time</h1>

          </div>

          <div className="flex pt-4 pl-4">
            <img src='./images/doctor.png' className="w-[40PX] h-[20px] rounded-lg bg-green-400 mb-4"></img>
            <h1 className="pl-20">ahmad</h1>
            <h1 className="pl-20">5:30</h1>

          </div>

          <div className="flex pt-4 pl-4">
            <img src='./images/doctor.png' className="w-[40PX] h-[20px] rounded-lg bg-green-400 mb-4"></img>
            <h1 className="pl-20">ahmad</h1>
            <h1 className="pl-20">5:30</h1>

          </div>

          <div className="flex pt-4 pl-4">
            <img src='./images/doctor.png' className="w-[40PX] h-[20px] rounded-lg bg-green-400 mb-4"></img>
            <h1 className="pl-20">ahmad</h1>
            <h1 className="pl-20">5:30</h1>

          </div>
        </div>
        </div>
    );
}

export default PatientRequest;
