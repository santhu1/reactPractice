import React from 'react';
import ToggleShow from "./toogleShow";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            greeting:'Good Evening, Sorry to we missed you sir',
            contactPerson:'React JS',
            arr:[1,2,3]
        }
        
    }
    
  render() {
    console.log(this);
    return (
        <div>
            <ToggleShow greeting={this.state.greeting} contactPerson={this.state.contactPerson} />
            <h1>Contact</h1>
     </div>
    )
  }
}
export default Contact;