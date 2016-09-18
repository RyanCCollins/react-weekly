import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    slug: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const RecommendationType = new GraphQLObjectType({
  name: 'Recommendation',
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    snippet: { type: GraphQLString },
    recommendations: { type: new GraphQLList(RecommendationType) },
    tags: { type: new GraphQLList(TagType) },
    uniqueSlug: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});
