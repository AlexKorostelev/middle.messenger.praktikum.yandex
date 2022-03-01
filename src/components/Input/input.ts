// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';
import { validateInput } from '../../common/utils';

export type TInputType = 'email' | 'text' | 'tel' | 'password';

interface IInputProps {
  inputId: string;
  inputValue?: string;
  inputPlaceholder?: string;
  inputType: TInputType;
  inputName: string;
  className?: string;
  regexp: string;
}

export class Input extends Block {
  constructor({
    inputId, inputValue, inputPlaceholder, inputType, inputName, className, regexp,
  }: IInputProps) {
    super({
      inputId,
      inputValue,
      inputPlaceholder,
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
    return `
      <input id={{inputId}}
             ${this.props.inputValue !== undefined && 'value={{inputValue}}'}
             ${this.props.inputPlaceholder !== undefined && 'placeholder={{inputPlaceholder}}'}
             type={{inputType}} name={{inputName}}
             class="form-input"
             autocomplete="false"/>
    `;
  }
}
