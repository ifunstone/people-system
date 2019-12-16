import { typeList, pageList } from "@/services/separate";

export default {
  namespace: "separate",

  state: {
    PAGE_SIZE_LIST: [
      10,
      20,
      30, 
      40
    ],
    separateTypeList: [
      // {
      //   key: -1,
      //   value: "全部"
      // },
      // {
      //   key: 0,
      //   value: "人在户不在"
      // },
      // {
      //   key: 1,
      //   value: "户在人不在"
      // },
      // {
      //   key: 999,
      //   value: "误报"
      // }
    ],
    separatePageList: {
      data: {
        content: []
      }
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *typeList({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(typeList);
      yield put({
        type: "separateTypeList",
        payload: response
      });
    },
    *pageList({ payload }, { call, put }) {
      // eslint-disable-line
      const response = yield call(pageList);
      yield put({
        type: "separatePageList",
        payload: response
      });
    },
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    }
  },

  reducers: {
    separateTypeList(state, action) {
      console.log(state, action);
      return { ...state, separateTypeList: action.payload.data.data || [] };
    },
    separatePageList(state, action) {
      console.log(state, action);
      return {
        ...state,
        separatePageList: action.payload.data || {
          data: {
            content: []
          }
        }
      };
    },
    save(state, action) {
      console.log(state, action);
      return { ...state, ...action.payload };
    }
  }
};
