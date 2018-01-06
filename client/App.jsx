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
    console.log("hellozip" + this.state.zipcode)

  }

  render() {
    console.log(this.state.zipcode)
    return (
      <div className="container">
        <h1>Whats the weather?</h1>
        <ZipForm fn={this.updateZipCode}/>
      </div>
      )
    }

}

export default App;
