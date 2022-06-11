import React from 'react';

import { css } from '@emotion/react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
  clientId: 'ginnokaze.1014r@gmail.com',
  apiKey: 'AIzaSyBTp9L9tgMaeREEx1ieSCD6zTdd542yLHk',
  scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

const apiCalendar = new ApiCalendar(config);

console.log(apiCalendar);

export const Main = () => (
  <div css={wrapper}>
    <iframe
      title="calendar"
      src="https://calendar.google.com/calendar/embed?src=ginnokaze.1014r%40gmail.com&ctz=Asia%2FTokyo"
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
      css={calendar}
    />
  </div>
);

const wrapper = css({
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  width: '100%',
});

const calendar = css({
  width: '100%',
  height: '100%',
});
