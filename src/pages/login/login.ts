import Block from '../../common/Block';
import template from './login.hbs';
import Button from '../../components/Button';

export class LoginPage extends Block {
  constructor(props: { buttonLabel: string }) {
    super(props);
  }

  protected initChildren() {
    this.children.button = new Button({
      label: this.props.buttonLabel,
      events: {
        click: () => console.log('Button pressed!'),
      },
    });
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps.buttonLabel !== newProps.buttonLabel) {
      this.children.button.setProps({
        label: newProps.buttonLabel,
      });
    }

    return super.componentDidUpdate(oldProps, newProps);
  }

  render() {
    return this.compile(template, {});
  }
}
