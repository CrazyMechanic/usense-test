export const FORM_LABELS = {
  name: 'Login',
  password: 'Password',
};

export const FORM_PLACEHOLDERS = {
  name: 'Entry login...',
  password: 'Entry password...',
};

export const FORM_ERRORS = {
  name: '',
  password: '',
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно.',
    minlength: 'Имя должно содержать не менее 4 символов.',
    maxlength: 'Имя должно содержать не более 15 символов.',
  },
  password: {
    required: 'Пароль обязательный.',
    minlength: 'Пароль должен содержать не менее 8 символов.',
  },
};
