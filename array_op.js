const nums = [4, 8, 29, 35, 252, 395];

for(let n of nums){
    console.log(n ** 2);
}

const res = nums.map( (n) =>{ return n** 2 } );
console.log(res);