import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})
export class MainComponent implements OnInit {

  testimonial : any;
  testimonials : any[] = [
    {id: 0 ,name:"Ainara Vergara", desc:"Microsoft", content:"Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.", image : "/assets/images/customers/1.jpg"},
    {id: 1 ,name:"Mohammed Chanaa", desc:"Microsoft", content:"Though the gravity still  at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.", image : "/assets/images/customers/2.jpg"},
    {id: 2 ,name:"Mssiyah Youssef ", desc:"Microsoft", content:"Though the gravity  dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.", image : "/assets/images/customers/3.jpg"},
    {id: 3 ,name:"Bousslama Amine ", desc:"Microsoft", content:"Though the  still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.", image : "/assets/images/customers/4.jpg"}
  ]

  constructor( private elem: ElementRef) { 
    this.testimonial = this.testimonials[0];
    
  }

  ngOnInit() {
  }

  

  // changing slider content with typing animation ( the animation is not working yet)
  changeContent(id : number){
    var txt = this.testimonials[id].content;
    let divpic = this.elem.nativeElement.querySelector('.testimonial-pic');
    divpic.style.background = "url('"+this.testimonials[id].image+"')";
    divpic.style.backgroundSize = "cover";
    this.testimonial = this.testimonials[id];
  }

}
