import { FieldModel } from 'src/app/shared/models/models/field.model';

export const StructureBuilderHelper = (): FieldModel[][] => {
  return [
    [
      {
        codeName: 'source',
        displayName: 'Miejsce zarobku',
        labelName: 'Podaj miejsce zarobku',
        width: '100%',
        required: true,
        readonly: false,
        inputType: 'text'
      },
      {
        codeName: 'charge',
        displayName: 'Przychód',
        labelName: 'Podaj kwotę przychodu',
        width: '200px',
        required: true,
        readonly: false,
        inputType: 'number'
      }
    ],
    [
      {
        codeName: 'periodicityDay',
        displayName: 'Ilość dni',
        labelName: 'Okres przychodu',
        width: '120px',
        required: true,
        readonly: false,
        inputType: 'number'
      },
      {
        codeName: 'nextCashFlow',
        displayName: 'Data wpłaty',
        labelName: 'Data następnej wpłaty',
        width: '160px',
        required: true,
        readonly: false,
        inputType: 'date'
      }
    ]
  ];
}
