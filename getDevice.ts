import { HOST } from "./host";

const { request } = require("graphql-request");
interface IStatus {
  // state
  state: number;
  distance: number;
  createdAt: string;
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
interface IDevice {
  id: number;
  companyId: number;
  groupId: number;
  imei: string;
  skipAcc: boolean;
  type: string;
  status: IStatus;
}

export function getDevice(imei: string): Promise<IDevice> {
  return request(
    HOST,
    `{
  device: deviceByImei(imei: "${imei}") {
    id
    companyId
    groupId
    imei
    skipAcc
    type
    status: statusByDeviceId {
      state
      distance
      createdAt
      electricity
      gpsOn
      chargeOn
      accHigh
      powerLevel
      gsmLevel
      time
      lat
      lng
      speed
      rotation
    }
  }
}
`
  ).then(res => res.device as IDevice);
}
