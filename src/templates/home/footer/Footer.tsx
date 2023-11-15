import React from "react";
import css from "./footer.module.css";
import clsx from "classnames/bind";
const cx = clsx.bind(css);

export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("design-by")}>
        © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
      </div>
    </footer>
  );
}
