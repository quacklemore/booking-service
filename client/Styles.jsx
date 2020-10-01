import styled from 'styled-components';

const DatesButton = styled.button`
  flex: 1 1 0%;
  display: inline-block;
  height: 100%;
  margin: 0 0 0 8px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  background: #fff;
  padding: 0;
  text-align: left;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);


`;

const DatesSpan = styled.span`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;


export {
  DatesButton,
  DatesSpan
}