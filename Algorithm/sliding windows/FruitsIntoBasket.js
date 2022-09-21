/*
904. Fruit Into Baskets
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

    - You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
    - Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
    - Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
 */
var totalFruit = function(fruits) {
    let maxLength = 0;
    let start = 0;
    let hash = {};
    
    for(let i = 0; i < fruits.length; i++) {
        let type = fruits[i]
        if(!(hash[type])) {
            hash[type] = 0
        }
        hash[type] += 1;

        while(Object.keys(hash).length > 2) {
            let type1 = fruits[start];
            hash[type1] -= 1;
            if(hash[type1] === 0) {
                delete hash[type1];
            }
            start += 1;
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}