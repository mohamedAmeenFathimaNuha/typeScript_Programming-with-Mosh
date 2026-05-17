//  class Point5 {
//    //   private p:number;
//    //   q:number;

//      constructor(p?:number,q?:number){
//         this.p=p;
//         this.q=q;
//      }

//      draw(){
//         console.log('P: '+this.p + 'Q: '+this.q);
//      }
// }
// let point5=new Point5(1,2);
// // point5.p=3;
// point5.q=4;
class Point5 {
    private p:number;
    q:number;

    constructor(p:number,q:number){
        this.p = p;
        this.q = q;
    }

    setP(value:number){
        this.p = value;
    }

    draw(){
        console.log('P: ' + this.p + ' Q: ' + this.q);
    }
}

let point5 = new Point5(1,2);

point5.setP(3);
point5.q = 4;

point5.draw();

/////////////////////////////////
 class Point6{
     constructor(private p1?:number, public q1?:number){
     }

     draw(){
        console.log('P1: '+this.p1 + 'Q: '+this.q1);
     }
}
let point56=new Point6(1,2);
class Point7 {

    constructor(private p:any, public q:any){
    }

    draw(){
        console.log('P: ' + this.p + ' Q: ' + this.q);
    }
}

let point7 = new Point7(1,2);

point7.q = "hello";

point7.draw();