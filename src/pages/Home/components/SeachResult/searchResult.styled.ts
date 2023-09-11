import styled from "styled-components";
import {HTMLProps} from "react";


interface ISelect extends HTMLProps<HTMLSelectElement>{}
export const Select = styled.select<ISelect>`
  background: ${({theme})=> theme.COLORS.SECONDARY};
  color: white;
  border-radius: 8px;
  border: none;
  margin-bottom: 1rem;
  height: 0;
  transition: 400ms;
cursor: pointer;
  overflow: hidden;
  max-width: 100%;
`