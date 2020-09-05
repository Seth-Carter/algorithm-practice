//Link to leetcode problem: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = function(candies, extraCandies) {
  const outputArray = []
  let max = Math.max(...candies)
  console.log(max)
  for (let i = 0; i<candies.length; i++){
    if(candies[i] + extraCandies >= max) {
      outputArray[i] = true
    } else {
      outputArray[i] = false
    }
  }
  return outputArray
};
