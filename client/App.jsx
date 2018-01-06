import React from 'react';
import ZipForm from './ZipForm.jsx'

//const App = function() {

//}

class App extends React.Component {
  constructor() {
    super();
    this.state = false;
    this.zipcode = null;
    this.updateZipCode = this.updateZipCode.bind(this);
  }

  updateZipCode(zipcode){
    this.zipcode = zipcode
  }
  render() {
  return (
    <div className="container">
      <h1>What's the weather?</h1>
      <ZipForm updateZipCode/>
    </div>
    )
  }

}

export default App;
