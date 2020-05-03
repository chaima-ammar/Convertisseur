import React, { Component } from 'react';
import './input.css'


class Convertir extends Component  {
  
  state = {number: '', hours: 0, minutes: 0, seconds: 0 };

  change = (event) => {this.setState({ number: event.target.value })
      console.log(this.state)
  }


  timer = () => {
    this.setState({
        hours: Math.floor(this.state.number / 3600),
        minutes: Math.floor(this.state.number /60)%60,
        seconds: Math.floor(this.state.number % 60)
    })
}



   render() {
      return (
          <div className='containre'>
              <center>
                  <input type="text" className='input' onChange={this.change} />

                  <button className="button " onClick={this.timer} >Convertir</button>
                  <p className="paragraph"> {this.state.hours + " hours " + this.state.minutes + " minutes " + this.state.seconds + " seconds"} </p>
              </center>

          </div>
      );
  }

}




  export default Convertir;