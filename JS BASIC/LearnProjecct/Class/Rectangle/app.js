class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea(){
        return this.height * this.width;
    }

    getPerimeter(){
        return (this.width + this.height)*2;
    }

    displayRectangle(){
        
    }
}