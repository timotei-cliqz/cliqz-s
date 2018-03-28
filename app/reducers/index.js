import { combineReducers } from 'redux';
import mode from './mode';
import query from './query';
import url from './url';
import webView from './webView';
import pageTitle from './pageTitle';
import currentUrl from './currentUrl';
import domains from './domains';

export default combineReducers({
  mode,
  query,
  url,
  webView,
  pageTitle,
  currentUrl,
  domains,
});

