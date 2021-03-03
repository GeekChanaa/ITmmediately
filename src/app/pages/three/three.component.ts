import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;
    mesh = null;
  
  constructor() { 
    this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 35;

        const geometry = new THREE.CylinderGeometry( 10.4, 10.4, 2, 48,1  );
        const material = new THREE.MeshBasicMaterial( {color: 0xffff} );
        this.mesh = new THREE.Mesh(geometry, material);

        this.scene.add(this.mesh);
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {

      // controls
      const controls = new OrbitControls( this.camera, this.renderer.domElement );
      controls.maxPolarAngle = Math.PI * 3.5;
      controls.minDistance = 30;
      controls.maxDistance = 500;
      controls.rotateSpeed = 0.1; // mouse sensitivity

      window.requestAnimationFrame(() => this.animate());
      this.renderer.render(this.scene, this.camera);
  }

}
