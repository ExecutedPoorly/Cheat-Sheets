////////////////////////////////////////////////DELAYED/////////////////////////////////////////
function doubleInputDelayed(x, time) {
        return new Promise((resolve) => { //returns the promise, to rsolve this
            setTimeout(() => {
                resolve(x * 2);
            }, time*1000); //time*1000 = miliseconds
        });
    }

doubleInputDelayed(4, 3).then((sum) => console.log(sum));////////
////////////////////////////////////////////////DELAYED/////////////////////////////////////////
