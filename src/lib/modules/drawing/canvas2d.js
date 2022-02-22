class Canvas2D {

    canvas2D = null;
    canvas2DContext = null;

    constructor(canvas,width,height){

        this.#init(canvas,width,height);
    };

    #init(canvas,width,height){

        this.Canvas2D = canvas;
        this.Canvas2D.width = width || 600;
        this.Canvas2D.height = height || 400;
        this.canvas2DContext = canvas.getContext("2d");
    };

    getContext2D(){
        return this.canvas2DContext;
    };
};