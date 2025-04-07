import { loginResAdaptor } from './../interface/LoginRes';
import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import { LoginRes } from '../interface/LoginRes';
import { ForgetPassAdaptor, ForgetPassData,ForgetPassRes } from '../interface/LoginData';

@Injectable({
  providedIn: 'root'
})
export class AdaptorService implements Adaptor {

  constructor() { }
  adapt(data: LoginRes): loginResAdaptor {
    return {
      message: data.message,
      myToken: data.token,
      email: data.user.email
    }
  }

  adaptforgetPassMsg(data: ForgetPassRes): ForgetPassAdaptor {
    return {
      message: data.info
    }
  }
}
