import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import products from './products';
import process from './process'
import transaction from './transaction'


export const reducers = combineReducers({ posts, auth, products, process, transaction });
