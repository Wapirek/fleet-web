import { FieldModel } from 'src/app/shared/models/models/field.model';

interface StructureBuilderModel {
  fields: FieldModel[];
}

export const StructureBuilderArray: StructureBuilderModel = {
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
  ]
}
