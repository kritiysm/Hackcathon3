// let object = {
//     a: 1,
//     b: 2,
// }
// console.log(object["b"])



function toArr(obj) {
    let arr = [];
    for (const key in obj) {
         let innerarr=[];
         innerarr.push(key);
         innerarr.push(obj[key])
         arr.push(innerarr)
            
        }
        return arr
    }
    console.log(toArr({a:1 ,b:2}))
    console.log(toArr({a:4 ,b:5}))

