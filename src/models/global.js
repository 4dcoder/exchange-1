const lang = localStorage.getItem('lang') || 'zh_CN';

export default {
  namespace: 'global',

  state: {
    lang,
    language: require(`languages/${lang}`).default
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      console.log('subscriptions')
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: 'save' });
    }
  },

  reducers: {
    switchLanguage(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
