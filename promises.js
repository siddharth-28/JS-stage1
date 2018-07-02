//var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    /*if (/* everything turned out fine *///) {
    //  resolve("Stuff worked!");
   // }
    //else {
     // reject(Error("It broke"));
    //}
 // })
//  console.log("1");
//  setTimeout(function(){console.log("2");},3000);
//  console.log("3");
//  setTimeout(function(){console.log("4");},1000);
let promise1=new Promise(function(resolve,reject){
let isClean=false;
if(isClean){
 resolve("clean");
}
else{
    reject("not clean");
}   

});
promise1.then(function(fromResolve){
    console.log("the room is " +fromResolve);
}).catch(function(fromReject){
   console.log("the room is "+fromReject);
})