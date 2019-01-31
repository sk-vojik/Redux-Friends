import React from "react"
import { connect } from "react-redux";

import { getFriends } from '../actions'
import FriendsList from '../components/FriendsList'
import Form from '../components/Form'

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props)
    return (
      <div className="friends-container">
        <h2>Friends!</h2>
        <FriendsList friends={this.props.friends} />
      </div>
    )
  }
  
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error,
  isFetchingFriends: state.isFetchingFriends,
  friendsFetched: state.friendsFetched,
})

export default connect(
  mapStateToProps , 
  { getFriends }
  )(FriendsListView);