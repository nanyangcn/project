import React from 'react';
import './App.css';

// import Picture from './components/Picture';
import CreateListForm from './components/CreateListForm';
import Lists from './components/Lists';

const App: React.FC = () => {
  return (
    <div>
      <h1>TO-DO-LIST</h1>
      {/* <Picture/> */}
      <div>
        <img src='./picture' alt='Picture' width='600'/>
      </div>
      <CreateListForm />
      <Lists/>
    </div>
  );
}

export default App;
