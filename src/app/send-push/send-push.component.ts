import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-send-push',
  templateUrl: './send-push.component.html',
  styleUrls: ['./send-push.component.css'],
  providers: [SubscriptionService]
})
export class SendPushComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
  }

  onSendPushes(){
    this.subscriptionService.sendPushes();
  }

}
