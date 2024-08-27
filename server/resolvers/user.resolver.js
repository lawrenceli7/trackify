import { users } from "../data/dummy.js";

const userResolver = {
  Query: {
    users: (_, _, { req, res }) => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => user.id === userId);
    },
  },
  Mutation: {},
};

export default userResolver;
