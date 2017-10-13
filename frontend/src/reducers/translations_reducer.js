import { RECEIVE_TRANSLATIONS,
         RECEIVE_TRANSLATION
       } from '../actions/translation_actions';

const TranslationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSLATIONS:
      const new_state = {};
      action.translations.forEach((el) => new_state[el.id] = el);
      return new_state;
    case RECEIVE_TRANSLATION:
      return {[action.a_translation.id]: action.a_translation};
    default:
      return state;
  }
};

export default TranslationsReducer;
