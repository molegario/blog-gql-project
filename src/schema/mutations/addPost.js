import { fakeDatabase } from "../../FakeDatabase";
import { Post, PostInputType } from "../types/post";

export default {
  addPost: {
    type: Post,
    description: "Creates a new blog post",
    args: {
      post: {
        type: PostInputType,
      },
    },
    resolve: (parent, { post }) => {
      return fakeDatabase.addNewBlogPost(post);
    },
  }
};