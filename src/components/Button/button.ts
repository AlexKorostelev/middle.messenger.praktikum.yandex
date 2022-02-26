import template from './button.hbs';
import Block from '../../common/Block';

interface IButtonProps {
  label: string;
  events?: {
    click?: () => void;
  };
}

// eslint-disable-next-line import/prefer-default-export
export class Button extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: IButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
