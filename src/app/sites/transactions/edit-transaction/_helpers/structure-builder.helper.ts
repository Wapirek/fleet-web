import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { FieldModel } from 'src/app/shared/models/models/field.model';

declare type StructureBuilderBottomBtn = 'submit' | 'button';

interface StructureBuilderModel {
  header: HeaderModel;
  transactionHeader: FieldModel[][];
  list: {
    colSize: string;
    header: string[];
    row: FieldModel[];
  };
  bottom: {
    codeName: string;
    displayName: string;
    btnType: StructureBuilderBottomBtn
  }[];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    icon: 'payments',
    title: 'Edytuj transakcje {title}'
  },
  transactionHeader: [
    [
      {
        codeName: 'category',
        displayName: 'Kategoria',
        labelName: 'Podaj kategorie',
        width: '350px',
        required: false,
        readonly: false,
        inputType: 'text'
      },
      {
        codeName: 'date',
        displayName: 'Data',
        labelName: 'Data zakupu',
        width: '130px',
        required: false,
        readonly: false,
        inputType: 'date'
      },
      {
        codeName: 'shop',
        displayName: 'Miejsce zakupu',
        labelName: 'Miejsce zakupu',
        width: '350px',
        required: false,
        readonly: false,
        inputType: 'text'
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
  ],
  list: {
    colSize: '100px 250px 80px 120px',
    header: [
      'Usuń', 'Nazwa', 'Ilość', 'Koszt'
    ],
    row: [
      {
        codeName: 'productName',
        displayName: 'Nazwa',
        required: true,
        readonly: false,
        inputType: 'text'
      },
      {
        codeName: 'amount',
        displayName: 'Ilość',
        required: true,
        readonly: false,
        inputType: 'number'
      },
      {
        codeName: 'cost',
        displayName: 'Koszt',
        required: true,
        readonly: false,
        inputType: 'text'
      }
    ]
  },
  bottom: [
    {
      codeName: 'submit',
      displayName: 'Zapisz',
      btnType: 'submit'
    },
    {
      codeName: 'remove',
      displayName: 'Anuluj',
      btnType: 'button'
    }
  ]
}
