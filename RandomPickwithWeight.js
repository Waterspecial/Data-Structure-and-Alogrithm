/*
528. Random Pick with Weight

You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.

You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).
*/



var Solution = function(w) {
    this.weights = [];
    this.sum = 0;
    for(let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.weights.push(this.sum)
    }
};
        

Solution.prototype.pickIndex = function() {
    let index = Math.floor(Math.random() * this.sum);
    let arr = this.weights;

    let low = 0, high = arr.length - 1

    while(low < high) {
        let mid = Math.floor(low + (high - low) / 2)
        if(this.weights[mid] < index) {
            low = mid + 1
        } else if(this.weights[mid] > index) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return low;
};
