import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    // <!-- Header Start -->
    <>
      <header className="site-header h-[65px]  fixed min-w-[100vw] top-0 ">
        <div className="site-header__top">
          <div className="wrapper site-header__wrapper">
            <div className="site-header__middle flex items-center">
              <img className="w-11 h-11" src="../images/NavBar/hospital.png" />
              <a href="#" className="pl-3 brand">
                Hospital Management System
              </a>
            </div>
            <div className="site-header__end">
              <div className={`sideBarMenuStyle `}>
                <button
                  className=" flex items-center"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  <img className="w-6  h-6" src="../images/NavBar/logout.png" />
                  <span className="pl-2 text-lg  font-bold">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[65px] "></div>
    </>
  );
}
export default Navbar;
