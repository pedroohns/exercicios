const nums = [1, 2, 3, 4];
const somaNums = nums.reduce((acumulador, nums) => {
    return acumulador + nums;
}, 0);
console.log(somaNums);