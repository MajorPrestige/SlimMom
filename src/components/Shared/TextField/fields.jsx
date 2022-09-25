export const field = {
  name: {
    name: 'name',
    type: 'text',
    placeholder: 'Імʼя*',
    pattern: '.{3,}',
    title: 'Назва має складатися не менше, ніж з 3 символів',
    required: true,
  },
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'Електронна пошта*',
    required: true,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль*',
    required: true,
    pattern: '.{8,}',
    title: 'Пароль має бути не менше 8 символів',
  },
  height: {
    name: 'height',
    type: 'text',
    placeholder: 'Зріст*',
    required: true,
    pattern: '.{2,3}',
    title: 'Введіть дійсне число від 100 до 250.', 
  },
  age: {
    name: 'age',
    type: 'text',
    placeholder: 'Вік*',
    required: true,
    pattern: '.{2,}',
    title: 'Введіть дійсне число від 18 до 100.',
  },
  weight: {
    name: 'weight',
    type: 'text',
    placeholder: 'Поточна вага*',
    required: true,
    pattern: '.{2,3}',
    title: 'Введіть дійсне число від 20 до 250.',

  },
  desiredWeight: {
    name: 'desiredWeight',
    type: 'text',
    placeholder: 'Бажана вага*',
    required: true,
    pattern: '.{2,3}',
    title: 'Введіть дійсне число від 20 до 500.',
    title: 'Please enter a valid number between 20 and 500.',

  },
  bloodType: {
    name: 'blodtype',
    type: 'text',
    placeholder: 'Група крові*',
  },
  filter: {
    type: 'text',
    name: 'filter',
    placeholder: 'filter by name',
  },
};
