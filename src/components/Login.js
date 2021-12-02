import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Form = () => {
  const [ username, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  // const isInvalid = password === '' || username === '';
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User: ${username} Password: ${password}`);
    navigate("/app");
  }
  return (
   <div className="wrapper">
     <form className="loginForm" method="POST" onSubmit={handleSubmit}>
      <input type="text" placeholder="username" value={username} onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" className="btnPrimary" >Login</button>
     </form>
   </div>
  )
}

export default Form;
