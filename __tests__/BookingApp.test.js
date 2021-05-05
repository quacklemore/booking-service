const puppeteer = require('puppeteer');

import TestRenderer from 'react-test-renderer';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import BookingApp from '../client/components/BookingApp.jsx';
import Booking from '../client/components/Booking.jsx';
import CalendarDay from '../client/components/CalendarDay.jsx';
import Calendar from '../client/helpers/calendar.js';

describe('test booking component', () => {

  test('sanity check', () => {
    expect(true).toBe(true);
  });


  test('it should call the function to toggle calendar visibility', ()=> {

    let wrapper = shallow(<Booking />)
    const setShowCalendars = jest.fn();
    wrapper.setProps({
      setCheckInPicker: setShowCalendars
    })
    console.log('------------------------------------------')
    console.dir(wrapper.getElement().props.children[0].props)
    console.log('------------------------------------------')
    wrapper.getElement().props.children[0].props.onClick()

    expect(setShowCalendars).toBeCalled();
    wrapper.getElement().props.children[1].props.onClick()
    expect(setShowCalendars).toHaveBeenCalledTimes(2);
  });

  test('it should display the check in date if it exists', () => {
    let wrapper = mount(<Booking />)
    const setShowCalendars = jest.fn();
    var checkIn = new Date();
    let day = Calendar.prototype.getDay(checkIn.getDay())
    let checkInDisplay = `${day}, ${checkIn.getMonth()}/${checkIn.getDate()}/${checkIn.getFullYear()}`
    wrapper.setProps({
      setShowCalendars: setShowCalendars,
      checkIn: checkIn
    });
    expect(wrapper.find('span').getElements()[2].props.children).toBe(checkInDisplay)

  })

  test('it should have a day component', () => {
    let wrapper = mount(<BookingApp />);
    expect(wrapper.find('CalendarDay')).toBeTruthy();
  })

})