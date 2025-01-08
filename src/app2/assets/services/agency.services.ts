import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAgencyPersonOfNote } from "../models/IAgencyPersonOfNote";
import { IAgency } from "../models/IAgency";
import { IAgencyAssignRegion } from "../models/IAgencyAssignRegion";
import { IAgencyLinkThirdPartyService } from "../models/IAgencyLinkThirdPartyService";

@Injectable({providedIn: 'root'})
export class AgencyService {
constructor(private httpClient: HttpClient){}

    personOfNoteURL: string = 'https://localhost:7236/PersonOfNote/';
    agencyURL: string = 'https://localhost:7236/Main/';
    agencyRegionURL: string = 'https://localhost:7236/AssignedRegion/';
    agencyThirdPartyURL: string = 'https://localhost:7236/LinkThirdPartyService/';
    
    SendAgency(agency: IAgency): Observable<any> {
        return this.httpClient.post(this.agencyURL, agency);
    }

    SendAgencyAssignRegion(agencyAssignRegion: IAgencyAssignRegion): Observable<any> {
        return this.httpClient.post(this.agencyRegionURL, agencyAssignRegion)
    }

    SendPersonOfNote(staffAgencyList: IAgencyPersonOfNote): Observable<any> {
        return this.httpClient.post(this.personOfNoteURL, staffAgencyList);
    }

    SendAgencyLinkThirdPartyService(thirdPartyService: IAgencyLinkThirdPartyService): Observable<any> {
        return this.httpClient.post(this.agencyThirdPartyURL, thirdPartyService);
    }

    UpdateAgency(agency: IAgency): Observable<any> {
        return this.httpClient.post(this.agencyURL, agency);
    }

    UpdateAgencyAssignRegion(agencyAssignRegion: IAgencyAssignRegion): Observable<any> {
        return this.httpClient.post(this.agencyRegionURL, agencyAssignRegion)
    }

    UpdatePersonOfNote(staffAgencyList: IAgencyPersonOfNote): Observable<any> {
        return this.httpClient.post(this.personOfNoteURL, staffAgencyList);
    }

    UpdateAgencyLinkThirdPartyService(thirdPartyService: IAgencyLinkThirdPartyService): Observable<any> {
        return this.httpClient.post(this.agencyThirdPartyURL, thirdPartyService);
    }

    DeleteAgencyAssignedRegion(agencyAssignRegionID: number) {
        return this.httpClient.delete(this.agencyRegionURL + agencyAssignRegionID);
    }

    DeletePersonOfNote(personOfNoteID: number) {
        return this.httpClient.delete(this.personOfNoteURL + personOfNoteID)
    }
}