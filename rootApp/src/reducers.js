const initstate = {
  text: 'from father'
}
 const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return Object.assign({}, state, {
        text : action.text
    });
    default:
      return state
  }
}
export default reducer;