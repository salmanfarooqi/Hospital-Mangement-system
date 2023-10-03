import React, { useState, useEffect } from "react";

const BookAppointment = (props) => {
  const [data, setData] = useState(null);
  const loop = ["first", "second", "third"];

  // Handle Click
  const handleDoctorClick = (e) => {
    setData(e);
  };

  // is it sidebar?
  props.data("Patient");
  return (
    <div>
      <div className="Doctor-Container">
        {data ? (
          <div>
            <h2>You Selected : {data}</h2>
            <button
              onClick={() => {
                setData(null);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="Doctors flex ">
            {loop.map((item, index) => {
              return (
                <h2
                  className="p-4"
                  onClick={() => {
                    setData(item);
                  }}
                  key={index}
                >
                  {item}
                </h2>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
