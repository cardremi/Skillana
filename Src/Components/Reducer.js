const initialState = {
  ListData: [],
  DataLogin: [],
  isLogin: false,
  isLoading: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST_DATA':
      return {
        ...state,
        ListData: action.payload,
      };
    case 'SET_DATA_LOGIN':
      return {
        ...state,
        DataLogin: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        ListData: [],
        DataLogin: [],
        isLogin: false,
      };

    default:
      return state;
  }
};
