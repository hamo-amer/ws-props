import React, { Children } from 'react'
import PropTypes  from "prop-types"
function ChildComp({user,names,HandleAlert,children}) {
   
    return (
        <div>
            <h1>Ws props</h1>
            <h2>{user.name}</h2>
            <span>{user.age}</span>
            <h1>students Names</h1>
            <ul>
                {
                    names.map((el,i)=>
                    <li key={i} >{el}</li>
                    )
                }
            </ul>
            <button onClick={()=>HandleAlert(user.name)} >greet</button>
            <br/>
            {
                user.age>18 ? <h3>is Adult</h3>:<h3>is Young</h3>
            }
            <div>
         {children}
            </div>
            
        </div>
    )
}
ChildComp.defaultProps={
    // user:{name:"default name",age:0},
    names:["mohamed"],
    HandleAlert:()=>alert("default function")
}
ChildComp.propTypes={
user:PropTypes.object.isRequired,
names:PropTypes.arrayOf(PropTypes.string),
HandleAlert:PropTypes.func
}

export default ChildComp
