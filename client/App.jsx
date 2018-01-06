import React from 'react';
import ZipForm from './ZipForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
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
      <ZipForm fn=updateZipCode/>
    </div>
    )
  }

}

export default App;

