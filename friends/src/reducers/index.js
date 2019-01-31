import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from '../actions/'

const initialState = {
  isFetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  isSavingFriends: false,
  isUpdatingFriend: false,
  friendUpdated: false,
  isDeletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        error: '',
        isFetchingFriends: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: '',
        isFetchingFriends: false,
        friendsFetched: true,
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingFriends: false,
      }
      default:
        return state;
  }
}

export default reducer;