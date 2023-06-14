const nums =['war', 'pathaan', 'hulk', 'flash', 'pokemon'];

console.log( typeof nums );
console.log( nums.length );

nums.push('ddlj');

console.log(nums);

nums.unshift('3 idiots');
console.log(nums);

console.log( [ ...nums, 'spidermon'] );

// removes the last element from the array
nums.pop();
console.log( nums );

// indexing
console.log(nums[3]);

// slicing
console.log( nums.slice(1, 3) );

// removing elements from specific index
nums.splice(3, 2);

