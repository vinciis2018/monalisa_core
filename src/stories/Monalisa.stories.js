import React from 'react';
import { storiesOf } from  '@storybook/react';

import { Monalisa } from '../components/Monalisa';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (
    <Monalisa />
  )
})