export default {
  namespace: 'c2c',

  state: {
    market: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('offline');
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
