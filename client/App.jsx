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
    console.log("abs")
  }

  fetchData(zipcode){
    url = "http://api.wunderground.com/api/9412603c2dcefb48/conditions/q/"+zipcode +".json"
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
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
