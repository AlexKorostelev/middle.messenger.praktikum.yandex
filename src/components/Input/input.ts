// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';
import { validateInput } from '../../common/utils';

interface IInputProps {
  inputId: string;
  inputType: 'email' | 'text' | 'tel' | 'password';
  inputName: string;
  className?: string;
  regexp: string;
}

export class Input extends Block {
  constructor({
    inputId, inputType, inputName, className, regexp,
  }: IInputProps) {
    super({
      inputId,
      inputType,
      inputName,
      className,
      regexp,
      events: {
        focus: () => validateInput(this.props.inputId, this.props.regexp),
        blur: () => validateInput(this.props.inputId, this.props.regexp),
      },
    });
  }

  render() {
    // language=hbs
    return '<input id={{inputId}} type={{inputType}} name={{inputName}} class="form-input" autocomplete="false"/>';
  }
}
