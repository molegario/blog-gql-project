import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Author } from "./author";
import { fakeDatabase } from "../../FakeDatabase";
import { Comment } from "./Comment";

export const Post = new GraphQLObjectType({
  name: "Post",
  description: "All details of a blog post",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    author: {
      type: Author,
      resolve: (post) => {
        return fakeDatabase.getAuthor(post.author)
      }
    },
    datePublished: {
      type: GraphQLString,
    },
    comments: {
      type: new GraphQLList(Comment),
      resolve: (post) => {
        return fakeDatabase.getCommentsForPost(post.id)
      }
    },
  })
});

export const PostInputType = new GraphQLInputObjectType({
  name: "PostInput",
  description: "Input type for creating or updating a blog post",
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
  })
});