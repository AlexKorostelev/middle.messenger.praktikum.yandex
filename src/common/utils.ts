/** Интерфейс элемента валидации */
// export interface IValidateInput {
//   element: HTMLInputElement;
//   regexp: RegExp;
// }

// export class CFormValidation {
//   /** Массив инпутов для валидации */
//   validateInputs: IValidateInput[] = [];
//
//   /**
//    * Функция добавления инпута в массив для валидации
//    * @param inputId - id эдемента input
//    * @param regexp - регулярное выражение для валидации инпута
//    * */
//   addValidateInput(inputId: string, regexp: RegExp) {
//     this.validateInputs.push({
//       element: document.getElementById(inputId) as HTMLInputElement,
//       regexp,
//     });
//   }
//
//   /** Функция валидации инпута. Если валидация не прошла - выставляем красную обводку */
//   validate(item: IValidateInput) {
//     if (item.regexp.test(item.element.value)) {
//       item.element.classList.remove('input-error');
//       item.element.classList.add('input-normal');
//     } else {
//       item.element.classList.remove('input-normal');
//       item.element.classList.add('input-error');
//     }
//   }
//
//   /** Добавляет ко всем инпутам обработчик валидации, блокирует нажатие Enter
//    * @param eventTypes - типы событий для валидации (focus, blur ...)
//    * */
//   setValidationInputsEventTypes(...eventTypes: string[]) {
//     eventTypes.forEach((eventType) => {
//       this.validateInputs.forEach((item: IValidateInput) => {
//         item.element.addEventListener(eventType, () => this.validate(item));
//         item.element.addEventListener('keypress', (event) => event.key === 'Enter' && event.preventDefault());
//       });
//     });
//   }
//
//   /** Добавляет кнопку с событием submit по нажатию на которую происходит валидация всех инпутов
//    * @param buttonId - id кнопки
//    * @param onSubmit - функция, выполняющаяся при нажатии на кнопку
//    * */
//   addSubmitButton(buttonId: string, onSubmit?: () => void) {
//     const registrationButton = document.getElementById(buttonId);
//     registrationButton?.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.validateInputs.forEach((item: IValidateInput) => this.validate(item));
//       if (onSubmit !== undefined) {
//         onSubmit();
//       }
//
//       const formData = this.validateInputs.reduce((acc, cur) => Object.assign(acc, { [cur.element.name]: cur.element.value }), {});
//       // eslint-disable-next-line no-console
//       console.log(formData);
//     });
//   }
// }

interface IValidationInput {
  elementId: string;
  regexp: RegExp;
}

interface IInputsValidationResults {
  inputName: string;
  inputValue: string;
  validationOK: boolean;
}

/**
 * Делает валидацию инпута, устанавливая соответствующие классы,
 * при успешной валидации возвращает объект с полями inputName, inputValue и validationOK
 * @param elementId - id инпута
 * @param regexp - регулярное выражение для проверки значения инпута
 * */
export const validateInput = (elementId: string, regexp: RegExp | string): IInputsValidationResults => {
  const input = document.getElementById(elementId) as HTMLInputElement;
  const reg = new RegExp(regexp);
  const validationOK = reg.test(input.value);

  if (validationOK) {
    input.classList.remove('input-error');
    input.classList.add('input-normal');
  } else {
    input.classList.remove('input-normal');
    input.classList.add('input-error');
  }

  return {
    validationOK,
    inputName: input.name,
    inputValue: input.value,
  };
};

/**
 * Делает валидацию инпутов, устанавливая соответствующие классы,
 * при успешной прохождении валидации всех инпутов выводит объект в консоль.
 * @param items - параметры IValidateInput
 * */
export const validateInputs = (...items: IValidationInput[]) => {
  const inputsValidationResults = items.map((item) => validateInput(item.elementId, item.regexp));

  if (inputsValidationResults.every((item) => item.validationOK)) {
    // eslint-disable-next-line no-console
    console.log(inputsValidationResults.reduce((acc, cur) => Object.assign(acc, { [cur.inputName]: cur.inputValue }), {}));
  }
};
