import { configure } from '@storybook/react';
import React from 'react';

const req = require.context(
    '../src/components',
    true,
    /\.stories\.(js|jsx)$/,
)

function loadStories() {
  /*require('../src/stories');*/
    req.keys().forEach(filename => {
      req(filename)
    })
}

configure(loadStories, module);
