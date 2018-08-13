export default {
  namespace: 'offline',

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
