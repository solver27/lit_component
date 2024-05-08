import { useContext, createContext, useState } from 'react';
import LIT from './components/LIT/LIT';
import LitVue from './components/LitVue';
import './App.css';

export const LITContext = createContext({});

const App = () => {
  const [data, setData] = useState({
    selectedField: null,
    actions: {}
  })

  const updateField = (value) => {
    setData(prev => ({
      selectedField: prev.selectedField,
      actions: {
        ...prev.actions,
        [prev.selectedField]: value
      }  
    }));
  };

  const selectField = (str) => {
    setData(prev => ({
      selectedField: str,
      actions: {
        ...prev.actions,
        [str]: prev.actions[str] || 0
      }  
    }));
  }

  return (
    <div className='app'>
      <LITContext.Provider value={data}>
        <div className='parent'>
          <label>user: john</label>
          <label>count: {data.actions[data.selectedField]}</label>
          <button onClick={() => selectField("john")}>
            pass data to lit component
          </button>
        </div>
        <LIT callback={updateField} />
        <LitVue callback={updateField} />
      </LITContext.Provider>
    </div>
  );
}

export default App;
