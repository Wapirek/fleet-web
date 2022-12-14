import { StructureBuilderModel } from 'src/app/auth/_models/structure-builder.model';

export const StructureBuilderArray: StructureBuilderModel = {
  top: {
    description: 'Nie masz konta?',
    btn: {
      path: 'rejestracja',
      displayName: 'Zarejestruj się'
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
      codeName: 'password',
      displayName: 'Hasło',
      labelName: 'Hasło',
      width: 200,
      required: true,
      inputType: 'password'
    }
  ],
  saveBtn: {
    btn: 'Zaloguj się',
    reminder: 'Nie pamiętasz hasła?'
  },
  rights: '© Wszelkie prawa zastrzeżone - Fleet Corp.'
}
