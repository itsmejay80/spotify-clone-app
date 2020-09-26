export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove this after developing
  token:
    "BQAHV_CDqJCxBM30cr7aWEGCFOK_4PetJyEObfb-Sa5tOw_z2A9oritay0sUb8nOxFFAHIX-6Xuf6jGlpfO7g6sKnfrg24rBmxujakeNvVc2-BecAY55W24bWXHmMPmsou-TKVXt0WY93x_79wbYSRQ1mVeFFIVo3alzXw2vb6DpitCxjK9C",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
