// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface IButtonProps {
  label: string;
  buttonId: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({ label, buttonId, onClick }: IButtonProps) {
    super({
      label,
      buttonId,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    // language=hbs
    return `
      <button id={{buttonId}} class='formButton' type="button">
        {{label}}
      </button>
    `;
  }
}
