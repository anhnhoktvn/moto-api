import { HOST } from "./host";
import { IDevice } from "./IDevice";

const { request } = require("graphql-request");
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
