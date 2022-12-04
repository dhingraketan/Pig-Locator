import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare var window: any;

@Component({
  selector: 'app-password-popup',
  templateUrl: './password-popup.component.html',
  styleUrls: ['./password-popup.component.css']
})
export class PasswordPopupComponent implements OnInit {

  entered!: string;
  private password: string = "84892b91ef3bf9d216bbc6e88d74a77c";
  formModal: any;

  private statusChangeSubscribtion!: Subscription;
  @Input() changeStatus!: Observable<void>;

  private statusDeleteSubscribtion!: Subscription;
  @Input () deleteStatus!: Observable<void>;

  @Output() passwordCheck: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal"));

    this.statusChangeSubscribtion = this.changeStatus.subscribe(() => this.openModelPopup());
    this.statusDeleteSubscribtion = this.deleteStatus.subscribe(() => this.openModelPopup());

  }

  openModelPopup() {
    this.formModal.show();
  }

  onSubmit(){
    this.formModal.hide();
    console.log(this.entered);
    this.verifyPassword();
  }

  verifyPassword(){
    this.http.get("https://api.hashify.net/hash/md5/hex?value=" + this.entered)
    .subscribe((data: any) => {
      if(data.Digest == this.password){
        this.passwordCheck.emit(true);
      } else {
        this.passwordCheck.emit(false);
      }
    })
  }

}


