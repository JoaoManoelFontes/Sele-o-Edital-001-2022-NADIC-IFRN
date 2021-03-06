import styled from 'styled-components';

export const Main = styled.main`
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 0; bottom: 0; right: 0; left: 0;
    margin: auto;
    width: 60em;
    height: 40em;
    border-radius: 20px;
    box-shadow: 0px 10px 10px #0000007e;
    text-align: center;
    background-color: #64656F;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2%;
`
export const FormDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #BFBABA;
    border-radius: 10px;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.253);
    display: flex;
    align-items: center;
    justify-content:space-around;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Submit = styled.input`
    padding: 8px 10px;
    width: 20%;
    box-sizing: border-box;
    border-radius: 50px;
    border: #BFBABA;
`
export const Input = styled.input`
    padding: 8px 10px;
    box-sizing: border-box;
    border-radius: 50px;
    border: #BFBABA;
`

export const Radio = styled.div`
    text-align: left;
`