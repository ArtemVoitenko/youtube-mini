const initialState = {
  test: ""
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: "test"
      };
    default:
      return state;
  }
};
