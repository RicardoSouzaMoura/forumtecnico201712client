import { Component, OnInit } from '@angular/core';
import { PushService } from '../push.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-send-push',
  templateUrl: './send-push.component.html',
  styleUrls: ['./send-push.component.css'],
  providers: [PushService]
})
export class SendPushComponent implements OnInit {

  constructor(private pushService: PushService, 
    private toastyService:ToastyService, 
    private toastyConfig: ToastyConfig) { 
      this.toastyConfig.theme = 'bootstrap';
      this.toastyConfig.position = 'top-right';
    }
  
  pushMessage : string;

  ngOnInit() {
    this.pushMessage = "";
  }

  onSendPushes(){
    this.pushService.sendPushes(this.pushMessage)
          .subscribe(
            () => {
              console.log("Sucesso");
              this.addSuccessToast();
          },
            (error) => {
              console.log(`erro: ${error}`);
              this.addErrorToast();
          });
  }
  addSuccessToast() {
    var toastOptions:ToastOptions = {
      title: "Sucesso",
      msg: "Push Enviado.",
      showClose: true,
      timeout: 5000
    };
    this.toastyService.success(toastOptions);
  }

  addErrorToast() {
    var toastOptions:ToastOptions = {
      title: "Erro",
      msg: "Algo deu errado.",
      showClose: true,
      timeout: 5000
    };
    this.toastyService.error(toastOptions);
  }
}
