import { UPDATE_LOGO } from '../actions/logoActions'

const logoReducer = (state = '', { type, payload }) => {
  switch (type) {
    case UPDATE_LOGO:
      return payload.logo;
    default:
      return state;
  }
}

export default logoReducer;