// export interface AstronomicalData {
//   data: Datum[];
//   meta: Meta;
// }

// export interface Datum {
//   astronomicalDawn: Date;
//   astronomicalDusk: Date;
//   civilDawn:        Date;
//   civilDusk:        Date;
//   moonFraction:     number;
//   moonPhase:        MoonPhase;
//   moonrise:         Date;
//   moonset:          Date;
//   nauticalDawn:     Date;
//   nauticalDusk:     Date;
//   sunrise:          Date;
//   sunset:           Date;
//   time:             Date;
// }

// export interface MoonPhase {
//   closest: Closest;
//   current: Closest;
// }

// export interface Closest {
//   text:  string;
//   time:  Date;
//   value: number;
// }

// export interface Meta {
//   cost:         number;
//   dailyQuota:   number;
//   lat:          number;
//   lng:          number;
//   requestCount: number;
//   start:        Date;
// }

export interface MoonPhase {
  id: number
  phaseName: string
  phaseDescription: string
}
export interface MoonPhaseSnakeCase {
  id?: number
  phase_name: string
  phase_description: string
}

export interface NewMoonPhase {
  phaseName: string
  phaseDescription: string
}