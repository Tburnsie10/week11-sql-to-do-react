import { useState, useEffect } from "react";
function List() {
    let [list, setList] = useState([]);
    

    function getList(func) {
        let data 
        fetch('/todo')
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            return json;
        })
        .then(func)
    }    

    useEffect(() => {
      getList(setList);
    }, []);


return (
<><h1>List</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
              <th>duration</th>
              <th>date_added</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {list.map(item => {
                return  (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.duration}</td>
                    <td>{item.date_added}</td>
                    <td>{item.type}</td>
                  </tr> )}
                  )}
          </tbody>
        </table></>)

}

export default List;