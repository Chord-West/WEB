import React from 'react';
import Hello from "./hello";
import Wrapper from "./wrapper";


const App = () => {
    return(
        <Wrapper>
            <Hello name="CHWT" color="aqua" isSpecial={true}/>
            <Hello color="pink"/>
        </Wrapper>
    );
}

export default App;
