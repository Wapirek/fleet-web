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
        codeName: 'transactionName',
        displayName: 'Nazwa transakcji',
        labelName: 'Podaj nazwe transakcji',
        width: '350px',
        required: false,
        readonly: false,
        inputType: 'text'
      },
      {
        codeName: 'isDefine',
        displayName: 'Zdefiniuj',
        labelName: 'Zdefiniuj',
        width: '40px',
        required: false,
        readonly: false,
        inputType: 'checkbox'
      }
    ],
    [
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
        codeName: 'transactionDate',
        displayName: 'Data transakcji',
        labelName: 'Podaj date zakupu',
        width: '130px',
        required: false,
        readonly: false,
        inputType: 'date'
      },
      {
        codeName: 'recipe',
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
        codeName: 'quantity',
        displayName: 'Ilość',
        required: true,
        readonly: false,
        inputType: 'number'
      },
      {
        codeName: 'paid',
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
