export interface IStatus {
    deviceId?: number;
    state?: number;
    distance?: number;
    duration?: number;
    createdAt?: string;
    offline?: boolean;
    electricity: boolean;
    gpsOn: boolean;
    chargeOn: boolean;
    accHigh: boolean;
    powerLevel: number;
    gsmLevel: number;
    time: string;
    lat: number;
    lng: number;
    speed: number;
    rotation: number;
}
