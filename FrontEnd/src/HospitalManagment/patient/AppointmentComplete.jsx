const AppointmentComplete = () => {
  return (
    <div>
      <div className=" bg-blue-100 ml-2 w-[280px]  h-[180px] mt-2 flex items-center justify-around ">
        <div>
          <img
            className="w-12 h-20 check-icon"
            src="./images/check-solid.svg"
          ></img>
        </div>
        <div className="w-min">
          <h1 className=" ">Today Appointments Completed </h1>
          <h1 className="   text-green-500 text-2xl">200 </h1>
          <h1 className="  ">1 march 2023 </h1>
        </div>
      </div>
    </div>
  );
};

export default AppointmentComplete;
