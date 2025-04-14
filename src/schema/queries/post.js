import { GraphQLNonNull, GraphQLString } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Post } from "../types/post";

export default {
  post: {
    type: Post,
    description: "Gets the details of a specific post",
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve: (parent, { id }) => {
      return fakeDatabase.getBlogPost(id);
    },
  }
};