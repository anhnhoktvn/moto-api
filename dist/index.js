const e=process.env.MOTO_GRAPHQL_HOST||"http://localhost:5000/graphql",{request:t}=require("graphql-request");const{request:n}=require("graphql-request");exports.getDevice=function(n){return t(e,'{\n  device: deviceByImei(imei: "352312090142897") {\n    id\n    companyId\n    groupId\n    imei\n    skipAcc\n    type\n    status: status2SByDeviceId(first: 1, orderBy: CREATED_AT_DESC) {\n      nodes {\n        deviceId\n        state\n        distance\n        createdAt\n        electricity\n        gpsOn\n        chargeOn\n        accHigh\n        powerLevel\n        gsmLevel\n        time\n        lat\n        lng\n        speed\n        rotation\n      }\n    }\n  }\n}\n').then(e=>({...e.device,status:e.device.status.nodes[0]}))},exports.addStatus=function(t){return n(e,"mutation ($status: CreateStatus2Input!) {\n  status: createStatus2(input: $status) {\n    status2 {\n      deviceId\n      state\n      distance\n      createdAt\n      electricity\n      gpsOn\n      chargeOn\n      accHigh\n      powerLevel\n      gsmLevel\n      time\n      lat\n      lng\n      speed\n      rotation\n    }\n  }\n}\n",{status:{status2:t}}).then(e=>e.status.status2)};
//# sourceMappingURL=index.js.map
