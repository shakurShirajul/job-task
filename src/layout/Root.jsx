import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  const activeButton = "text-[#6c72ff] font-semibold";
  const inactive = "text-black font-semibold";

  const sideBarNavigation = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive && activeButton}>
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && inactive}>
          My Course
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && inactive}>
          Completed
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && inactive}>
          Financial Aid
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && inactive}>
          Transactions
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && inactive}>
          Reports
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && inactive}>
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-80">
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button mb-5 lg:hidden"
                >
                  <p>Menu</p>
                </label>
              </div>

              <div className="drawer-side z-[10]">
                <p className="text-center pt-10 text-xl font-semibold">
                  <span className="text-[#6c72ff]">ON</span>Course
                </p>
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu p-4 w-80 h-screen bg-white text-base-content border-r">
                  {sideBarNavigation}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:p-10 overflow-y-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};
export default Root;
