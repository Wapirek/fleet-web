import { FieldModel } from 'src/app/shared/models/models/field.model';

export const StructureBuilderHelper = (): FieldModel[][] => {
  return [
    [ // first row
      {
        codeName: 'goalName',
        displayName: 'Nazwa celu',
        labelName: 'Podaj nazwę celu',
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
        inputType: 'text'
      }
    ]
  ];
}
