export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export default function setCurrentUser(currentUser) {
  return (dispatch, getState) => ({
    type: SET_CURRENT_USER,
    payload: currentUser
  })
}