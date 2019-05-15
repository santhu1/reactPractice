import React, {Component} from 'react';
import ToggleShow from "./toogleShow";

class Users extends Component {
constructor(props) {
    super(props);
    this.state={
         isShow: true
    }
}
toggleShow=()=>{
    this.setState(state => ({isShow : !state.isShow}));
}


    render() {
        const greeting = 'Good Morning';
        const toogleOn= "toogle On";
        const toogleOff= "toogle off";
        return (
            <div>
                {this.state.isShow ? <ToggleShow greeting={greeting} /> : null}
                <Button onClick= { this.toggleShow} />
                <p> Users name {this.props.info} </p>
             </div>
        )
    }
}

const Button= ({onClick}) =>(
<button onClick= {onClick} type="button">
toogle On

 </button>)
   // Stateless component



export default Users