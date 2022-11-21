import { FieldModel } from 'src/app/shared/models/models/field.model';
import { ButtonModel } from 'src/app/shared/models/structure-html/button.model';

export interface StructureBuilderModel {
  fields: FieldModel[][];
  bottom: ButtonModel[];
}
