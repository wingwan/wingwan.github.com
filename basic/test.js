var a1 = 1, a2 = 2;
function test(n){

    if(n == 1){

        y = a1;

    }else if(n == 2){

        y = a2;

    }else if(n >= 3){

        y = test(n-1) + test(n-2);

    }

    return y;
}
console.log(test(1));
console.log(test(2));
console.log(test(3));
console.log(test(4));
console.log(test(5));