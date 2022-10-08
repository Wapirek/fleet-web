interface StructureBuilderModel {
  links: {
    name: string;
    url: string;
  }[];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  links: [
    {
      name: 'Transakcje',
      url: 'transakcje'
    },
    {
      name: 'Statystyki',
      url: 'statystyki'
    },
    {
      name: 'Ustawienia',
      url: 'ustawienia'
    }
  ]
};
