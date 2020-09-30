const puppeteer = require('puppeteer');
//import BookingApp from '../client/app';
import TestRenderer from 'react-test-renderer';
import React from 'react';

import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Booking from '../client/components/Booking';



describe('test booking component', () => {
  test('sanity check', () => {
    expect(true).toBe(true);
  });

  test('it should mount a component', () => {
    const wrapper = mount(<Booking showCalendars={true}/>);
    console.log(wrapper.find('button').getElements());
  })

})