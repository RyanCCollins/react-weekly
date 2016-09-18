import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'SubscriberInput',
  fields: () => ({
    _id: { type: GraphQLID },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    subscribed: { type: GraphQLBoolean },
  }),
});
