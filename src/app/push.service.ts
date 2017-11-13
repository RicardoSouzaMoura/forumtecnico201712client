import { HttpClient, HttpHeaders} from "@angular/common/http";
import { isNull, isUndefined } from "lodash";

import { Subscription } from "../model/subscription.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


@Injectable()
export class PushService {

  constructor(private http: HttpClient) {
    const user = "smpPush";
    const password = "push2smp!"; 
    const base64 = btoa (`${user}:${password}`);
    const authToken = `Basic ${base64}`;
    console.log (authToken);
    this.headers = this.createHttpHeaders(authToken);
  }
  
  private pushUrl = '/smp/push/br.com.petrobras.forumtecnico201712';
  private headers: HttpHeaders;
  private body : {};

  sendPushes( message ){
    this.body = {
      "alert" : message,
      "data" : new Date().toDateString()
    }
    this.http.post(this.pushUrl, this.body, {
      headers : this.headers
    }).subscribe();
  }
  
  createHttpHeaders(authToken): HttpHeaders {
      // Just checking is this._options is null using lodash
      if (isNull(this.headers)) {
          const headers = new HttpHeaders()
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Authorization', authToken || '');
      }
      return this.headers;
    }

}
