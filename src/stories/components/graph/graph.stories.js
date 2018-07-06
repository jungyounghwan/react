import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Graph from './graph';

storiesOf('Components', module)
    .add('Graph', () => (
        <div>
            <h2>Normal</h2>
            <Name name="Louie Anderson" />
            <h2>Highlighted</h2>
            <Name name="Louie Anderson" type="highlight" />
            <h2>Disabled</h2>
            <Name name="Louie Anderson" type="disabled" />
        </div>
    )
