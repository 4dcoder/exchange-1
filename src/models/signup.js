export default {
  namespace: 'signup',

  state: {
    market: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('signup');
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    }
  },

  reducers: {
    save(state, action) {}
  }
};
