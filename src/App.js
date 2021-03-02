import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="LoginCard">
      <div className="header">
      <p className="font">Welcome Back</p>
      </div>
      <div
      className="input"
      >
      <TextField
      variant="outlined"
      label="email"
      type="email"
      /> 
      </div>
      
      
      <div
      className="input"
      >
      <TextField
      variant="outlined"
      label="password"
      type="password"
      />
      </div>
      
      <div
      className="button"
      >
      <Button 
      variant="outlined"
      >
      Login
      </Button>
      </div>
    
      <div className="signUp">
      <p>Don't have an account?</p>
      <p className="signUpText" >Sign up</p>
      </div>
      </div>
    </div>
  );
}

export default App;
