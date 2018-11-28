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
    status: status2SByDeviceId(first: 1, orderBy: CREATED_AT_DESC) {
      nodes {
        deviceId
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
}
`
  ).then(res => ({ ...res.device, status: res.device.status.nodes[0] }));
}
