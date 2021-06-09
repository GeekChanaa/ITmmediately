import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-Services',
  templateUrl: './Services.component.html',
  styleUrls: ['./Services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private elem : ElementRef) { 
    this.elem.nativeElement.ownerDocument.body.style.setProperty("overflow", "visible", "important");
    document.getElementById("html").style.overflow = "visible";
  }

  ngOnInit() {
  }

  imageLoaded(){
    console.log("an image has been loaded");
  }


}
