import {useEffect, useState} from 'react'; 
import List  from '../List/List.jsx';
import Form from "../Form/Form.jsx";

function App () {
  


 
    let [list, setList] = useState([]);

   
    

    function getList(func) {
        let data 
        fetch('/todo')
        .then(response => {
            return response.json()
        })
        .then(json => {
            return json;
        })
        .then(func)

    }    


    function deleteMe(event) {
      let name = event.target.id

      fetch( `/todo/${name}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})

    }


    function completeMe(event) {
      let name = event.target.id;
      fetch(`/todo/:${name}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }}) 
      
    }


    useEffect(() => {
      getList(setList);
    }, [list]);


    


  return (
    <>
    <div>
      <h1>TO DO APP</h1>
    </div>
    <div id="Form">
      <Form getList={getList} setList={setList} ></Form>
    </div>
    <div id='List'>
    <List  getter={list} deleteMe={deleteMe} completeMe={completeMe} ></List>
    </div>
    </>
  );

}






export default App
