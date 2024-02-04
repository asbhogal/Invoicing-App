export interface Country {
  name: Name;
  tld: string;
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currency;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: Translation;
  latlng: number[];
  landlocked: boolean;
  area: number;
  denonyms: Denonym;
  flag: [key: string];
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

export interface Currency {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Translation {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface Denonym {
  [key: string]: {
    f: string;
    m: string;
  };
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}

export type Countries = Country[];
