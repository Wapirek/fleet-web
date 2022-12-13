import { FieldModel } from 'src/app/shared/models/models/field.model';

interface StructureBuilderModel {
  register: {
    description: string;
    btn: {
      path: string;
      displayName: string;
    }
  };
  fields: FieldModel[];
  login: { btn: string; reminder: string; };
  rights: string;
}

export const StructureBuilderArray: StructureBuilderModel = {
  register: {
    description: 'Nie masz konta?',
    btn: {
      path: 'rejestracja',
      displayName: 'Zarejestruj się'
    }
  },
  fields: [
    {
      codeName: 'username',
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
  login: {
    btn: 'Zaloguj się',
    reminder: 'Nie pamiętasz hasła?'
  },
  rights: '© Wszelkie prawa zastrzeżone - Fleet Corp.'
}
