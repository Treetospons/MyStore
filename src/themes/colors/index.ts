import merge from 'lodash/merge';
import {Dark} from './Dark';
import {Light} from './Light';

export const colors = merge({Dark}, {Light});
