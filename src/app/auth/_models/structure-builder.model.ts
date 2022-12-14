import { FieldModel } from 'src/app/shared/models/models/field.model';

export interface StructureBuilderModel {
  top: {
    description: string;
    btn: {
      path: string;
      displayName: string;
    }
  };
  fields: FieldModel[];
  saveBtn: { btn: string; reminder: string; };
  rights: string;
}
