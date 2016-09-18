import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Subscriber',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    subscribed: { type: GraphQLBoolean },
  }),
});
