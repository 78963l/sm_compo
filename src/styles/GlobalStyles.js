import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    *, *::before, *::after {
        font-family: 'Pretendard' !important;
        font-weight: 400;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        height: 100vh;
        max-width: 100%;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
    };
    ul, ol {
    list-style: none;
    };
    a {
    text-decoration: none;
    };
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border : none;
        background : none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    /****************************
    custom css
    *****************************/

    /* 스크롤바 영역에 대한 설정 */
    .style-scroll-bar::-webkit-scrollbar {
        width: 8px;
    }
    /* 스크롤바 막대에 대한 설정 */
    .style-scroll-bar::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 20px;
    }
    /* 스크롤바 뒷 배경에 대한 설정 */
    .style-scroll-bar::-webkit-scrollbar-track {
        background: #f5f7fa;
        border: 1px solid #d5d7db;
        border-radius: 6px;
    }

    //NanumSquareRound 폰트 적용
    .f-nsr{
        font-family: 'NanumSquareRound', 'Lato', sans-serif !important;
    }
    
    /* 콘텐츠 감추기 */ 
    .sr-only {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        border: 0;
        clip: rect(0,0,0,0);
    }
    .d-flex{
        display: flex;
    }
    /* 가로 정렬 */
    .flex-row {
        display: flex;
        flex-direction: row;
    }
    /* 세로 정렬 */
    .flex-col {
        display: flex;
        flex-direction: column;
    }
    /* 가로,세로 중앙 정렬 */
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    /* 가로 라인 긋기 */
    .v_line {
        width: 100%;
        border: 0.1px solid #e2e5e9;
    }

    /* width 크기 */
    .w-100{width : 100%;}
    .w-75{width : 75%;}
    .w-50{width : 50%;}
    .w-25{width : 25%;}
    .w-0{width : 0%;}

    /* font-size (px) */
    .fs-10{font-size: 10px;}
    .fs-12{font-size: 12px;}
    .fs-14{font-size: 14px;}
    .fs-16{font-size: 16px;}
    .fs-18{font-size: 18px;}
    .fs-20{font-size: 20px;}
    .fs-22{font-size: 22px;}
    .fs-24{font-size: 24px;}
    .fs-26{font-size: 26px;}
    .fs-28{font-size: 28px;}

    /* font-weight (100단위) */
    .fw-2 {font-weight : 200;}
    .fw-3 {font-weight : 300;}
    .fw-4 {font-weight : 400;}
    .fw-5 {font-weight : 500;}
    .fw-6 {font-weight : 600;}
    .fw-7 {font-weight : 700;}
    .fw-8 {font-weight : 800;}

    
`;

export default GlobalStyles;
