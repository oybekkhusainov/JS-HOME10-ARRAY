let  a = [1,5,4];
let b = [2,4,6,];

function sum(a,b){
    let c ;
    let d ;

    for(let item of a){
        c += item
    }
    for(let item of b){
        d += item
    }
    
    return c-d

}
console.log(sum(a,b))