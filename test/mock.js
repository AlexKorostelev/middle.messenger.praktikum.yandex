require.extensions['.less'] = function () {
  return null;
};

const jsdom = require('jsdom');
const { registerComponent } = require('../src/common/registerComponent');
const Button = require('../src/components/Button');
const Input = require('../src/components/Input');
const InputField = require('../src/components/InputField');

const { JSDOM } = jsdom;

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

global.document = new JSDOM('<div id="app">Hello!</div>').window.document;
