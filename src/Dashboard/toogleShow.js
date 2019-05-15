
import React, { Component } from 'react'

export default class toogleShow extends Component {

  render() {

    return (
      <div>
        <p>{this.props.greeting}</p> 
        <p>{this.props.contactPerson}</p>
      </div>
    )
  }
}
