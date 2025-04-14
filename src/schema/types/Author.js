import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Post } from "./post";
import { fakeDatabase } from "../../FakeDatabase";

export const Author = new GraphQLObjectType({
  name: "Author",
  description: "Author of a blog post",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: (author) => {
        return fakeDatabase.getPostsForAuthor(author.id)
      }
    },
  })
});