import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import {data} from './data';
import React, {useState} from 'react';


function App() {

  const [countries, setCountries] = useState(data);

  const {Option} = Select;

  function handleChange(value){
    console.log(`selected ${value}`); //show the selected items in the console
  }

  return <>
    <div className="App">
      <Select mode="multiple"
      style={{ width: '100%'}}
      placeholder="select one country"
      onChange={handleChange}
      optionLabelProp="label">
      {
        countries.map((country) => {
          const {id, name} = country;
          return (
            <Option value={name} label={name}>
              <div className="demo-option-label-item">
                <span role="img" aria-label={name}>{name}</span>
              </div>
            </Option>
          );
        })        
      }
      </Select>
      
    </div>
  </>
}

export default App;
