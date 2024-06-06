export type TCountries = {
  name: {
    common: string;
  };
  cioc: string;
  currencies: {
    [x: string]: {
      name: string;
      symbol: string;
    };
  };
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  }
};
