import {
  GraphQLList,
} from 'graphql';

import subscriberType from '../../types/subscriber';
import SubscriberModel from '../../../models/subscriber';

export default {
  type: new GraphQLList(subscriberType),
  args: {},
  resolve() {
    return SubscriberModel
      .find()
      .exec();
  },
};
