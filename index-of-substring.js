//Link to leetcode problem: https://leetcode.com/problems/implement-strstr/


// const strStr = function(haystack, needle) {
//   if (haystack.length === 0 && needle.length !== 0) {
//     console.log(-1)
//     return -1
//   } else if (haystack.length === 0 ) {
//     console.log(0)
//     return 0
//   } 
//     let i = -1
//     let j = 0
//   do {
//     i++
//     console.log(`i is ${i}`, `j is ${j}`)
//     if (j === needle.length) { 
//       console.log( i - j )
//       return i - j}
//     if (haystack[i] === needle[j]){
//       j++
//       } else {
//         j = 0
//       }
//   } while (i < haystack.length)

//   console.log(-1)
//   return -1
// }

const strStr = function(haystack, needle){
  let j = 0
  for (let i = 0; i < haystack.length; i++){
    console.log(`i is ${i}`, `j is ${j}`)
    if ( j === needle.length) {
      console.log(i -1)
      return i -1
    }
    while (haystack[i + j] === needle[j]){
      j++
      }
    }
  }

const string = 'aaabbaabbba'
const subString = 'bbb'

strStr(string, subString)