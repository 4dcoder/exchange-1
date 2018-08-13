const language = localStorage.getItem('language') || 'zh_CN';
export default {
  namespace: 'global',

  state: {
    language,
    localization: require(`languages/${language}`).default
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('global');
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    }
  },

  reducers: {
    // 切换语言
    switchLanguage(state, action) {
      const { language } = action.payload;
      const localization = require(`languages/${language}`).default;
      localStorage.setItem('language', language);
      return { ...state, language, localization };
    }
  }
};
