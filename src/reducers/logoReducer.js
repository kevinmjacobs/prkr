const logoReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'updateLogo':
      return payload;
  }
  return state;
}

export default logoReducer;