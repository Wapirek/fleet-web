import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { FieldModel } from 'src/app/shared/models/models/field.model';

interface StructureBuilderModel {
  header: HeaderModel;
  forms: FieldModel[][];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'payments',
    title: 'Edytuj transakcje {title}'
  },
  forms: [
    [
      {
        codeName: 'name',
        displayName: 'Nazwa transakcji',
        labelName: 'Podaj nazwe transakcji',
        width: '250px',
        required:  true,
        defaultValue: '',
        inputType: 'text'
      },
      {
        codeName: 'cost',
        displayName: 'Koszt',
        labelName: 'Podaj koszt',
        width: '100px',
        required:  true,
        defaultValue: '',
        inputType: 'text'
      },
      {
        codeName: 'purchaseDate',
        displayName: 'Data',
        labelName: 'Data zakupu',
        width: '120px',
        required: false,
        readonly: false,
        inputType: 'text'
      }
    ],
    [
      {
        codeName: 'category',
        displayName: 'Kategoria',
        labelName: 'Wybierze kategorie',
        width: '250px',
        required: true,
        readonly: false,
        inputType: 'text'
      },
      {
        codeName: 'shopName',
        displayName: 'Miejsce zakupu',
        labelName: 'Miejsce zakupu',
        width: '250px',
        required: false,
        readonly: false,
        inputType: 'text'
      }
    ]
  ]
}
