import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className=" min-w-[100vw] bg-gray-600 h-[80px] m-[0px] flex  px-8 pt-6 border-2 place-content-between fixed">
      <div className="w-10 h-10 cursor-pointer ">
        <img src="../images/doctor.png" alt="" />
      </div>

      <div className="flex ">
        <img
          className="w-10  h-10 mx-2 cursor-pointer "
          src="../images/message.png"
          alt="images"
        ></img>
        <img
          className="w-10  h-10 mx-2 cursor-pointer "
          src="../images/bell.png"
          alt="images"
        ></img>
        <img
          className="w-10  h-10  mx-2 cursor-pointer  "
          src="../images/people.png"
          alt="images"
        ></img>
        <img
          className="w-10  h-10  mx-2 rounded-lg ml-6 cursor-pointer "
          src="../images/avator.jpg"
          alt="images"
        ></img>

        <div>
          <button
            className="text-white font-bold p-2"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
