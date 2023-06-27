// import Router, { useRouter } from "next/router";
// import React from "react";
/** @jsxImportSource @emotion/react */
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
        display: "flex",
        width: "96%",
        maxWidth: "1100px",
        height: "100%",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "space-between"
      })}>
          <div className="Desc">
            © 2023 - developed by jaewu Yu
          </div>
        {/* <div className=" right-0 pr-2ㄴ">
            <a className="github-button" href="https://github.com/yujaewoo">github</a>
        </div> */}
        </div>
      </footer>
  );
}

export default Footer;
