
export default {

  namespace: 'separate',

  state: {
    separateTypeList: [
      {
        key: -1,
        value: "全部"
      },
      {
        key: 0,
        value: "人在户不在"
      },
      {
        key: 1,
        value: "户在人不在"
      },
      {
        key: 999,
        value: "误报"
      }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      console.log(state, action);
      return { ...state, ...action.payload };
    },
  },

};
