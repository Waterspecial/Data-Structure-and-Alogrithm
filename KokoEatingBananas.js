var minEatingSpeed = function(piles, h) {
 let start = 1;
 let end = Math.max(...piles);


 while(start <= end) {
     let mid = Math.floor(start + (end - start)/2)

     let hrs = 0
     for(let pile of piles) {
         hrs += Math.ceil(pile/mid)
     }
     if(hrs > h) {
         start = mid + 1;
     } else {
         end = mid - 1;
     }
 }
 return start

};
