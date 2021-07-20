import React from 'react'


const TextSection =() => {
    return(
        <div className="jumbotron"  >
            <h1 className="display-4" style={{textAlign: "center",color:"black",fontWeight:"bold"}} >React.js</h1>
            <p className="lead" style={{textAlign: "center",color:"",fontWeight:"light"}} >
             React is a declarative, efficient, and flexible JavaScript library for building
             user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.Build encapsulated components that 
             manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app 
             and keep state out of the DOM.
            </p> 
            <hr className="my-4" />   
            <a className="btn btn-success btn-lg" href="#" role="button" >
            Start Learning.
            </a>
            
         
        </div>
    )
}
 export default TextSection 