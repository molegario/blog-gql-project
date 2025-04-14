import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const Comment = new GraphQLObjectType({
  name: "Comment",
  description: "Comment of a blog post",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    postId: {
      type: GraphQLString,
    },
    datePublished: {
      type: GraphQLString,
    },
  })
});

export const CommentInputType = new GraphQLInputObjectType({
  name: "CommentInput",
  description: "Input type for creating or updating a blog post comment",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    postId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  })
});