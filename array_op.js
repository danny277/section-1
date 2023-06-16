const nums = [4, 8, 29, 35, 252, 395];

for(let n of nums){
    console.log(n ** 2);
}

const res = nums.map( (n) =>{ return n** 2 } );
console.log(res);

// prices
//  prices = [2355, 2388, 9993, 7500, 23567];

// const res1 = prices.map( (n) =>{ return n/2 } );
// console.log(res1);

 const res2 = nums.filter(  (a) => { return a%2==0 }   );
 console.log(res2);

const prices = [2355, 2388, 9993, 7500, 23567];

// less than 1000, greater than 5000

const res3 = prices.filter(  (p) => { return p<5000 && p>10000 }   );
console.log(res3);



