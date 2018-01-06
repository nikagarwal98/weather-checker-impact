import React from 'react'


class ZipForm extends React.Component {
  handleClick(event, fn) {
    event.preventDefault();
    fn(document.getElementById("input").value);
    console.log('this is:', document.getElementById("input").value);
  }


  render(){
    return <div id="zip-form">
      <input id="input" placeholder='Enter your Zip Code' />
      <button onClick={(e) => this.handleClick(e, this.props.fn)}>Go</button>
    </div>
  }
}

export default ZipForm;
