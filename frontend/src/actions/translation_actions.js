import * as TranslationsUtil from "../util/translations_util.js";

export const RECEIVE_TRANSLATIONS = "RECEIVE_TRANSLATIONS";
export const RECEIVE_TRANSLATION = "RECEIVE_TRANSLATION";

export const receiveTranslations = (translations) => ({
  type: RECEIVE_TRANSLATIONS,
  translations
});

export const receiveTranslation = (translation) => ({
  type: RECEIVE_TRANSLATION,
  translation
});

export const requestTranslations = (doc_id) => (dispatch) => {
  return TranslationsUtil.getTranslations(doc_id)
    .then((translations) => dispatch(receiveTranslations(translations.data)))
};
export const requestTranslation = (doc_id, trans_id) => (dispatch) => {
  return TranslationsUtil.getTranslation(doc_id, trans_id)
    .then((translation) => dispatch(receiveTranslation(translation.data)))
};

export const createTranslation = (doc_id, translation) => (dispatch) => {
  return TranslationsUtil.createTranslation(doc_id, translation)
    .then((translation) => dispatch(receiveTranslation(translation.data)))
};
