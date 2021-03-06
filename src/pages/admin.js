import React, {useState } from 'react'
import {firebaseDB} from '../firebase';
import {useEffect} from 'react';
import { useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {selectLogin} from '../loginStatusSlice';

import "../styles/admin.css";

function createData(id, name, checkin, date, type){
    return { id: id,
             name: name,
             checkin: 'T',
             date: date,
             type: 'Client'}
}
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'checkin', headerName: 'Check In', width: 10 },
        { field: 'date', headerName: 'Date', width: 70},
        { field: 'type', headerName: 'Category', width: 70},
    ];

export default function Admin() {

  let [rows, setRows] = useState([]);

  const loginStatus = useSelector(selectLogin);
  const history = useHistory();
  useEffect(() => {
      if (loginStatus && loginStatus.value === true) {
            if (loginStatus.role != "admin"){
                alert('You must login first');
                history.push('/');
            }
      } else if (loginStatus && loginStatus.value === false) {
        alert('You must login first');
        history.push('/');
      }

    firebaseDB().collection("checkin").get().then((data) => {
        let count = 0;
        var newRows = [];
        data.forEach((doc) => {
            var item = doc.data();
            console.log(item);
            newRows.push(createData(count, item.email, 'T', item.time, 'Client'));
            count++;
        });
        setRows(newRows);
    })},[]);

  return (
      <div class="admin">
          <table>
              {columns.map((item) => (
                  <th>{item.headerName}</th>
              ))}
              <tbody>
              {rows.map((item) =>(
                  <tr>
                      <td>
                          {item.id}
                      </td>
                      <td>
                          {item.name}
                      </td>
                      <td>
                          {item.checkin}
                      </td>
                      <td>
                          {item.date}
                      </td>
                      <td>
                          {item.type}
                      </td>
                  </tr>
              ))}
            </tbody>
          </table>
      </div>
  );
}