declare type FieldInputType = 'text' | 'number' | 'date' | 'button' | 'checkbox';

export interface FieldModel {
  codeName: string;
  displayName: string;
  labelName?: string;
  width?: number | string;
  required?: boolean;
  readonly?: boolean;
  defaultValue?: string | number;
  inputType: FieldInputType;
  checked?: boolean;
}
