export default {
  namespace: 'notice',

  state: {
    market: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('notice');
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    }
  },

  reducers: {
    
    save(state, action) {
      
    }
  }
};
