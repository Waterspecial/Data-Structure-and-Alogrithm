var letterCasePermutation = function (s) {
  const result = [];

  const dfs = (i, s, slate) => {
    // base case
    if (i === s.length) {
      result.push(slate.join(""));
      return;
    }

    let char = s[i];

    if (!Number.isInteger(parseInt(char))) {
      // upper case
      slate.push(char.toUppercase());
      dfs(i + 1, s, slate);
      slate.pop();

      // lowercase
      slate.push(char.toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();
    }
  };
  dfs(0, s, []);
  return result;
};
