import { Component } from "react";


 class SpecialsInfo extends Component{
    constructor (props) {
        super(props);
        this.state = {
            
            
        };
    }

   render() {
       if(this.props.specials){
       return
            <div className="row">

            </div>
       } else {
          return <div />
       }
   } 
} 

export default SpecialsInfo; 