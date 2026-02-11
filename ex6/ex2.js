let start = 0;

const timer = () => {
    start++;
    console.log(start);
    if(start === 5){
        clearInterval(inervalId);
    }

}

const inervalId = setInterval(timer, 1000);