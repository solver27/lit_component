import * as React from 'react'
import VueWrapper from './VueWrapper'
import './style.css';

export const LITContext = React.createContext({});

export default function Main() {

  const [data, setData] = React.useState({
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
        {/* <LIT callback={updateField} /> */}
        <VueWrapper componentProps={{ data: data, callback: updateField }}/>
      </LITContext.Provider>
    </div>
  );
}
