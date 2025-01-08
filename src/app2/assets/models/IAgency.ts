export interface IAgency {
    ID?: number,
    AgencyName: string,
    AgencyTypeID: number,
    StateID: number,
    AgencyContact?: string,
    PlacementContact?: string,
    StartDate: Date,
    TaxNumber?: string,
}