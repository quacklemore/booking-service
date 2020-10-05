import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Point = styled.div `
  top: 30%;
  right: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  overflow: hidden;
  background-color: #fff;
  transform: translateX(50%) translateY(-50%) rotate(45deg);
`;

const GuestsPickerContainer = styled.div `
  border-radius: 2px;
  transform: translateZ(0px);
  background-color: #fff;

  filter: drop-shadow(0 2px 4px rgba(0,0,0,.25));
  width: 300px;
  height: 300px;
  display: flex;

  position: absolute;
  top: 100px;
  left: 402px;
  bottom: auto;
  right: auto;
  z-index: 9991;


  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
`;

const GuestsPicker = () => {
  return (
    <div>
      <GuestsPickerContainer >
        <Point/>
        hello
      </GuestsPickerContainer>
    </div>
  );
}

export default GuestsPicker;