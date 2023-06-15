// app.test.js
import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import RouteApp from '../index';
import { MemoryRouter } from 'react-router-dom';
import { commonConstants } from '../../constants';


test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <RouteApp />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  const badRouteReg = new RegExp(commonConstants.PAGE_404_ERROR);
  expect(screen.getByText(badRouteReg)).toBeInTheDocument()
})