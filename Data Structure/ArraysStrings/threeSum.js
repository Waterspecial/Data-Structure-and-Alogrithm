var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    while (left < right) {
        let sum = nums[i] + nums[left] +  nums[right];

        if(sum === 0) {
            let arr = [nums[i], nums[left], nums[right]];
            res.push(arr);
            left++;
            while(nums[left - 1] === nums[left] && left < right) {
                left++
            }
        }
        else if(sum > 0) {
            right--;
        }
        else{
            left--;
        }
    }
  }
  return res;
};
