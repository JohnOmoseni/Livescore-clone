export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true, error: false };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, error: false, data: payload.events };
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: true, data: [] };
  }
};

export default fetchReducer;
