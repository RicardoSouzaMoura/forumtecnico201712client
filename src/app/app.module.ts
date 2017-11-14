import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SendPushComponent } from './send-push/send-push.component';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  declarations: [
    AppComponent,
    SendPushComponent,
    ListSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastyModule.forRoot()                                                                                                                                                                                    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }