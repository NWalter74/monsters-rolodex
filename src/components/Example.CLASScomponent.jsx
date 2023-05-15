import { Component } from "react";
import './YOURSTYLE.css';

class COMPONENTNAME extends Component{
    render(){
        const {VARIABLES, WHICH, COME, FROM, THE, PAGE, WHERE, YOU, HAVE, THIS, COMPONENT} = this.props;

        return(
            <div>
                {/* Down here you have your html code you want to show for this component */}
                <input 
                    //OBS: THIS => ` NOT THIS => ' !!!!
                    className={`search-box ${VARIABLES}`}
                    type='search' 
                    placeholder={WHERE} 
                    //anonymous function = a function which is not stored in a variable
                    //every single time render runs this function is getting reinitialised (because once it been done with it, it throws it away)
                    //there is no one in memory who tracks this function
                    //the event changes but the event is only passed into the function
                    onChange={WHICH}/>
            </div>
        );
    }
}

export default COMPONENTNAME;