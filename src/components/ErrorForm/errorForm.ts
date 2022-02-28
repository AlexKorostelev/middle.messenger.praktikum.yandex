import Block from '../../common/Block';
import './errorForm.less';

interface IButtonProps {
  errorNumber: number;
  errorPicturePath: string;
}

export class ErrorForm extends Block {
  constructor({ errorNumber, errorPicturePath }: IButtonProps) {
    super({
      errorNumber,
      errorPicturePath,
    });
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="error-container">
                <img class="error-container__image" src="https://auho.ru/sites/default/files/3_745.jpg" alt="error-picture" />
                <p class="error-text">
                    Ошибка {{errorNumber}}. Уже чиним! ;)
                </p>
                <nav>
                    <a href="../../index.html">На главную</a>
                </nav>
            </div>
        </div>
    `;
  }
}