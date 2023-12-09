// Prime Numbers

function Prime(numbr){
    if (numbr <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numbr); i++) {
        if (numbr % i === 0) {
           return false;
        }
    }
    return true;
}

function PrimeFrom(start, end) {
    for (let i = start; i <= end; i++) {
        if (Prime(i)) {
            console.log(i)
        }
    }
}

PrimeFrom(0, 200);