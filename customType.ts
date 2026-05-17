    // let drawPoint=
    //    ( x,y,a,b,c,d,e ) => {
    // }

    //customtype
    // let drawPoint =(point: {x:number,y:number}) =>{
    //     //...
    // }
    // drawPoint({
    //     x:1,
    //     y:2
    // })

    //interface
  interface Point {
    x: number;
    y: number;
}

let drawPoint = (point: Point) => {
};

// drawPoint({
//     x: 1,
//     y: 2
// });
// drawPoint1({
//     x1: 3,
//     y1: 4,
//     draw: () => {}
// });
class Pointt {
    constructor(private x: number, private y: number) {}

    draw() {}
}

let p = new Pointt(1, 2);

drawPoint(pp);


    //cohesion
    //interface only have signature of function can't do implrmentation
    interface Point1{
        x1:number,  //1. 
        y1:number,  //2.
        draw:() => void  //3.
    }

     let drawPoint1 =(point:Point1) =>{
        //...
    }
    let getDistance=(pointA:Point1,pointB:Point1) =>{
        //...
    }

    drawPoint1({
        x111:3,
        y111:4
    })
