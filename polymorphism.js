

// classCar {​​​​​
// constructor() {​​​​​
//     }​​​​​
// color() {​​​​​
// return''
//     }​​​​​
// engine() {​​​​​
// return''
//     }​​​​​
// }​​​​​
// classHondaextendsCar {​​​​​
// constructor(c, e) {​​​​​
// super()
// this.bodyColor = c
// this.engineStr = e
//     }​​​​​
// color() {​​​​​ 
// return`Color of the car : ${​​​​​this.bodyColor}​​​​​`
//     }​​​​​
// engine() {​​​​​
// return`Engine : ${​​​​​this.engineStr}​​​​​`
//     }​​​​​
// }​​​​​
// classToyotaextendsCar {​​​​​
// constructor(c, e) {​​​​​
// super()
// this.bodyColor = c
// this.engineStr = e
//     }​​​​​
// color() {​​​​​ 
// return`Color of the car : ${​​​​​this.bodyColor}​​​​​`
//     }​​​​​
// engine() {​​​​​
// return`Engine : ${​​​​​this.engineStr}​​​​​`
//     }​​​​​
// }​​​​​
// varcar1 = newHonda('black', 8)
// varcar2 = newToyota('white', 16)
// console.log(car1.color())




class Shape
{   constructor()
    {

    }
    area()
    {
     return ''  
    }

    
}


class triangle extends Shape
{  constructor(a,b)
    {   super()
        this.b=a
        this.h=b
    }
    area()  // over riding
    {
       return  1/2*this.b*this.h
    }
}



class circle extends Shape
{    constructor(a)
    {   super()
        this.r=a
        
    }

    area()
    {
      return 3.14*this.r*this.r 
    }
}



class square extends Shape
{    constructor(a)
    {   super()
        this.s=a
        
    }
    area()
    {
      return  this.s*this.s
    }
}




class rectangle extends Shape
{  constructor( a ,b)
    {   super()
        this.b=a
        this.l=b      
    }                                 
    area()
    {
       return   this.l*this.b
    }
}


var shapes=[ new triangle( 4, 6) , new square(4), new circle(5) , new rectangle(8, 9)  ]


function allshapes(n)
{  
    var totalarea=0
    n.forEach( item => {
      console.log(item.area())
      totalarea=totalarea+item.area()
  })
  return totalarea
}

var d= allshapes(shapes)
console.log(d , "total area")

var c= new square(7)
console.log(c.area())

