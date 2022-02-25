import { CFormValidation } from '../../common/utils';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '../../common/const';

const formValidation = new CFormValidation();

formValidation.addValidateInput('login', REGEXP_LOGIN);
formValidation.addValidateInput('password', REGEXP_PASSWORD);

/** Добавляем валидацию всех инпутов по событиям focus, blur */
formValidation.setValidationInputsEventTypes('focus', 'blur');
/** Добавляем кнопку и обработчик клика (вторым параметром) */
// eslint-disable-next-line no-console
formValidation.addSubmitButton('save-button');
