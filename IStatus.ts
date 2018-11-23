export interface IStatus {
  // state
  state?: number;
  distance?: number;
  duration?: number;
  createdAt?: string;
  offline?: boolean;
  // heartbeat
  electricity: boolean;
  gpsOn: boolean;
  chargeOn: boolean;
  accHigh: boolean;
  powerLevel: number;
  gsmLevel: number;
  // location
  time: string;
  lat: number;
  lng: number;
  speed: number;
  rotation: number;
}
