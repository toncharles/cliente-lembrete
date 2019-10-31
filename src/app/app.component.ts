import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'CRUD de lembretes com o Angular';
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  /*constructor(){
    this.errorMsgComponent.setError('Esta é uma mensagem de erro');
  }*/
  ngOnInit() {
    this.errorMsgComponent.setError('Mensagem de erro!');
  }
}
