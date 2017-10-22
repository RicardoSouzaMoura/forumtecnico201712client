import { Subscription } from "../model/subscription.model";

export class SubscriptionService{

    subscriptions: Subscription[];

    getSubscriptions(){
        return this.subscriptions.slice();
    }

    sendPushes(){
        console.log("sending pushes");
    }
}