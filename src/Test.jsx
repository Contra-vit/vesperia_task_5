import React from 'react'
    
let sum = 0;
let array = [0, 1, 2, 3, 4, 5, 3];
function Preview(props) {

  function calc(array, n1, n2) {

    // console.log(array, n1,n2);
    for (let i = 0; i < array.length; i++) {
      if (i>= n1 && i <= n2) {
        // console.log(sum += array[i]);
         sum = sum += array[i]
      }
    }
      return sum;

  }

  calc(array, 0, 6)
  return (
    <div>
task17    
</div>
  )
}


export default Preview;




