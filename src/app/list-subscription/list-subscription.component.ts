import { Component, OnInit } from '@angular/core';

import { Subscription } from '../../model/subscription.model';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.css'],
  providers: [SubscriptionService]
})
export class ListSubscriptionComponent implements OnInit {

  subscriptions: Subscription[];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.loadSubscriptions();
  }

  loadSubscriptions(){
    this.subscriptions = this.subscriptionService.getSubscriptions();
  }

}
