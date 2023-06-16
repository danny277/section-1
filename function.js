// how to make function in javascript

function checkEven(n){
    if(n%2 == 0 ){
        console.log('even');
    }else{
        console.log('odd');
    }
}

checkEven(457);

// second method to call function

const getAvg = function(n1, n2 , n3){
    const avg = (n1+n2+n3)/3;

    console.log(avg);
};

getAvg(43, 786, 236);

// create a function to print fibonacci series

const printFibo = function(){
    const [a, b] = [0, 1];
    console.log(0);
    console.log(1);

    while(a < 100){
        const c = a + b;
        console.log(c);
        [a, b] = [b, c]

    }
};

printFibo();