const isFulltime = (state=true, action) =>{
  switch (action.type) {
  case 'TOGGLE_FULLTIME':
    return !state
  default:
    return state
  }
}

const isParttime = (state=true, action) =>{
  switch (action.type) {
  case 'TOGGLE_PARTTIME':
    return !state
  default:
    return state
  }
}

const keyword = (state='', action) =>{
  switch (action.type) {
  case 'CHANGE_KEYWORD':
    return action.payload.keyword
  default:
    return state
  }
}

const reducer = Redux.combineReducers({
  isFulltime,
  isParttime,
  keyword
})
