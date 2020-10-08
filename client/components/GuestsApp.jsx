import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import GuestsPicker from './GuestsPicker.jsx';
import SupervisorAccountSharpIcon from '@material-ui/icons/SupervisorAccountSharp';

const GuestButton = styled.button `
  flex: 1 1 0%;
  display: inline-block;
  height: 100%;
  width: 361px;
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
  top: 25px;
  position: relative;
`;

const GuestsInfoContainer = styled.div `
  height: 45px;
  background: #fff;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
`;

const GuestsIcon = styled.span `
  top: 10px;
  color: #8c8c8c;
  vertical-align: middle;
  display: inline-block;
  margin: 0 2px 0 8px;
  position: relative;
`;

const InfoContainer = styled.span `
    display: block;
    font-size: .8125em;
    font-weight: 700;
    line-height: 20px;
    position: relative;
    left: 40px;
    top: -20px;
`;

const GuestsTitle = styled.span `
  display: block;
  margin-bottom: 2px;

  line-height: normal;
  color: #474747;
`;

const GuestInfo = styled.span `
  display: block;
  font-weight: 700;
  line-height: 20px;
`;
const GuestsApp = ({setGuestsPicker, guestsPicker}) => {
  //const [showPicker, setShowPicker] = useState(true);
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
    if (children > 20) {
      setChildren(20);
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
    if (adults > (4 * rooms)) {
      setAdults(4 * rooms);
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
    if (rooms > 8) {
      setRooms(8);
    }
  }, [rooms]);

  if (guestsPicker) {
    return (
      <div>
        <GuestsPicker showPicker={guestsPicker} setShowPicker={setGuestsPicker} children={children} adults={adults} rooms={rooms} setAdults={setAdults} setRooms={setRooms} setChildren={setChildren}/>
        <GuestButton onClick={(event) => setGuestsPicker(!guestsPicker)}>
          <GuestsInfoContainer>
            <GuestsIcon><SupervisorAccountSharpIcon /></GuestsIcon>
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
        <GuestButton onClick={(event) => setGuestsPicker(!guestsPicker)}>
          <GuestsInfoContainer>
            <GuestsIcon><SupervisorAccountSharpIcon /></GuestsIcon>
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