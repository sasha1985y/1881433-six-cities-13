export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type IconOptions = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
}

export type Points = Point[];
