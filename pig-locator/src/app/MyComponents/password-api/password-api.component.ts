import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-api',
  templateUrl: './password-api.component.html',
  styleUrls: ['./password-api.component.css']
})
export class PasswordApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private password: string = "84892b91ef3bf9d216bbc6e88d74a77c";

  ngOnInit(): void {
  }

  verifyPassword(enteredPassword: string): boolean {
    this.http.get("https://api.hashify.net/hash/md5/hex?value=" + enteredPassword)
    .subscribe((data: any) => {
      if(data.Digest == this.password){
        return true;
      } else {
        return false;
      }
    })

    return false;
  }
  

}
