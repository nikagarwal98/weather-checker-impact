import React from 'react';
import ZipForm from './ZipForm.jsx'

const App = function() {
  return (
    <div className="container">
      <h1>What's the weather?</h1>
      <ZipForm />
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = false;
    this.updateZipCode = this.updateZipCode.bind(this);
  }

  updateZipCode(zipcode){
    this.setZipCode({
      
    })
  }
}

export default App;
