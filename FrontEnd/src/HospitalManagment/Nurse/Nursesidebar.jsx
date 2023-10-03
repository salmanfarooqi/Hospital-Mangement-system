// import Dashboardcontent from "./Dashboardcontent";

import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../sidebars/Sidebar";

function Nursesidebar() {

    return (
        <>
          {/* <Navbar/> */}
        <div className=''>
          <Sidebar/>
            {/* <div className='bg-sky-900 w-[180px]  '>
                 <ul className='h-[720px]'>
          
                    <li className='flex  pt-[20px]'>
                            <img  className="w-[120px]  pl-4 rounded-[50%]" src='./images/avator.jpg' />
                               
                        </li>
                    
                       <li className='flex  pt-[50px] items-center  hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-4 " src='./images/dashboard.png' alt='image ' />
                          <Link to="/doctor"> <span className='text-xl pl-1'>doctor</span></Link>
                            
                        </li>

                        <li className='flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-4" src='./images/doctor.png' />
                         
                          <Link to="/doctor"> <span className='text-xl pl-1'>doctor</span></Link>
                               
                        </li>

                        <li className='flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-4" src='./images/patient.png' />
                          
                          <Link to="/patient"> <span className='text-xl pl-1'>Patient</span></Link>
                        </li>

                        <li className='flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-5 items-center" src='./images/pharmacy.png' />
                            
                          <Link to="/lab"> <span className='text-xl pl-1'>Lab</span></Link>
                        </li>

                        <li className='flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-4 " src='./images/blood.png' />
                             
                          <Link to="/blood"> <span className='text-xl pl-1'>Blood</span></Link>
                        </li>
                        <li className='flex  pt-4 items-center  hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-4 " src='./images/blood.png' />
                            
                          <Link to="/doctor"> <span className='text-xl pl-1'>doctor</span></Link>
                        </li>
                        <li className='flex  pt-4 items-center hover:bg-[#E1D9D1] cursor-pointer'>
                            <img  className="w-10  pl-4 " src='./images/blood.png' />
                         
                          <Link to="pharmacy"> <span className='text-xl pl-1'>pharmacy</span></Link>
                        </li>
                
                          
                    </ul> 


                </div> */}
             </div>
               
   
            <div className="bg-sky-500 w-[1180px] h-[80px] relative bottom-[720px] 
             shadow-sm shadow-sky-500 shadow-inner  pt-4 left-[185px] ml-[0px] pl-4">Admin dashboad</div>

         <div className='relative bottom-[700px] left-[190px]'>
          
             
      {/* <Patient/> */}
          
                </div>  
                
             


                
           

        </>
    )
}

export default Nursesidebar;