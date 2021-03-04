import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})
export class MainComponent implements OnInit {

  testimonial : any;
  testimonials : any[] = [
    {name:"Ainara Vergara", desc:"Microsoft", content:"Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse."},
    {name:"Mohammed Chanaa", desc:"Microsoft", content:"Though the gravity still  at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse."},
    {name:"Mssiyah Youssef ", desc:"Microsoft", content:"Though the gravity  dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse."},
    {name:"Bousslama Amine ", desc:"Microsoft", content:"Though the  still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse."}
  ]

  constructor() { 
    this.testimonial = this.testimonials[0];
  }

  ngOnInit() {
  }

  // changing slider content with typing animation
  changeContent(id : number){
    var i = 0;
    var txt = this.testimonials[id].content;
    var speed = 20;

    function typeWriter() {
      if (i < txt.length) {
        //document.getElem("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    this.testimonial = this.testimonials[id];
  }

}
