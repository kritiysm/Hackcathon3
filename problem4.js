function alladd() {
   let stor = 0;
   for (let i = 0; i < arguments.length; i++) {
      stor += arguments[i]
   }
      return stor
}
 

console.log(alladd(4, 2))  //output 6 
console.log(alladd(4, 8)) 