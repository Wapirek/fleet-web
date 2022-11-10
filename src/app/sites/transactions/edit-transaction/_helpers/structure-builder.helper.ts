import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { FieldModel } from 'src/app/shared/models/models/field.model';

interface StructureBuilderModel {
  header: HeaderModel;
  transactionHeader: FieldModel[];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'payments',
    title: 'Edytuj transakcje {title}'
  },
  transactionHeader: [
    {
      codeName: 'shopName',
      displayName: 'Miejsce zakupu',
      labelName: 'Miejsce zakupu',
      width: '350px',
      required: false,
      readonly: false,
      inputType: 'text'
    },
    {
      codeName: 'purchaseDate',
      displayName: 'Data',
      labelName: 'Data zakupu',
      width: '120px',
      required: false,
      readonly: false,
      inputType: 'date'
    },
    {
      codeName: 'recipePhoto',
      displayName: 'Załącz',
      labelName: 'Dodaj paragon',
      width: '120px',
      defaultValue: 'Załącz',
      required: false,
      readonly: false,
      inputType: 'button'
    }
  ]
}
