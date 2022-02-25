import { CFormValidation } from '../../../common/utils';
import { REGEXP_PASSWORD } from '../../../common/const';

const formValidation = new CFormValidation();

formValidation.addValidateInput('oldPassword', REGEXP_PASSWORD);
formValidation.addValidateInput('newPassword', REGEXP_PASSWORD);

/** Добавляем валидацию всех инпутов по событиям focus, blur */
formValidation.setValidationInputsEventTypes('focus', 'blur');
/** Добавляем кнопку и обработчик клика (вторым параметром) */
formValidation.addSubmitButton('save-button');
