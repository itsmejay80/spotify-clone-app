export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove this after developing
  token:
    "BQA5I84SohHLwimfyUYRIU6xL2o5tspISvbPasqVAXLFqd5pyWHTk-w9huDP1vJDaNTDNGkk_H6vv5bKYrIyQ7ieDnE5PMMdSW57WcAkGJ2cfdjZS-5kfaHK1o7I_5hjcD3rhVBgj2N1dALsxqpND73HZxkUgkEog5ya3gKLnMRv8eRBsgiF",
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
