import { GraphQLList } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Post } from "../types/post";

export default {
  posts: {
    type: new GraphQLList(Post),
    description: "Get all blog posts",
    args: {},
    resolve: () => {
      return fakeDatabase.getBlogPosts();
    },
  }
};