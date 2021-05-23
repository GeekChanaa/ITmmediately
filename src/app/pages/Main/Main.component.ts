import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})
export class MainComponent implements OnInit {

 

  constructor( ) { }

  ngOnInit() {
    this.InitScripts();
  }

  InitScripts(){
    const dynamicJs = [
      "/assets/js/full-page.js",
    ];
    for(let i = 0; i< dynamicJs.length;i++){
      const node = document.createElement('script');
      node.src = dynamicJs[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }


}
