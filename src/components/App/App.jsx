import {useEffect, useState} from 'react'; 
import List  from '../List/List.jsx';
import Form from "../Form/Form.jsx";

function App () {
  

  return (
    <>
    <div>
      <h1>TO DO APP</h1>
    </div>
    <div id="Form">
      <Form></Form>
    </div>
    <div id='List'>
    <List></List>
    </div>
    </>
  );

}



export default App
