import { applyMiddleware, createStore } from 'redux';

import { save } from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

export default createStoreWithMiddleware;
