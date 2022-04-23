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
  constructor(props: IInputProps) {
    super({
      ...props,
      events: {
        focus: () => validateInput(this.props.inputId as string, this.props.regexp as string),
        blur: () => validateInput(this.props.inputId as string, this.props.regexp as string),
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
