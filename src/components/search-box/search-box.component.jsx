//Functional-component
import './search-box.styles.css';

const SearchBox = ({onChangeHandler, placeholder, className}) => (
    <div>
        <input 
            //OBS: THIS => ` NOT THIS => ' !!!!
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder} 
            //anonymous function = a function which is not stored in a variable
            //every single time render runs this function is getting reinitialised (because once it been done with it, it throws it away)
            //there is no one in memory who tracks this function
            //the event changes but the event is only passed into the function
            onChange={onChangeHandler}/>
    </div>
);

export default SearchBox;





//Class-component
// import { Component } from "react";
// import './search-box.styles.css';

// class SearchBox extends Component{
//     render(){
//         const {onChangeHandler, placeholder, className} = this.props;

//         return(
//             <div>
//                 <input 
//                     //OBS: THIS => ` NOT THIS => ' !!!!
//                     className={`search-box ${className}`}
//                     type='search' 
//                     placeholder={placeholder} 
//                     //anonymous function = a function which is not stored in a variable
//                     //every single time render runs this function is getting reinitialised (because once it been done with it, it throws it away)
//                     //there is no one in memory who tracks this function
//                     //the event changes but the event is only passed into the function
//                     onChange={onChangeHandler}/>
//             </div>
//         );
//     }
// }

// export default SearchBox;