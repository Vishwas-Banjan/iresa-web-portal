export interface SearchDataModel {
  tracks?: { items: Item[] };
  artists?: { items: Item[] };
  albums?: { items: Item[] };
  playlists?: { items: Item[] };
}

export interface Item {
  id: string;
  name: string;
  type: string;
  images?: any[];
  album?: {
    id: string;
    images: any[];
  };
}
