import { Link } from "react-router-dom";
function TotalBloodHistory() {
  return (
    <>
      <Link to="/admin/RequireBloodRecord">
        <div className="bg-blue-100  w-[350px]  h-[180px] mt-2 flex cursor-pointer ml-4">
          <img
            className="w-50 h-20 mt-[40px]"
            src="../images/patient.png"
          ></img>
          <div className=" innline-block">
            <h1 className=" mt-[40px] ml-10">Total blood History </h1>
            <h1 className="  ml-10 text-green-500 text-2xl">200 </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TotalBloodHistory;
