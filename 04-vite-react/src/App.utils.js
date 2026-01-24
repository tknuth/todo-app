
export const INITIAL_STATE = {
  query: "",
  loading: false,
  description: "",
  suggestions: [],
};

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_INFO": {
      return { ...state, description: action.payload };
    }
    default:
      return state;
  }
}