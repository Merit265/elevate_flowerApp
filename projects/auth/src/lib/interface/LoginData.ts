export interface LoginData {
 email: string;
 password: string;

}

export interface RegisterData {
 firstName: string;
 lastName: string;
 email: string;
 password: string;
 rePassword: string;
 phone: string;
 gender: string;
}

export interface ForgetPassRes {
 message: string;
 info: string

}
export interface ForgetPassAdaptor {
 message: string;


}
export interface ForgetPassData {
 email: string;
}

