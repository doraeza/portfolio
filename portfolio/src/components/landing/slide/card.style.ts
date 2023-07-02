/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const cardStyle = css`
        boxShadow: -1rem 0 3rem #000;
        transition: 0.4s ease-out;
        position: relative;
        left: 0px;
        display: flex;
        height: 280px;
        width: 200px;
        background-color: rgb(25,25,25);
        border: solid 1px #9bd65cd6;
        border-radius: 10px;
        &:hover {
            transform: translateY(-20px);
            transition: 0.4s ease-out;
        }
        &:not:first-child {
            margin-left: -50px;
        }
        &:hover ~ .card {
            position: relative;
            left: 50px;
            transition: 0.4s ease-out;
        }
        &:hover .stroke {
            stroke-dashoffset: 100;
            transition: 0.6s ease-out;
        }
    `