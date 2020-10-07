import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import KingBedTwoToneIcon from '@material-ui/icons/KingBedTwoTone';
import SupervisorAccountSharpIcon from '@material-ui/icons/SupervisorAccountSharp';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';

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
  height: 160px;
  display: flex;
  position: absolute;
  left: 408px;
  bottom: auto;
  right: auto;
  z-index: 999;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
`;

const ExitPicker = styled.button `
  position: absolute;
  top: 6px;
  right: 6px;
  text-align: center;
  transition: opacity .2s;
  width: 36px;
  height: 36px;
  cursor: pointer;
  border: none;
  text-decoration: none;
  background: #fff;
  padding: 0;
  font-family: inherit;
`;

const Selector = styled.div `
  padding: 32px 16px 16px;
  font-size: 14px;
  min-width: 288px;
  box-sizing: border-box;
  text-align: start;
`;

const Category = styled.div `
  display: block;
  overflow: hidden;
  font-size: 1em;
  font-weight: 700;
  padding-right: 16px;
  line-height: 36px;
  height: 30px;
`;

const NumberSelector = styled.div `
  width: 130px;
  float: right;
  display: flex;
  height: 36px;
  line-height: 36px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
`;

const PlusMinusButton = styled.button `
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 36px;
  font-size: 20px;
  text-decoration: none;
  background: #fff;
  padding: 0;
  font-family: inherit;
  color: #000;

  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  font-size: inherit;
  line-height: 1;

  left: 50px;
  position: relative;
`;

const ChildrenPlusMinus = styled(PlusMinusButton) `
  left: 40px;
`;



const Counter = styled.span `
  flex: 1 1 auto;
  display: inline-block;
  vertical-align: top;
  font-size: 1em;
  box-shadow: inset 0 3px 3px -3px rgba(0,0,0,.25);
  width: 50px;
  text-align: center;
  left: 50px;
  position: relative;
`;
const ChildrenCounter = styled(Counter) `
  left: 40px;
`;

const Icon = styled.span `
  top: 5px;
  color: #8c8c8c;
  vertical-align: middle;
  display: inline-block;
  margin: 0 2px 0 8px;
  position: relative;
`;

const Adults = styled.div `

`;

const GuestsPicker = ({setShowPicker, showPicker, adults, setAdults, children, setChildren, rooms, setRooms}) => {
  return (
    <div>
      <GuestsPickerContainer >
        <Point/>
        <ExitPicker onClick={(event) => setShowPicker(false)}>X</ExitPicker>
        <Selector>
          <Category>
            <Icon>
              <KingBedTwoToneIcon />
            </Icon>
            {'Rooms'}
            <PlusMinusButton onClick={(event) => setRooms(rooms - 1)}>-</PlusMinusButton>
            <Counter>{rooms}</Counter>
            <PlusMinusButton onClick={(event) => setRooms(rooms + 1)}>+</PlusMinusButton>
          </Category>
          <Category>
            <Icon>
              <SupervisorAccountSharpIcon/>
            </Icon>
            {'Adults        '}
            <PlusMinusButton onClick={(event) => setAdults(adults - 1)}>-</PlusMinusButton>
            <Counter>{adults}</Counter>
            <PlusMinusButton onClick={(event) => setAdults(adults + 1)}>+</PlusMinusButton>
          </Category>
          <Category>
            <Icon>
              <EmojiPeopleSharpIcon />
            </Icon>
            Children
            <ChildrenPlusMinus onClick={(event) => setChildren(children - 1)}>-</ChildrenPlusMinus>
            <ChildrenCounter>{children}</ChildrenCounter>
            <ChildrenPlusMinus onClick={(event) => setChildren(children + 1)}>+</ChildrenPlusMinus>
          </Category>
        </Selector>
      </GuestsPickerContainer>
    </div>
  );
}

export default GuestsPicker;