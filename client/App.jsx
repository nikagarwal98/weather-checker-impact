import React from 'react';
import ZipForm from './ZipForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode : null
    }
    this.updateZipCode = this.updateZipCode.bind(this);
  }

  updateZipCode(zipcode){
    this.setState({
      zipcode : zipcode
    })
  }

  render() {
    return (
      <div className="container">
        <h1>What's the weather?</h1>
        <ZipForm function={this.updateZipCode}/>
      </div>
      )
    }

}

export default App;
