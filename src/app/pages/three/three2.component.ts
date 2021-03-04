import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

    public renderer = new THREE.WebGLRenderer();
    public scene = null;
    public camera = null;
    public mesh = null;
    public raycaster = null;
    public mouse = null;
    public group = null;
  
  constructor() { 
        this.scene = new THREE.Scene();
        //console.log(this.mouse);     
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();   
        this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);
        this.group = new THREE.Group();
        
        window.addEventListener('click', this.onDocumentMouseDown.bind(this), false);
        this.camera.position.z = 10;
        
        const geometry = new THREE.IcosahedronGeometry( 5, 1 );
        console.log("this is the number of faces of the object");
        console.log(geometry.attributes.position);
        const lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5 } );
			  const meshMaterial = new THREE.MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true } );
        this.group.add( new THREE.LineSegments( geometry, lineMaterial ) );
			  this.group.add( new THREE.Mesh( geometry, meshMaterial ) );
        const material = new THREE.MeshLambertMaterial( { color: 0x156289 } );
        this.mesh = new THREE.Mesh(geometry, material);

        // Adding frame wires
        var wire = new THREE.LineSegments(new THREE.WireframeGeometry(this.mesh.geometry), new THREE.LineBasicMaterial({color: "black"}));
        this.mesh.add(wire);

        // Lights
        // var dlight = new THREE.DirectionalLight( 0xff0000, 1 );
        // dlight.position.set(10,10,10);
        // this.scene.add( dlight );

        // var alight = new THREE.AmbientLight( 0xff0000, 0.2 );
        // this.scene.add( alight );
        const lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );

        this.scene.add(this.group);
  }

  onDocumentMouseDown(event) {
        // Welcome to the exciting world of raycasting !
    // First let's get some mouse coordinates:        
    console.log(this.mouse);

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // This is basically converting 2d coordinates to 3d Space:
    this.raycaster.setFromCamera(this.mouse, this.camera);
    // And checking if it intersects with an array object
    
    var intersects = this.raycaster.intersectObjects([this.mesh]);
    console.log(intersects);
    
    // does your cursor intersect the object on click ? 
    console.log(intersects.length < 0 ? "yes" : "no");
    
    // And finally change the color:
    if (intersects.length > 0) {
      intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
    }
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {

      // controls
      // const controls = new OrbitControls( this.camera, this.renderer.domElement );
      // controls.maxPolarAngle = Math.PI * 3.5;
      // controls.minDistance = 5;
      // controls.maxDistance = 500;
      // controls.rotateSpeed = 0.1; // mouse sensitivity

      window.requestAnimationFrame(() => this.animate());
      this.group.rotation.x += 0.003;
      this.group.rotation.y += 0.003;
      this.group.rotation.z += 0.003;
      this.renderer.render(this.scene, this.camera);
  }

}
