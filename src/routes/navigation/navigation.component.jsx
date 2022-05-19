import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/icons/logo/crown.svg";
import CardIcon from "../../components/card-icon/card-icon.component";
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "./../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./style.css";
import CardDropdown from "./../../components/card-dropdown/card-dropdown.component";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}

          <CardIcon />
          {isCartOpen && <CardDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
