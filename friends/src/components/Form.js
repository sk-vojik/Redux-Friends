import React from "react";

function Form(props) {
  return(
    <div>
      <h2>Add a Friend!</h2>
      <form>

        <input 
          type="text"
          name="name"
          onChange={props.changeHandler}
          placeholder="name"
          value={props.friend.name}
        />

        <input 
          type="text"
          name="age"
          onChange={props.changeHandler}
          placeholder="Age"
          value={props.friend.age}
        />

        <input 
          type="text"
          name="email"
          onChange={props.changeHandler}
          placeholder="Email"
          value={props.friend.email}
        />

        <button onClick={props.addNewFriend}>Add Friend</button>


      </form>
    </div>
  )
}

export default Form