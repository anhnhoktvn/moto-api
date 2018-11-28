import { HOST } from "./host";
import { IStatus } from "./IStatus";

const { request } = require("graphql-request");
export function addStatus(status: IStatus): Promise<IStatus> {
  const {
    deviceId,
    state,
    distance,
    createdAt,
    electricity,
    gpsOn,
    chargeOn,
    accHigh,
    powerLevel,
    gsmLevel,
    time,
    lat,
    lng,
    speed,
    duration,
    rotation
  } = status;
  return request(
    HOST,
    `mutation ($status: CreateStatus2Input!) {
  status: createStatus2(input: $status) {
    status2 {
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
      duration
      rotation
    }
  }
}
`,
    {
      status: {
        status2: {
          deviceId,
          state,
          distance,
          createdAt,
          electricity,
          gpsOn,
          chargeOn,
          accHigh,
          powerLevel,
          gsmLevel,
          time,
          lat,
          lng,
          speed,
          duration,
          rotation
        }
      }
    }
  ).then(res => res.status.status2 as IStatus);
}
