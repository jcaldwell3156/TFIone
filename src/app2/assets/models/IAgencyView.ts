import { IAgency } from "./IAgency";
import { IAgencyAssignRegion } from "./IAgencyAssignRegion";
import { IAgencyLinkThirdPartyService } from "./IAgencyLinkThirdPartyService";
import { IAgencyPersonOfNote } from "./IAgencyPersonOfNote";
import { ITFIAddress } from "./ITFIAddress";

export interface IAgencyView {
    Agency: IAgency,
    AgencyRegion: IAgencyAssignRegion[],
    AgencyPeopleOfNote: IAgencyPersonOfNote[],
    AgencyAddress: ITFIAddress,
    AgencyThirdPartyLink?: IAgencyLinkThirdPartyService
}