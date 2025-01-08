import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { map, Observable } from "rxjs";
import { ILoginRequest } from "../models/ILoginRequest";
import { IUserToken } from "../models/IUserToken";
import { isPlatformBrowser } from "@angular/common";
import { IResetPasswordRequest } from "../models/IResetPasswordRequest";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {
    this.platformId = inject(PLATFORM_ID);
  }

  loginURL: string =
    "https://tfiapi.azure-api.net/api/loginuser/Login";
  loginTestURL: string = "https://localhost:7207/Login";
  resetPasswordUrl: string = "https://localhost:7207/api/LoginUser/Reset-Password";
  platformId!: object;

  LogIn(loginCredentials: ILoginRequest): Observable<string> {
    return this.httpClient.post(this.loginURL, loginCredentials, {responseType: "text"}).pipe(
      map((response) => {
        return this.StoreToken(response);
      })
    );
  }

  ResetPassword(resetPasswordRequest: IResetPasswordRequest): Observable<any> {
    return this.httpClient.post(this.resetPasswordUrl, resetPasswordRequest)
  }

  LogOut(): void {
    sessionStorage.removeItem("jwtToken");
  }

  IsLoggedIn(): boolean {

    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem("jwtToken") !== null;
    }
    return false;
  }

  StoreToken(response: string): string {
    sessionStorage.setItem("jwtToken", response)
    return response;
  }

  GetToken() : string {
    if (sessionStorage.getItem("jwtToken") != null) {
      return sessionStorage.getItem("jwtToken")!
    } else return "";
  }
}