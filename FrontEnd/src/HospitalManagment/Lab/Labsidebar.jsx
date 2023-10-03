// import Dashboardcontent from "./Dashboardcontent";

import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebars/Sidebar";
import Lab from "./Lab";


function Patientsidebar() {

    return (
        <>
        <Navbar/>
        <div className=''>
            <Sidebar/>
             </div>
               
   
          

         
          
             
       <Lab/>
          
                
                
             


                
           

        </>
    )
}

export default Patientsidebar;