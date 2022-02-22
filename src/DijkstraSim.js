function DijkstraSim(){

    const canvasElm = document.querySelector("canvas");

    let canvas2D = new Canvas2D(canvasElm); 
    let ctx = canvas2D.getContext2D();

    this.start = () => {


    };
};

const setup = () => {

    window.addEventListener('load',()=>{

        window.app = new DijkstraSim();
        window.app.start();
    });
};

setup();