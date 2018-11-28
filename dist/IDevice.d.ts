import { IStatus } from "./IStatus";
export interface IDevice {
    id: number;
    companyId: number;
    groupId: number;
    imei: string;
    skipAcc: boolean;
    type: string;
    status: IStatus;
}
