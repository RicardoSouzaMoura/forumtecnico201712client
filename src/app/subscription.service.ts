import { HttpClient, HttpHeaders} from "@angular/common/http";
import { isNull, isUndefined } from 'lodash';

import { Subscription } from "../model/subscription.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class SubscriptionService{
    constructor ( private http: HttpClient ){ }
    
    private subscriptionsUrl = '/api/subscriptions';

    subscriptions: Subscription[];

    getSubscriptions() : Observable <Subscription[]>{
        return this.http.get<Subscription[]>(this.subscriptionsUrl);
    }
}