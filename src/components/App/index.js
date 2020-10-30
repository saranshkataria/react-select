import React from 'react';
import Select from '../Select';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Select
          options={[
            {
              id: 1,
              title: 'Really Long Example Input',
            },
            { id: 2, title: 'Input 1' },
            { id: 3, title: 'Input 2' },
            { id: 4, title: 'Input 3' },
            { id: 5, title: 'Input 4' },
            { id: 6, title: 'Input 5' },
          ]}
          onChange={(selected) => {
            console.log('Object example, selected value: ' + selected.title);
          }}
          placeholder="Object example"
        />
        <Select
          options={['Saransh', 'Kataria']}
          onChange={(selected) => {
            console.log('String example, selected value: ' + selected);
          }}
          placeholder="String example"
          theme={{ listItemClassnames: 'red-bg' }}
        />
      </header>
    </div>
  );
}

export default App;
