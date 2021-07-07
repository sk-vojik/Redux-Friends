import React from 'react';
// import { connect } from 'react-redux'

import Form from '../components/Form'
import { connect } from 'react-redux';

import { addNewFriend } from '../actions'

class FormView extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  changeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  }

  addNewFriend = (e) => {
    e.preventDefault();
    this.props.addNewFriend(this.state.friend);
  }


  render() {
    return (
      <div className="form">
        <Form 
          addNewFriend={this.addNewFriend}
          changeHandler={this.changeHandler}
          friend={this.state.friend}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addNewFriend }
)(FormView);