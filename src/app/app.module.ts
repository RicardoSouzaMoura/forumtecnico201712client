import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SendPushComponent } from './send-push/send-push.component';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    SendPushComponent,
    ListSubscriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
