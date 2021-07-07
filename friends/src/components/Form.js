import React from "react";

function Form(props) {
  return(
    <div className="form-container">
      <h2>Add a Friend!</h2>
      <form autocomplete="off">

        <input 
          type="text"
          name="name"
          onChange={props.changeHandler}
          placeholder="name"
          value={props.friend.name}
          autocomplete="off"
        />

        <input 
          type="text"
          name="age"
          onChange={props.changeHandler}
          placeholder="Age"
          value={props.friend.age}
          autocomplete="off"
        />

        <input 
          type="text"
          name="email"
          onChange={props.changeHandler}
          placeholder="Email"
          value={props.friend.email}
          autocomplete="off"
        />

        <button onClick={props.addNewFriend}>Add Friend</button>


      </form>
    </div>
  )
}

export default Form