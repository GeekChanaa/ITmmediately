import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {
    this.InitCss();
    this.InitScripts();
   }

  ngOnInit() {
  }

  InitScripts(){
    const dynamicJs = [
      "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
      "/assets/vendor/jquery-3.5.1.min.js",
      // "/assets/vendor/animsition.min.js",
      // "/assets/vendor/fastclick.js",
      // "/assets/vendor/css-vars-ponyfill.min.js",
      // "/assets/vendor/gsap.min.js",
      // "/assets/vendor/jarallax.min.js",
      // "/assets/vendor/jquery-numerator.js",
      // "/assets/vendor/jquery.fancybox.min.js",
      // "/assets/vendor/jquery.inview.min.js",
      // "/assets/vendor/jquery.pagepiline.min.js",
      // "/assets/vendor/jquery.validate.min.js",
      // "/assets/vendor/superclick.min.js",
      // "/assets/vendor/swiper.min.js",
      "/assets/js/vlt-plugins.min.js",
      "/assets/js/vlt-helpers.js",
      "/assets/js/vlt-controllers.min.js",
      "/assets/js/custom.js"
    ];
    for(let i = 0; i< dynamicJs.length;i++){
      const node = document.createElement('script');
      node.src = dynamicJs[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  InitCss(){
    const dynamicCss = [
      "assets/css/custom.css",
      "assets/css/vlt-plugins.css",
      "assets/css/vlt-main.css",
      "assets/css/plugins/animate.min.css",
      "assets/css/plugins/animsition.min.css",
      "assets/css/plugins/jquery.fancybox.min.css",
      "assets/css/plugins/superfish.css",
      "assets/css/plugins/swiper.min.css",
    ];
    for(let i = 0; i< dynamicCss.length;i++){
      const node = document.createElement('link');
      node.href = dynamicCss[i];
      node.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
