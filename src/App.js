import React,{Fragment} from 'react'
import Parent from './Parent'

const styles={
    color:'red',
    fontSize:'20px'
}
function App(){
    return(
        <Fragment>
            <div style={styles}>
                Internal style
            </div>
            <div style={{color:'blue',fontSize:'20px'}}>
                Inline style
            </div>
            <Parent/>
        </Fragment>
    )
}
export default App;