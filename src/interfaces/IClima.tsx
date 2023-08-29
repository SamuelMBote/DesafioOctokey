export default interface IClima {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {text: string; icon: string};
  };
  location: {name: string; region: string; country: string};
}
