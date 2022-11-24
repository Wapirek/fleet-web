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
          codeName: 'paid',
          displayName: 'Kwota',
          labelName: 'Podaj kwote',
          width: '140px',
          required: true,
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
