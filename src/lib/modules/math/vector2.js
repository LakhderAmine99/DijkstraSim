class Vector2d {

    /**
     * @properties
     */
    #x = null;
    #y = null;
    
    /**
     * 
     * @param {*} x 
     * @param {*} y 
     */
    constructor(x,y){

        if(arguments.length === 0)
        {
            this.create(0,0);
        }

        if(arguments.length === 2)
        {
            this.create(x,y);
        }

        if(x instanceof Vector2d)
        {
            this.createFrom2DVect(x);
        }
    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     */
    create(x,y){
        this.#x = x;
        this.#y = y;
    }

    /**
     * 
     * @param {*} vector2d 
     */
    createFrom2DVect(vector2d){
        this.#x = vector2d.getX();
        this.#y = vector2d.getY();
    }

    /**
     * 
     * @param {*} vector2d 
     * @returns 
     */
    sum(vector2d){
        return new Vector2d(this.#x+vector2d.getX(),this.#y+vector2d.getY());
    }

    /**
     * 
     * @param {*} lvector2d 
     * @param {*} rvector2d 
     * @returns 
     */
    static sum(lvector2d,rvector2d){
        return new Vector2d(lvector2d.getX()+rvector2d.getX(),lvector2d.getY()+rvector2d.getY());
    }

    /**
     * 
     * @returns 
     */
    getX(){
        return this.#x;
    }

    /**
     * 
     * @returns 
     */
    getY(){
        return this.#y;
    }
    
    /**
     * 
     * @returns 
     */
    toString(){
        return this.#x + "," + this.#y;
    }
};

export {Vector2d};
