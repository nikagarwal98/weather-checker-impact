import React from 'react'


class ZipForm extends React.Component {
  handleClick(event) {
    event.preventDefault()
    console.log('this is:', this);
  }


  render(){
    return <div id="zip-form">
      <input placeholder='Enter your Zip Code' />
      <button onClick={(e) => this.handleClick(e)}>Go</button>
    </div>
  }
}

export default ZipForm;
