import { Link, Outlet, useNavigate } from "react-router-dom";
import "./layout.css";
import { useState } from "react"; // Removed unnecessary imports
import { slide as Menu } from "react-burger-menu";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State variable to track open/closed state
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar-container">
        <Link id="navbar-logo-container" to={"/HomePage"}>
          <div className="img-logo-div"><img className="img-logo-div" src="https://res.cloudinary.com/deiofeueo/image/upload/v1693072992/kssvviafyr04kgzj4bop.png" height={50} alt="" /></div>
        </Link>
      </div>
      <Menu
        isOpen={isSidebarOpen}
        onStateChange={({ isOpen }) => setIsSidebarOpen(isOpen)}
        width={"250px"}
        right // This sets the menu to appear on the right side
      >
        <Link
          to={"/HomePage"}
          id="home"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          דף הבית
        </Link>
        <Link
          to={"/"}
          id="about"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          הזמנת משלוח
        </Link>
        <Link
          to={"/"}
          id="contact"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          איך זה עובד?
        </Link>
        {/* <Link
          to={"/"}
          id="contact"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Link 3
        </Link> */}
      </Menu>
      <Outlet />
    </div>
  );
}

export default Layout;
