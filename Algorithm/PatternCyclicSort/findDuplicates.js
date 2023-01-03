var findDuplicates = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;

    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(nums[i]);
    }
  }
  return result;
};
