import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface ILabelProps {
  inputName: string;
  labelText: string;
}

export class Label extends Block {
  constructor({ inputName, labelText }: ILabelProps) {
    super({
      inputName,
      labelText,
    });
  }

  render() {
    // language=hbs
    return '<label for={{inputName}} class="input-label">{{labelText}}</label>';
  }
}
