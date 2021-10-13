import logo from './logo.svg';
import './App.css';
import React,{useState}  from 'react';
import Form from './components/Form.js'

function App() {
  const [form,setForm] = useState({
     firstName: "",
     lastName: "",
     phoneNumber: "",
     address: "",
     note: ""

  })

  function handleFormData(e){
      setForm({...form, [e.target.name]: e.target.value})
  }
  console.log(form)
  return (
    <div className="App">
      <header className="App-header">
      
         <Form form={form} handleFormData = {handleFormData}/>
  
      </header>
    </div>
  );
}

export default App;
