import { Observable } from "rxjs";

export abstract class AuthApi {
 abstract signIn(data: any): Observable<any>;
 abstract signup(data: any): Observable<any>;
 // abstract changePassword(data: any): Observable<any>;
 // abstract uploadPhoto(data: any): Observable<any>;
 // abstract UserData(data: any): Observable<any>;
 // abstract logout(data: any): Observable<any>;
 abstract forgotPassword(data: any): Observable<any>;
 // abstract verifyResetCode(data: any): Observable<any>;
 // abstract resetPassword(data: any): Observable<any>;
 // abstract deleteAccount(data: any): Observable<any>;
 // abstract editProfile(data: any): Observable<any>;



}