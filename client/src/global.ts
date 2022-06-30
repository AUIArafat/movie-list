import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        .ant-btn{
            background:#f5c51e !important;
            color:#121212 !important;
            height:36px !important;
            border-color:#f5c51e !important;
        }
        .ant-switch-checked{
            background:#f5c51e !important;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
            background-color: #f5c51e;
            border-color: #f5c51e;
        }
    }
    #root{
        margin:0 auto;
    }`;
