import styled from "styled-components";

let Top = styled.div`
    display: flex !important;
`

let Toph1 = styled.h1`
    display: flex !important;
    font-size : 2.07692308rem;
    flex:1 auto;
    margin: 0 0 1em;
`
let TopAsk = styled.div`
    margin-left: var(--su12) !important;
`
let TopA = styled.div`
    background-color: rgb(10, 149,255);
    color: white;
    font-size: 1.5rem;
    padding: 10px;
`
let Vbutton = styled.div`
    display: flex;
`
let Vflex = styled.div`
    flex: 1 auto;
`
let Vbuttons = styled.div`
    font-size: 100%;
    display: flex;
`
let Buttondiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1px;
`
let ButtonA = styled.a`
    box-sizing: border-box;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 1px;
    z-index: 25;
    position: relative;
    margin-bottom: -1px;
    margin-right: -1px;
    color: rgb(59,64,69);
    cursor: pointer;
    background-color: white;
    text-decoration-style: solid;
    text-decoration-color: black;
    text-decoration-line: none;
    border-color: gray;
    border-style: solid;
    border-width: 1px;
`

export {ButtonA,Buttondiv,Vflex,Vbutton,Vbuttons,Top,Toph1,TopAsk,TopA}