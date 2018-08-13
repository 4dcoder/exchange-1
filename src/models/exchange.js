export default {
  namespace: 'exchange',

  state: {
    market: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('exchange');
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
