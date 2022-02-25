import { CFormValidation } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PASSWORD, REGEXP_PHONE,
} from '../../common/const';

const formValidation = new CFormValidation();

formValidation.addValidateInput('email', REGEXP_EMAIL);
formValidation.addValidateInput('login', REGEXP_LOGIN);
formValidation.addValidateInput('first_name', REGEXP_NAME);
formValidation.addValidateInput('second_name', REGEXP_NAME);
formValidation.addValidateInput('phone', REGEXP_PHONE);
formValidation.addValidateInput('password', REGEXP_PASSWORD);

/** Добавляем валидацию всех инпутов по событиям focus, blur */
formValidation.setValidationInputsEventTypes('focus', 'blur');
/** Добавляем кнопку и обработчик клика (вторым параметром) */
formValidation.addSubmitButton('reg-button');
