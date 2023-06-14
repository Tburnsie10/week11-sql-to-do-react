import { useState, useEffect } from "react";
function Form({getList, setList, setRender}) {


    let [obj, setObj] = useState({
        "name": '',
        "description": '',
        "duration": '',
        "date_added": '',
        "type": '',
        "complete": false 
    });

    

    function addToList(data) {
        fetch('/todo', {
            method: "POST",
            body: JSON.stringify( data ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            setRender(true) 
    }    

    function setValues(event, setObj) {
        event.preventDefault()
        let div = event.target.parentElement

        let inputs = div.querySelectorAll('input')
        let select = div.querySelector('select')
        for( let input of inputs ) {
            obj[input.id] = input.value
            input.value = ''
        }
        obj[select.id] = select.value
        obj['complete'] = 'False';
        addToList(obj)
        getList(setList)
        
    }

return (
<><h1>Add to List</h1>
    <div>
        <input id="name" placeholder="name" type="text"></input>
        <input id="description" placeholder="description" type="text"></input>
        <input id="duration" placeholder="duration" type="text"></input>
        <input id="date_added" placeholder="date_added" type="text"></input>
        <select id="type" placeholder="type">
             <option value="daily">daily</option>
             <option value="weekly">weekly</option>
        </select>
        <button onClick={(event) => {
            setValues(event, setObj)
        }}>Submit</button>
    </div>
       
        
        


</>)

}

export default Form;