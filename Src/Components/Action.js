export const ActionLogin = (email,password) => {
  return {
    type: 'LOGIN',
    email,
    password
  };
};
export const getItem = payload => {
  return {
    type: 'GETALLITEM',
    payload,
  };
};
export const setListData = payload => {
  return {
    type: 'SET_LIST_DATA',
    payload,
  };
}
export const setDataLogin = payload => {
  return {
    type: 'SET_DATA_LOGIN',
    payload,
  };
}
export const setLoading = payload => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};
export const setLogin = payload => {
  return {
    type: 'SET_LOGIN',
    payload,
  };
};
export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};


