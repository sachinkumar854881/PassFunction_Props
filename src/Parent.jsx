import React from 'react'
import Child from './Child'
function Parent(){
    function sum(n1,n2){
        return n1+n2;
    }
    return(
        <div>
            Parent Component
             <Child message={sum}/>
             sum called{sum(2,3)}
        </div>
    )
}
export default Parent;