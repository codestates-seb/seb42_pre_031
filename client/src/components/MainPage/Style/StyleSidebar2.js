import styled from "styled-components";


let Sidebar =styled.div`
    float: right;
    width: 300px;
    margin: 0 0 15px;
    text-align: left;
    margin-left:24px;
    @media screen and (max-width: 980px){
    float: none;
    clear: both;
    display: none;
    margin: 0 auto;
    width: 100%;
    };

`
let Sidebar1 = styled.ul`
    padding: 0 !important;
    display: block !important;
    box-sizing: border-box;
    display: flex;
    border: 0;
    font-size: 100%;
    margin-bottom: 0px;
    margin-left: 0px;
`
let Sidebarli = styled.li`
    box-sizing: border-box;
    display: flex;
    background-color: hsl(47,83%,91%);
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
    vertical-align: baseline;
    color: rgb(82,86,96);
    border-bottom-style: solid;
    border-bottom-width: 0.2px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    list-style-type: disc;
    padding:12px;
`
let Sidebarli1 = styled.li`
    box-sizing: border-box;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    list-style-type: disc;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: baseline;
    margin: 12px;
`
let SidebarDiv = styled.div`
    box-sizing: border-box;
    display: block;
    flex-basis: 8%;
    flex-shrink: 0;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: baseline;
    list-style-type: disc;
`
let SidebarSvg = styled.svg`
    box-sizing: border-box;
    height: 13px;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 13px;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: text-top;
    list-style-type: disc;

`
let SidebarDivDiv = styled.div`
    box-sizing: border-box;
    display: block;
    min-width: 0;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: baseline;
    color:rgb(35,38,41);
    list-style-type: disc;
    overflow-wrap: break-word;

`
let SidebarDivDiva = styled.a`
    box-sizing: border-box;
    display: inline;
    height: auto;
    width: auto;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    text-decoration-color:rgb(59,64,69);
    text-decoration-line:none ;
    text-decoration-style:solid ;
    text-decoration-thickness: auto;
    vertical-align: baseline;
    color:rgb(59,64,69);
    cursor: pointer;
    user-select: auto;
    overflow-wrap: break-word;

`
let SidebarMain = styled.div`
    box-sizing: border-box;
    display: block;
    margin-bottom: 16px;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: baseline;
    color:rgb(35,38,41);
    background-color: hsl(47,87%,94%);;
    position: relative;
    border-color: hsl(47,65%,84%);
    box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
    `

let Sidebar2div = styled.div`
    box-sizing: border-box;
    display: block;
    margin-top: 16px;
    position: relative;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: baseline;
    color: rgb(53,58,41);
    background-color: rgb(255,255,255);
    box-shadow: rgba(0,0,0,0.05) 0px,1px,2px,0px rgba(0,0,0,0.05) 0px,1px,4px,5px rgba(0,0,0,0.05) 0px,2px,8px,0px;
    overflow-wrap: break-word;
    border-radius: 3px;
    margin-bottom: 16px;
    border:1px solid hsl(210,8%, 85%);
    box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
`
let Sidebar2h2 = styled.h2`
    box-sizing: border-box;
    display: block;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 15px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
    vertical-align: baseline;
    color: rgb(82,89,96);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    background-color: hsl(210,8%,97.5%);
    padding: 12px 16px 16px;
`
let Sidebar2ul = styled.ul`
    box-sizing: border-box;
    display: block;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 13px;
    line-height: 17px;
    vertical-align: baseline;
    color: rgb(35,38,41);
    list-style-type: disc;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    overflow-wrap: break-word;
    padding-inline-start: 15px;
    padding: 16px 12px 16px 1px;
`
let Sidebar2li = styled.li`
    box-sizing: border-box;
    display: flex;
    font-size: 13px;
    line-height: 17px;
    text-align: left;
    vertical-align: baseline;
    color:rgb(159,166,173);
    list-style-type: disc;
    overflow-wrap: break-word;
    margin:12px;
`
let Sidebar2a = styled.a`
    box-sizing: border-box;
    display: block;
    position: relative;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    text-decoration-color:rgb(0,116,204);
    text-decoration-line:none ;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    vertical-align: baseline;
    color:rgb(0,116,204);
    background-color: rgba(0,0,0,0);
    box-shadow: none;
    cursor:pointer;
    list-style-type: disc;
    user-select: auto;
    overflow-wrap: break-word;
    :hover{
        color: hsl(206,85%,57.5%);
    }
`

export {Sidebar,Sidebar1,Sidebarli,Sidebarli1,SidebarDiv,SidebarSvg,SidebarDivDiv,SidebarDivDiva,SidebarMain ,Sidebar2div,Sidebar2h2,Sidebar2ul,Sidebar2li,Sidebar2a}