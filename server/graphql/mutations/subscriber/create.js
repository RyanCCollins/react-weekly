import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import subscriberInputType from '../../types/subscriber-input';
import SubscriberModel from '../../../models/subscriber';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(subscriberInputType),
    },
  },
  async resolve(root, params, __) { // eslint-disable-line
    const model = new SubscriberModel(params.data);
    const newSubscriber = await model.save();
    if (!newSubscriber) {
      throw new Error('Error adding subscriber');
    }
    return true;
  },
};
