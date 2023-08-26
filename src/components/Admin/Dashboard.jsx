import './admin.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import { HOST } from '../../utils';

function Dashboard() {
    const [deliveries, setDeliveries] = useState()
    useEffect(()=>{
        axios.get(`${HOST}/deliveries/getAll`)
    .then(({ data }) => {
      setDeliveries(data)
    })
    .catch((err) => console.log(err.response.data + "basa"));
    
    },[])
  return (
    <div className='dashboard-container'>
        <br />
        <div className="title-dash">
            <h1>כל המשלוחים</h1>
        </div>
        <div className="table-dash">
        <table>
      <thead>
        <tr>
          <th>שם מלא</th>
          <th>מיקום החבילה</th>
          <th>כתובת למשלוח</th>
          <th>מספר החבילה</th>
          <th>טלפון נייד</th>
          <th>כפתורי שליטה</th>
        </tr>
      </thead>
      <tbody>
        {deliveries?.map((item, index) => (
          <tr key={index}>
            <td className='td-dash'>{item.fullName}</td>
            <td className='td-dash'>{item.packageLocation}</td>
            <td className='td-dash'>{item.address}</td>
            <td className='td-dash'>{item.packageNumber}</td>
            <td className='td-dash'>{item.phoneNumber}</td>
            <td className='td-dash'>
                <button>מחק</button>
                <button>נשלח</button>
                <button>שולם</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    </div>
  )
}

export default Dashboard