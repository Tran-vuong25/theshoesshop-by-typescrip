import React from "react";
import css from "./header.module.css";
import clsx from "classnames/bind";
const cx = clsx.bind(css);

// relative: tương đối
// import logoCyber from "../../assets/icons/logoCyber.svg";

// absolute: tuyệt đối
import logoCyber from "src/assets/icons/logoCyber.svg";

// import IconSearch from "src/assets/icons/IconSearch";
// import IconCart from "src/assets/icons/IconCart";
import { IconCart, IconSearch } from "src/assets/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "src/redux/hookRedux";
import { removeLocalstorage } from "src/utils/utils";
import { ACCESS_TOKEN } from "src/constant";
import { loginSuccess } from "src/redux/userSlice";

function Show({ when, fallback, children }: any) {
  // if (when) {
  //   return children;
  // }
  // return fallback;

  return when ? children : fallback;
}

export function Header() {
  const { cart } = useAppSelector((rootReducer) => {
    return rootReducer.cartsReducer;
  });

  const { login } = useAppSelector((rootReducer) => {
    return rootReducer.userReducer;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(store);

  // console.log(logoCyber);
  // console.log(css);
  return (
    <>
      <header className={css["header"]}>
        <img className={css["logo"]} src={logoCyber} alt="" />

        <div className={css["nav"]}>
          <div className={css["search"]}>
            <IconSearch />
            <span>Search</span>
          </div>
          <div className={`${css["cart"]} ${css["magin"]}`}>
            <IconCart />
            <span>({cart.length})</span>
          </div>
          {/* <div className={`${css.auth} ${css["magin"]}`}> */}
          <div className={cx("auth", "magin")}>
            {/* <Show when={login === null || login === undefined}>
              <NavLink to="/register" activeClassName="active"></NavLink>
            <NavLink to="/login">Sign in</NavLink>
            </Show> */}

            {/* Cách 1: */}
            {/* {login.email ? (
              login.email
            ) : (
              <Link to={"/login"} className={css.login}>
                Login
              </Link>
            )} */}

            {/* Cách 2: */}
            <Show
              when={login.email}
              fallback={
                <Link to={"/login"} className={css.login}>
                  Login
                </Link>
              }
            >
              <Link to={"/profile"}>{login.email}</Link>
            </Show>

            {/* Cách 1: */}
            {/* {login.email ? null : (
              <Link
                to={"/register"}
                className={`${css.register} ${css["magin"]}`}
              >
                Register
              </Link>
            )} */}

            {/* Cách 2: */}
            <Show
              when={!login.email}
              fallback={
                <button
                  onClick={() => {
                    //* 1. Chuyển về trang login
                    navigate("login");

                    //* 2. Xóa localstorage
                    removeLocalstorage(ACCESS_TOKEN);

                    //* 3. remove trên redux
                    dispatch(
                      loginSuccess({
                        email: "",
                      }),
                    );
                  }}
                >
                  Logout
                </button>
              }
            >
              <Link
                to={"/register"}
                className={`${css.register} ${css["magin"]}`}
              >
                Register
              </Link>
            </Show>
          </div>
        </div>
      </header>
      <nav className={cx("nav")}>
        {/* <a href=""></a> */}
        <NavLink
          style={(rest) => {
            // console.log(rest);

            return { color: rest.isActive ? "red" : "black" };
          }}
          className={cx("link", "link-active")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Men
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Woman
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Kid
        </NavLink>
        <NavLink className={cx("link")} to={"/"}>
          Support
        </NavLink>
      </nav>
    </>
  );
}
