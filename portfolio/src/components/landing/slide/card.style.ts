/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const containderStyle = css`
        position: relative;
        height: 450px;
        width: 600px;
        top: 60px;
        left: calc(50% - 300px);
        display: flex;
    `
export const cardTitle = css `
        font-weight: 300;
        position: absolute;
        left: 20px;
        top: 15px;
        font-size: x-large;
        color: #9bd65cd6;
        text-shadow: 0 0 10px #9bd65c;
        `
export const cardStyle = css`
        boxShadow: -1rem 0 3rem #000;
        transition: 0.4s ease-out;
        position: relative;
        display: flex;
        height: 280px;
        width: 300px;
        background-color: rgb(25,25,25);
        border: solid 1px #9bd65cd6;
        border-radius: 10px;
        margin-left: -50px;
        &:hover {
            transform: translateY(-40px);
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