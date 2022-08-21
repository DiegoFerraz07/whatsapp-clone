import { CHANGE_THEME } from "../actions/constants";

let deafaultSettings = {
  theme: 'dark',
};
const settings = (state = deafaultSettings, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default settings;
