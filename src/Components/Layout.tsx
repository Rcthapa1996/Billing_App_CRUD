import { Outlet, Link } from "react-router-dom";

// Styles
import LayoutStyle from "./LayoutStyles.module.scss";

const Layout = (): JSX.Element => {
  return (
    <>
      <nav className={LayoutStyle["nav"]}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Add Account</Link>
          </li>
          <li>
            <Link to="/transaction">Account Details</Link>
          </li>
          {/* <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link to="/tutorials/2">Tutorials</Link>
          </li>
          <li>
            <Link to="/add">Add Tutorial</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
