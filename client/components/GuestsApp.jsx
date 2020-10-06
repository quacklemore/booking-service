import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import GuestsPicker from './GuestsPicker.jsx';

const GuestButton = styled.button `
  flex: 1 1 0%;
  display: inline-block;
  height: 100%;
  width: 350px;
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
  top: 100px;
  position: relative;
`;

const GuestsInfoContainer = styled.div `
  height: 100%;
  background: #fff;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
`;

const GuestsIcon = styled.span `
  color: #8c8c8c;
  vertical-align: middle;
  display: inline-block;
  margin: 0 2px 0 8px;
`;

const InfoContainer = styled.span `
    display: block;
    font-size: .8125em;
    font-weight: 700;
    line-height: 20px;
`;

const GuestsTitle = styled.span `
  display: block;
  margin-bottom: 2px;
  font-size: .75em;
  line-height: normal;
  color: #474747;
`;

const GuestInfo = styled.span `
  display: block;
  font-size: .8125em;
  font-weight: 700;
  line-height: 20px;
`;
const GuestsApp = () => {
  const [showPicker, setShowPicker] = useState(true);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [displayRooms, setDisplayRooms] = useState('room');
  const [displayAdults, setDisplayAdults] = useState('adult');
  const [displayChildren, setDisplayChildren] = useState('children');

  useEffect(() => {
    if (children === 1) {
      setDisplayChildren('child');
    } else {
      setDisplayChildren('children');
    }
    if (children < 0) {
      setChildren(0);
    }
  }, [children]);

  useEffect(() => {
    if (adults === 1) {
      setDisplayAdults('adult');
    } else {
      setDisplayAdults('adults');
    }
    if (adults < 1) {
      setAdults(1);
    }
  }, [adults]);

  useEffect(() => {
    if (rooms === 1) {
      setDisplayRooms('room');
    } else {
      setDisplayRooms('rooms');
    }
    if (rooms < 1) {
      setRooms(1);
    }
    if (adults < rooms) {
      setAdults(rooms);
    }
  }, [rooms]);

  if (showPicker) {
    return (
      <div>
        <GuestsPicker showPicker={showPicker} setShowPicker={setShowPicker} children={children} adults={adults} rooms={rooms} setAdults={setAdults} setRooms={setRooms} setChildren={setChildren}/>
        <GuestButton onClick={(event) => setShowPicker(!showPicker)}>
          <GuestsInfoContainer>
            <GuestsIcon></GuestsIcon>
            <InfoContainer>
              <GuestsTitle >Guests</GuestsTitle>
      <GuestInfo>{rooms} {displayRooms}, {adults} {displayAdults}, {children} {displayChildren}</GuestInfo>
            </InfoContainer>
          </GuestsInfoContainer>
        </GuestButton>
      </div>
     );
  } else {
    return (
      <div>
        <GuestButton onClick={(event) => setShowPicker(!showPicker)}>
          <GuestsInfoContainer>
            <GuestsIcon></GuestsIcon>
            <InfoContainer>
              <GuestsTitle >Guests</GuestsTitle>
        <GuestInfo>{rooms} {displayRooms}, {adults} {displayAdults}, {children} {displayChildren}</GuestInfo>
            </InfoContainer>
          </GuestsInfoContainer>
        </GuestButton>
      </div>
    );
  }
}

export default GuestsApp;