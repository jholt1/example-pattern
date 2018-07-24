import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/html';

storiesOf('ns-button', module)
  .addDecorator(withKnobs)
  .add('Primary view', () => {
    const label = 'type';
    const options = {
      primary: 'primary',
      secondary: 'secondary',
    };
    const defaultValue = 'primary';

    const value = select(label, options, defaultValue);

    return (`<div><ns-button type="${value}">Click me</ns-button></div>`);
  })
  .add('Secondary view', () => {
    const label = 'type';
    const options = {
      primary: 'primary',
      secondary: 'secondary',
    };
    const defaultValue = 'secondary';

    const value = select(label, options, defaultValue);

    return (`<div><ns-button type="${value}">Click me</ns-button></div>`);
  })
  .add('Disabled primary view', () => {
    const label = 'Disabled';
    const defaultValue = true;
    const value = boolean(label, defaultValue);

    return (`<div><ns-button type="primary" disabled=${value}>Click me</ns-button></div>`);
  })
  .add('Disabled secondary view', () => {
    const label = 'Disabled';
    const defaultValue = true;
    const value = boolean(label, defaultValue);

    return (`<div><ns-button type="secondary" disabled=${value}>Click me</ns-button></div>`);
  })
  .add('Loading primary view', () => {
    const label = 'Loading';
    const defaultValue = true;
    const value = boolean(label, defaultValue);
    const loadingMessage = text('Loading Message', 'loading...');

    return (`<div><ns-button loading=${value} loadingMessage=${loadingMessage} type="primary">Click me</ns-button></div>`);
  })
  .add('Loading secondary view', () => {
    const label = 'Loading';
    const defaultValue = true;
    const value = boolean(label, defaultValue);
    const loadingMessage = text('Loading Message', 'loading...');

    return (`<div><ns-button loading=${value} loadingMessage=${loadingMessage} type="secondary">Click me</ns-button></div>`);
  });
