
 class Point {
         private _x:number; //fields
         private _y:number; 

        // Inside class methods we do NOT use =>.
        // draw() => {  //this function claeed methods bacasue part of class
        //     //...
        //     console.log('X: '+this.x +', Y: '+this.y)
        // }

        // Initialize in constructor
    constructor() {
        this._x = 0;
        this._y = 0;
    }

        draw():void {  //this function claeed methods bacasue part of class
            //...
            console.log('X: '+this.x +', Y: '+this.y)
        }

        getDistance(another:Point){
            //...
        }
    }
 let point=new Point(); 
//  Accessing private variable ❌
//  point.x=2;
//  point.y=4;//object of a custom type we need to llocatw memory to how? put new operator
 point.draw();

//  /after add consurutor
class Point1 {
        //  private x:number; //fields
        //  private y:number; 

        //  constructor(x?:number,y?:number){
        //     this.x=x;
        //     this.y=y
        //  }
        
         constructor(private x?:number,private y?:number){
            this.x=x;
            this.y=y
         }
        draw() :void {  //this function claeed methods bacasue part of class
            //...
            console.log('X: '+this.x +', Y: '+this.y)
        }
        getDistance(another:Point1){
            //...
        }
        // getX(){
        //     return this.x;
        // }

        // setX(value:number ){
        //     if(value<0)
        //         throw new Error ('value cannot be less than 0.')

        //     this.x=value;
        // }
         get X(){
            return this.x;
        }

        set X(value:number ){
            if(value<0)
                throw new Error ('value cannot be less than 0.')

            this.x=value;
        }
    }

 let point1=new Point1(1,2); 
//  let xx=point1.getX();
//  point1.setX(10);
//  point.X=10;

let x=point1.X;
 point1.X=10;
 point1.draw();