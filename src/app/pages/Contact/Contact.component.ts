import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/_services/mail.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Mail properties
  mail : any = {};
  // Constructor
  constructor(
    private _mailService : MailService,
    private _matSnackBar : MatSnackBar
  ) { }

  ngOnInit() {
  }

  sendmail(){
    this._mailService.sendEmail(this.mail).subscribe((data) => {
      this._matSnackBar.open("Email Sent Succesfully");
    });
  }

}
