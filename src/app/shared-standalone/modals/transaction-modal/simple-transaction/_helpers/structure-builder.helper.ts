import { FieldModel } from 'src/app/shared/models/models/field.model';
import { ButtonModel } from 'src/app/shared/models/structure-html/button.model';

interface StructureBuilderModel {
  fields: FieldModel[][];
  bottom: ButtonModel[];
}

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
        btnType: 'button'
      },
      {
        codeName: 'cancel',
        displayName: 'Anuluj',
        btnType: 'button'
      }
    ]
  }
}
