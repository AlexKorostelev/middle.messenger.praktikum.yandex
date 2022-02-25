import { CFormValidation } from '../../common/utils';
import { REGEXP_MESSAGE } from '../../common/const';

const formValidation = new CFormValidation();

formValidation.addValidateInput('message', REGEXP_MESSAGE);

/** Добавляем валидацию всех инпутов по событиям focus, blur */
formValidation.setValidationInputsEventTypes('focus', 'blur');
/** Добавляем кнопку и обработчик клика (вторым параметром) */
formValidation.addSubmitButton('send-button');

/** Функция запускает анимацию прокрутки диалога сообщений до последнего сообщения */
const scrollToLastMessage = () => {
  setTimeout(() => {
    const collection = document.getElementsByClassName('messages-container');

    if (collection.length) {
      collection[0].scrollTo({
        top: collection[0].scrollHeight,
        behavior: 'smooth',
      });
    }
  }, 500);
};

scrollToLastMessage();
