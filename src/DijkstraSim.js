import {Vector2d} from "./lib/modules/math/vector2.js";

function DijkstraSim(){

    const canvasElm = document.querySelector("canvas");

    let canvas2D = new Canvas2D(canvasElm); 
    let ctx = canvas2D.getContext2D();

    this.start = () => {

        let vect1 = new Vector2d(1.9,1.5);
        let vect2 = new Vector2d(0.8,0.5);
        
        
    };
};

const setup = () => {

    window.addEventListener('load',()=>{

        window.app = new DijkstraSim();
        window.app.start();
    });
};

setup();