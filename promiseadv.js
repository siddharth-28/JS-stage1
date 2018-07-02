let cleanRoom=function(){
    return new Promise(function(resolve,reject){
        resolve("Room cleaned");
    });
    };
    let removeGarbage=function(messgage){
        return new Promise(function(resolve,reject){
            resolve(message +'remove garbage');
        });   
    };
    let winIcecream=function(message){
        return new Promise(function(resolve,reject){
            resolve(message + "won icecream");
        });
    };
cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winIcecream(result);
}).then(function(result){
    console.log("finished "+ result);
})