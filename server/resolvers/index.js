import { mergeResolvers, mergeResolvers } from "@graphql-tools/merge";
import transactionResolver from "./transaction.resolver.js";
import userResolver from "./user.resolver.js";

const mergeResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergeResolvers;
