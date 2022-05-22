import styled from 'styled-components';

export const Main = styled.main`
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 0; bottom: 0; right: 0; left: 0;
    margin: auto;
    width: 50em;
    height: 30em;
    border-radius: 20px;
    box-shadow: 0px 10px 10px #0000007e;
    text-align: center;
    background-color: #64656F;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding: 7%;
`
export const FormDiv = styled.div`
    width: 20em;
    height: 25em;
    background-color: #BFBABA;
    border-radius: 10px;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.253);
    display: flex;
    align-items:center;
    justify-content:space-around;
    justify-items: center;
    flex-direction: column;
`

export const Input = styled.input`
    padding: 8px 10px;
    box-sizing: border-box;
    border-radius: 50px;
    border: #BFBABA;
`

export const Submit = styled.input`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.253);
    color: rgba(17, 17, 17, 0.904);
    border-radius: 8px;
    border: none;
`
export const Title = styled.div`
    font-size: larger;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.527);

    h3{
        text-align: end;
    }
`