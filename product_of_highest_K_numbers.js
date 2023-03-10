
class Stream {
  constructor(k) {
    this.array = [];
    this.k = k
  }
  
  new_number_recieved (num){
    this.array.push(num);
    this.array = this.array.sort((a,b) => a - b);
  }
  
  product_of_highest_K_numbers () {
    let i = this.array.length - this.k;
    let product = 1
    while(i < this.array.length) {
      product *= this.array[i];
      i++;
    }
    return product
  }
}

