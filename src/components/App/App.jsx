import {useEffect, useState} from 'react'; 
import List  from '../List/List.jsx';
import Form from "../Form/Form.jsx";



function App () {
  


 
    let [list, setList] = useState([]);
    let [render, setRender] = useState(false);
    console.log(render)


   
    

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
        setRender(true); 
        console.log(render)

    }


    function completeMe(event) {
      let name = event.target.id;
      fetch(`/todo`, {
        method: "PUT",
        body: JSON.stringify({id:name}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
        setRender(true); 
      
    }


    useEffect(() => {
      if (render == true) {
        setRender(false)
      } 
      getList(setList);
    }, [render]);


    


  return (
    <>
    <div>
      <h1>TO DO APP</h1>
    </div>
    <div id="Form">
      <Form getList={getList} setList={setList} setRender={setRender} ></Form>
    </div>
    <div id='List'>
    <List  getter={list} deleteMe={deleteMe} completeMe={completeMe} setRender={setRender} ></List>
    </div>
    </>
  );

}






export default App
