import React from 'react';
import Footer from '../components/Footer';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Footer', module)
  .add('filter', () => {
    return (
      <Footer completedCount={2}
              activeCount={1}
              filter="filter"
              onClearCompleted={action('onClearCompleted')}
              onShow={action('onShow')}
      />
    );
  })

