import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, from } from "apollo-link";

const token = process.env.VUE_APP_GITHUB_GRAPHQL_ACCESS_TOKEN;

const link = from([
	new ApolloLink((operation, forward) => {
		operation.setContext(({ headers }) => ({
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : null,
			},
		}));
		return forward(operation); // Go to the next link in the chain. Similar to `next` in Express.js middleware.
	}),
	new HttpLink({ uri: "https://api.github.com/graphql" }),
]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({ link, cache });

export {
	apolloClient,
};