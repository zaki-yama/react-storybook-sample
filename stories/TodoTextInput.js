import React from 'react';
import TodoTextInput from '../components/TodoTextInput';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TodoTextInput', module)
  .add('with placeholder', () => {
    return (
      <div className="todoapp">
        <header className="header">
          <TodoTextInput newTodo
                         onSave={action('onSave')}
                         placeholder="What needs to be done?" />
        </header>
      </div>
    );
  });
