import { StructureBuilderModel } from 'src/app/shared-standalone/modals/transaction-modal/_models/structure-builder.model';

export const StructureBuilderHelper = (): StructureBuilderModel => {
  return {
    fields: [
      [
        {
          codeName: 'transactionName',
          displayName: 'Nazwa transakcji',
          labelName: 'Podaj nazwę transakcji',
          width: '100%',
          required: true,
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
          inputType: 'text'
        }
      ],
      [
        {
          codeName: 'category',
          displayName: 'Kategoria',
          labelName: 'Wybierze kategorie',
          width: '100%',
          required: true,
          readonly: false,
          inputType: 'text'
        },
        {
          codeName: 'cost',
          displayName: 'Kwota',
          labelName: 'Kwota',
          width: '120px',
          required: true,
          readonly: false,
          inputType: 'number'
        },
        {
          codeName: 'amount',
          displayName: 'Ilość',
          labelName: 'Ilość',
          width: '80px',
          required: true,
          readonly: false,
          defaultValue: 1,
          inputType: 'text'
        }
      ],
      [
        {
          codeName: 'recipePhoto',
          displayName: 'Załącz',
          labelName: 'Dodaj paragon',
          width: '120px',
          defaultValue: 'Załącz',
          required: false,
          readonly: false,
          inputType: 'button'
        },
        {
          codeName: 'shopName',
          displayName: 'Miejsce zakupu',
          labelName: 'Miejsce zakupu',
          width: '100%',
          required: false,
          readonly: false,
          inputType: 'text'
        }
      ]
    ],
    bottom: [
      {
        codeName: 'save',
        displayName: 'Zapisz',
        btnType: 'submit'
      },
      {
        codeName: 'cancel',
        displayName: 'Anuluj',
        btnType: 'button'
      }
    ]
  }
}
