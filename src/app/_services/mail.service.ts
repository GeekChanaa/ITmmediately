import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  http : HttpClient;
  endpoint : string;
  email : string;
  name : string;
  message : string;

  constructor(private httpe : HttpClient){
    this.http = httpe;
    this.email = "chanaa.project@gmail.com";
    this.name = "Chanaa mohammed";
    this.message = "Hello world ! ";

    // The endpoint for php mailer
    this.endpoint = "https://reploye.com/sendd.php";
  }


  // Sending the mail
  sendEmail(mail : any){
    console.log("this is the service")
    let postVars = {
      email : mail.email,
      name : mail.name,
      message : mail.message
    };

    //Checking the response
    return this.http.post(this.endpoint, postVars, {responseType: 'text'});
  }
  
}
