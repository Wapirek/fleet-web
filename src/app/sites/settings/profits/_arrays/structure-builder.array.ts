export declare type CodeNameWidget = 'add_profit';

interface StructureBuilderModel {
  widgets: {
    name: string;
    codeName: CodeNameWidget;
    icon: string;
  }[];
}

export const StructureBuilderArray: StructureBuilderModel = {
  widgets: [
    {
      name: 'Dodaj przychód',
      codeName: 'add_profit',
      icon: 'add'
    }
  ]
}
