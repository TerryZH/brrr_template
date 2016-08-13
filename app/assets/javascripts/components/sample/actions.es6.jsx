const toggleFulltime = () => {
  return {
    type: 'TOGGLE_FULLTIME',
    payload: {}
  }
}

const toggleParttime = () => {
  return {
    type: 'TOGGLE_PARTTIME',
    payload: {}
  }
}

const changeKeyword = (keyword) => {
  return {
    type: 'CHANGE_KEYWORD',
    payload: {keyword}
  }
}