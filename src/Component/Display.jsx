import { useEffect, useState } from "react";
import './display.css'

export const ApiFetch = ()=>{
    
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
       fetch ("https://jsonplaceholder.typicode.com/users")
       .then((res) => res.json())
       .then((des) => {
        const usersWithImages = des.map((data, index) => ({
          ...data,
          image: `https://i.pravatar.cc/150?img=${index + 1}`, 
        })); setUsers(usersWithImages);
       })
    }, []);
   
// .......................................Search parameters..................................................//
      const filterSearch = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
  
      <div className="main_container">
         <center>
          <h1>Search Users</h1>
                  <input type="text" placeholder="Search user" value={searchTerm}   onChange={(e) => setSearchTerm(e.target.value)} />
                </center><br />
                <div className="api_container">
          {filterSearch.map((datas) => {
            return (
              
              <div className="box">
                <div class="card">
                  <div class="name"><p><b>{datas.name}</b></p></div>
                  <img src={datas.image} alt={datas.alto} />
                  <div class="user_name">
                   <b> @{datas.username}</b>
                   </div>
                    <div class="email">{datas.email}</div>
                </div>
              </div>
              
            );
            
          })}
         </div>
        </div>
    )
}