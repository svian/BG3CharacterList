export interface CharacterListData {
  img: string;
  name: string;
  race: string;
  class: string;
  level: number;
  background: string;
}

export interface PlaythroughDetailsData {
  name: string;
  background: string;
  romanced: string;
  progress: string;
  companions: [
    {
      name: string;
      summary: string;
    }
  ];
  notes: string;
}
