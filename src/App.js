import logo from './logo.svg';
import './App.css';
import users from './data/data.js';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import UsersTable from './components/UsersTable/UsersTable';
import FilterTable from './components/FilterTable/FilterTable';

function App() {
  useEffect(()=>{
    users.map((member)=>{
      if(member.position === 'Senior')
        dispatch({
          type: 'ADD_SENIOR',
          payload: {
            member:member
          }
        });

        if(member.position === 'Junior')
        dispatch({
          type: 'ADD_JUNIOR',
          payload: {
            member:member
          }
        });

        if(member.position === 'Intern')
        dispatch({
          type: 'ADD_INTERN',
          payload: {
            member:member
          }
        });
    });
  });
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <UsersTable />
      <FilterTable />
    </div>
  );
}

export default App;
