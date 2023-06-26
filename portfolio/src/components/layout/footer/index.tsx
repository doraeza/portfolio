// import Router, { useRouter } from "next/router";
// import React from "react";

import { css } from "@emotion/react";


function Footer() {
  // const route = useRouter();

  // const goHome = () => {
  //   Router.push(`/main`);
  // };
  return (
      <footer css={css({
        height: "100px",
        marginTop: "auto",
        backgroundColor: "rgb(25,25,25)"
      })}>
        <div css={css({
        width: "96%",
        maxWidth: "1100px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto"
      })}>
          <p className="Desc">
            © 2023 - developed by jaewu Yu
          </p>
        {/* <div className=" right-0 pr-2ㄴ">
            <a className="github-button" href="https://github.com/yujaewoo">github</a>
        </div> */}
        </div>
      </footer>
  );
}

export default Footer;
