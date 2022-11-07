import React from 'react'



function Parent({value}){
  return (
  <div>
    {/* <Child value = {value}/> */}

    <Hexed value = {value} component ={ <Child/>}/>
    
    </div>
  )
}

function Hexed ({value, component}){
  // console.log({value});

let hecNumber = value.toString(16)
// console.log('0x' + hecNumber);

  return(
    <div id='haxed'>
   <Child value = {'0x' + hecNumber}/>
  
    </div>
  )
}

function Child ({value}){
  console.log(value);
return (

   <div id='child'  >
    {value}
    </div>
)
 
    
}

export function Preview() {
  return <Parent value={43}/>;
}
export default   Preview;

export  {
  Hexed,
  Child
}



