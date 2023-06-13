import { useState, useEffect } from "react";

function List({getter, deleteMe, completeMe}) {
    


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
              <th>complete</th>
            </tr>
          </thead>
          <tbody>
            {getter.map(item => {
                return  (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.duration}</td>
                    <td>{item.date_added}</td>
                    <td>{item.type}</td>
                    <td>{item.complete}</td>
                    {item.complete == 'False' &&
                    <td><button onClick={completeMe} id={item.name} data={item}>complete</button></td>
                    }
                    <td onClick={deleteMe} ><button id={item.name}>delete</button></td>
                  </tr> )}
                  )}
          </tbody>
        </table></>)

}

export default List;