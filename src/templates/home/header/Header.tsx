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
import { Link } from "react-router-dom";

export function Header() {
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
            <span>(1)</span>
          </div>
          {/* <div className={`${css.auth} ${css["magin"]}`}> */}
          <div className={cx("auth", "magin")}>
            <button className={css.login}>Login</button>
            <button className={`${css.register} ${css["magin"]}`}>
              Register
            </button>
          </div>
        </div>
      </header>
      <nav className={cx("nav")}>
        {/* <a href=""></a> */}
        <Link className={cx("link", "link-active")} to={"/"}>
          Home
        </Link>
        <Link className={cx("link")} to={"/"}>
          Men
        </Link>
        <Link className={cx("link")} to={"/"}>
          Woman
        </Link>
        <Link className={cx("link")} to={"/"}>
          Kid
        </Link>
        <Link className={cx("link")} to={"/"}>
          Support
        </Link>
      </nav>
    </>
  );
}
