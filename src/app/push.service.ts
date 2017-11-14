import { HttpClient, HttpHeaders} from "@angular/common/http";
import { isNull, isUndefined } from "lodash";

import { Subscription } from "../model/subscription.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


@Injectable()
export class PushService {

  private pushUrl : string;
  private headers: HttpHeaders;
  private body : Object;

  constructor(private http: HttpClient) {
    const user = "smpPush";
    const password = "push2smp!"; 
    const base64 = btoa (`${user}:${password}`);
    const authToken = `Basic ${base64}`;
    this.pushUrl =  '/smp/push/application/br.com.petrobras.forumtecnico201712';
    this.headers = this.createHttpHeaders(authToken);
  }

  sendPushes( message ): Observable<Object>{
    this.body = {
      "alert" : message,
      "data" : new Date().toDateString()
    };
    return this.http.post(this.pushUrl, this.body, {
      headers : this.headers
    });
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
