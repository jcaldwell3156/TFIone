import { IAgency } from "./IAgency";

export interface IAgencyTableData {
    AgencyID: number,
    AgencyName: string,
    AgencyType: string,
    AgencyDetail: IAgency, 
    State: string,
}