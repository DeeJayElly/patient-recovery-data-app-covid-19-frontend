export class WarningScore {
  _id: number;
  years: number;
  numberOfRespirations: number;
  oxygenSaturation: number;
  anyAdditionalO2: boolean;
  systolicPressure: number;
  heartRate: number;
  stateOfConsciousness: number;
  bodyTemperature: number;
  coughDegree?: number;
  score: number;
}
