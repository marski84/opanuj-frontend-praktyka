
const clearInput = (inputRef, resultRef) => {
  inputRef.value = '';
  resultRef.innerHTML = '';
};

const validateNumber = (value) => {
  return Number(value) > 0 && Number(value) < 100 && Number(value) % 2 === 0;
}

const NoModuloRestValidator = () => {
  const inputField = document.getElementById('input')
  const validateButton = document.getElementById('validate-button');
  const clearButton = document.getElementById('clear-button');
  const resultViewContainer = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    if (!inputField.value) {
      return resultViewContainer.innerHTML = 'Please provide a value';
    }
    const inputValue = Number(inputField.value);
    return validateNumber(inputValue) ?
      resultViewContainer.innerHTML = 'Valid' : resultViewContainer.innerHTML = 'Invalid';
  })

  clearButton.addEventListener('click', () => {
    clearInput(inputField, resultViewContainer);
  });
}

NoModuloRestValidator();
