import Handlebars, { HelperOptions } from 'handlebars';
import Block from './Block';

// eslint-disable-next-line import/prefer-default-export
export function registerComponent(Component: typeof Block) {
  Handlebars.registerHelper(Component.name, ({ hash, data }: HelperOptions) => {
    if (!data.root.children) {
      // eslint-disable-next-line no-param-reassign
      data.root.children = {};
    }
    const { children } = data.root;
    const component = new Component(hash);

    children[component.id] = component;

    return `<div data-id="id-${component.id}"></div>`;
  });
}
