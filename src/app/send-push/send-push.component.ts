import { Component, OnInit } from '@angular/core';
import { PushService } from '../push.service';


@Component({
  selector: 'app-send-push',
  templateUrl: './send-push.component.html',
  styleUrls: ['./send-push.component.css'],
  providers: [PushService]
})
export class SendPushComponent implements OnInit {

  constructor(private pushService: PushService) { }
  
  pushMessage : string;

  ngOnInit() {
    this.pushMessage = "";
  }

  onSendPushes(){
    this.pushService.sendPushes(this.pushMessage)
          .subscribe(
            ()=>{console.log("Sucesso")},
            (error)=>{console.log(`erro: ${error}`)}
          );
  }

}
