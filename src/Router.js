import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';


import Contact from './contact';


const Router = () =>{
  
return(
<BrowserRouter>
       
        
        
        <Route exact path="/" component={Contact}></Route>

</BrowserRouter>

)

}

export default Router;