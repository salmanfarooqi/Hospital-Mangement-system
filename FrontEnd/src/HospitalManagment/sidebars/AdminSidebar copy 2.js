import { Link } from "react-router-dom";
function AdminSidebar() {
  return (
    <div className="bg-sky-900 fixed  w-[220px] pr-0 pt-4">
      <ul className="h-[720px] ">
        <li className="flex  pt-[50px] items-center  hover:bg-[#E1D9D1] cursor-pointer">
          <img
            className="w-10  pl-4 "
            src="../images/dashboard.png"
            alt="image "
          />
          <Link to="/admin/Dashboard">
            {" "}
            <span className="text-xl pl-1">Dashboard</span>
          </Link>
        </li>
        <li className="flex  pt-[20px] items-center  hover:bg-[#E1D9D1] cursor-pointer">
          <img
            className="w-10  pl-4 "
            src="../images/dashboard.png"
            alt="image "
          />
          <Link to="/admin/doctor">
            {" "}
            <span className="text-xl pl-1">Doctor</span>
          </Link>
        </li>

        <li className="flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer">
          <img className="w-10  pl-4" src="../images/doctor.png" />

          <Link to="/admin/Nurse">
            {" "}
            <span className="text-xl pl-1">Nurse</span>
          </Link>
        </li>

        <li className="flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer">
          <img className="w-10  pl-4" src="../images/patient.png" />

          <Link to="/admin/patient">
            {" "}
            <span className="text-xl pl-1">Patient</span>
          </Link>
        </li>

        <li className="flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer">
          <img
            className="w-10  pl-5 items-center"
            src="../images/pharmacy.png"
          />

          <Link to="/admin/lab">
            {" "}
            <span className="text-xl pl-1">Lab</span>
          </Link>
        </li>

        <li className="flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer">
          <img className="w-10  pl-4 " src="../images/blood.png" />

          <Link to="/admin/blood">
            {" "}
            <span className="text-xl pl-1">Blood</span>
          </Link>
        </li>

        <li className="flex  pt-4 items-center hover:bg-[#E1D9D1] cursor-pointer">
          <img className="w-10  pl-4 " src="../images/blood.png" />

          <Link to="/admin/pharmacy">
            {" "}
            <span className="text-xl pl-1">pharmacy</span>
          </Link>
        </li>

        {/* <div className="bg-sky-500 w-[1180px] h-[80px] relative bottom-[720px] 
              shadow-inner  pt-4 left-[185px] ml-[0px] pl-4">Admin dashboad</div> */}

        {/* <div className='relative bottom-[700px] left-[190px]'>
          
             
       <Dashboardcontent/>
          
                </div>   */}
      </ul>
    </div>
  );
}

export default AdminSidebar;
