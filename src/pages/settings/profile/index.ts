import { CFormValidation } from '../../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_NICKNAME, REGEXP_PHONE,
} from '../../../common/const';

const formValidation = new CFormValidation();

formValidation.addValidateInput('email', REGEXP_EMAIL);
formValidation.addValidateInput('login', REGEXP_LOGIN);
formValidation.addValidateInput('first_name', REGEXP_NAME);
formValidation.addValidateInput('second_name', REGEXP_NAME);
formValidation.addValidateInput('display_name', REGEXP_NICKNAME);
formValidation.addValidateInput('phone', REGEXP_PHONE);

/** Добавляем валидацию всех инпутов по событиям focus, blur */
formValidation.setValidationInputsEventTypes('focus', 'blur');
/** Добавляем кнопку и обработчик клика (вторым параметром) */
formValidation.addSubmitButton('save-button');
