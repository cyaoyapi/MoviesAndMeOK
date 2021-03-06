const initialeState = {
  avatar: require('../../Images/ic_tag_faces.png')
}

export default function setAvatar(state = initialeState, action) {
  let nextState
  switch (action.type) {
    case "SET_AVATAR":
      nextState = {
          ...state,
          avatar: action.value
      }
      return nextState || state
    default:
      return state
  }
}
