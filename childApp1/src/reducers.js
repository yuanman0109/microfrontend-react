const initstate = {
  text: 'from child'
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