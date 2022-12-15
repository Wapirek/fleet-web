import { StructureBuilderModel } from 'src/app/auth/_models/structure-builder.model';

export const StructureBuilderArray: StructureBuilderModel = {
  top: {
    description: 'Jesteś zarejestrowany?',
    btn: {
      path: '',
      displayName: 'Zaloguj się'
    }
  },
  fields: [
    {
      codeName: 'login',
      displayName: 'Login',
      labelName: 'Login użytkownika',
      width: 200,
      required: true,
      inputType: 'text'
    },
    {
      codeName: 'email',
      displayName: 'Email',
      labelName: 'Email użytkownika',
      width: 200,
      required: true,
      inputType: 'email'
    },
    {
      codeName: 'password',
      displayName: 'Hasło',
      labelName: 'Hasło',
      width: 200,
      required: true,
      inputType: 'password'
    },
    {
      codeName: 'confirmPassword',
      displayName: 'Potwierdź hasło',
      labelName: 'Potwierdź hasło',
      width: 200,
      required: true,
      inputType: 'password'
    }
  ],
  saveBtn: {
    btn: 'Zarejestruj się',
    reminder: ''
  },
  rights: '© Wszelkie prawa zastrzeżone - Fleet Corp.'
}
