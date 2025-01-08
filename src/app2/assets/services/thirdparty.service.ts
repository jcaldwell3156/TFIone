import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ThirdPartyService {
    constructor(private httpClient: HttpClient) {}

    texasProviderURL: string = "https://example.com";
    ecapAgencyURL: string = "https://ECAPGetRequest.com";

    GetECAPAgencyID(): Observable<any> {
        return this.httpClient.get<any>(this.ecapAgencyURL);
    }

    CheckTPGRID(): Observable<any> {
        return this.httpClient.get<any>(this.texasProviderURL);
    }
}