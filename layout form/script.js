#error {color: red}

input_name.onblur = function() {
  if (input_name.value.lenght < 2) {
    input_name.classList.add('invalid');
    error.innerHTML = 'Пожалуйста, введите имя.'
  }
};

input_name.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};