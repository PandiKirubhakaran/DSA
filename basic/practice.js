//just own reference
const a=192
console.log(a.toString()); //'192'
console.log(+a.toString()); //192 is a number, if we add '+' we got this as number
console.log('1234'.toString())
// console.log(4.toString()) this will not take a number directly js is confusing so if we need to call the num directly we have few methods
console.log(4.0.toString(),(4).toString(),4 .toString()); //'4','4','4'
console.log(typeof(a.toString()));//string
console.log('123'.split(''));//['1','2','3']
console.log(['1', '2', '3'].join('e'));//1e2e3