import { GraphQLNonNull, GraphQLString } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Author } from "../types/author";

export default {
  author: {
    type: Author,
    description: "Gets the specific author",
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve: (parent, { id }) => {
      return fakeDatabase.getAuthor(id);
    },
  }
};