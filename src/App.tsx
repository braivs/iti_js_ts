import React from 'react';
import './App.css';

function App() {
  const names = ['Dimich', 'Sveta', 'Katya', 'Viktor', 'Ignat']
  const users = [{id: 1, name: 'Dimich'}, {id: 121, name: 'Sveta'}, {id: 1233, name: 'Katya'}, {id: 154, name: 'Viktor'},
    {id: 25, name: 'Ignat'}]

  const liElements = users.map((u) => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
