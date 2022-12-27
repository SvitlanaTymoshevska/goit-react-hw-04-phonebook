import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid darkgray;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const LabelName = styled.span`
   margin-bottom: 20px;
   font-weight: bold;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
`;

export const Button = styled.button`
    width: 120px;
    height: 24px;
    border: 2px solid darkgray;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;    

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: deepskyblue;
    }
`;
