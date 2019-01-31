import axios from "axios"

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START"
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS"
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE"

export const ADD_FRIEND_START = "ADD_FRIEND_START"
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS"
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE"

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  return axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }))
}

export const addNewFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ ADD_FRIEND_FAILURE, payload: err }));
}