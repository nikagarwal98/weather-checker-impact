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

  fetchData(zipcode){
    const url = "http://api.wunderground.com/api/9412603c2dcefb48/conditions/q/"+zipcode +".json"
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.current_observation.display_location))
  }

  updateZipCode(zipcode){
    this.setState({
      zipcode : zipcode
    })
    this.fetchData(zipcode)
    console.log("abs")
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
