const e=process.env.MOTO_GRAPHQL_HOST||"http://localhost:5000/graphql",{request:t}=require("graphql-request");const{request:n}=require("graphql-request");exports.getDevice=function(n){return t(e,`{\n  device: deviceByImei(imei: "${n}") {\n    id\n    companyId\n    groupId\n    imei\n    skipAcc\n    type\n    status: status2SByDeviceId(first: 1, orderBy: CREATED_AT_DESC) {\n      nodes {\n        deviceId\n        state\n        distance\n        createdAt\n        electricity\n        gpsOn\n        chargeOn\n        accHigh\n        powerLevel\n        gsmLevel\n        time\n        lat\n        lng\n        speed\n        rotation\n      }\n    }\n  }\n}\n`).then(e=>({...e.device,status:e.device.status.nodes[0]}))},exports.addStatus=function(t){const{deviceId:s,state:a,distance:c,createdAt:i,electricity:r,gpsOn:d,chargeOn:u,accHigh:o,powerLevel:g,gsmLevel:l,time:p,lat:v,lng:h,speed:m,rotation:O}=t;return n(e,"mutation ($status: CreateStatus2Input!) {\n  status: createStatus2(input: $status) {\n    status2 {\n      deviceId\n      state\n      distance\n      createdAt\n      electricity\n      gpsOn\n      chargeOn\n      accHigh\n      powerLevel\n      gsmLevel\n      time\n      lat\n      lng\n      speed\n      rotation\n    }\n  }\n}\n",{status:{status2:{deviceId:s,state:a,distance:c,createdAt:i,electricity:r,gpsOn:d,chargeOn:u,accHigh:o,powerLevel:g,gsmLevel:l,time:p,lat:v,lng:h,speed:m,rotation:O}}}).then(e=>e.status.status2)};
//# sourceMappingURL=index.js.map
