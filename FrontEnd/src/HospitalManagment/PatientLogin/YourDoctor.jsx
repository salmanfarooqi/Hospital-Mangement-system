const YourDoctor = () => {
  return (
    <div className="bg-blue-100  h-[180px] mt-2 p-5 grow">
      {/* w-[280px] */}
      <div className="header flex place-content-between">
        <h3>Your Doctor</h3>
        <div>
          <h3 className="text-blue-700 font-bold">Change</h3>
        </div>
      </div>

      <div className="image&detail ml-2  flex mt-8">
        <div className="image mr-4">
          <img className="w-50 h-20 " src="./images/doctor.png"></img>
        </div>
        <div className="detial">
          <h2 className="mt-0">Ali Khan</h2>
          <h3>Surgeon</h3>
        </div>
      </div>
    </div>
  );
};

export default YourDoctor;
