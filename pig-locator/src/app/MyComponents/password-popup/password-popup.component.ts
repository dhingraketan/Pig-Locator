import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

declare var window: any;

@Component({
  selector: 'app-password-popup',
  templateUrl: './password-popup.component.html',
  styleUrls: ['./password-popup.component.css']
})
export class PasswordPopupComponent implements OnInit {

  password!: string;
  private statusChangeSubscribtion!: Subscription;

  @Input() changeStatus!: Observable<void>;
  
  formModal: any;

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal"));

    this.statusChangeSubscribtion = this.changeStatus.subscribe(() => this.openModelPopup());

  }

  openModelPopup() {
    this.formModal.show();
  }

  onSubmit(){
    this.formModal.hide();
    console.log(this.password);
  }

}


