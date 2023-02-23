import { createStore } from 'vuex';
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { SEARCH_REPOS, SEARCH_SINGLE_REPO } from "@/graphql/query";
import { apolloClient } from "@/apollo-config";
import { formatDate } from "@/util/date";

provideApolloClient(apolloClient);

const repoOwner = process.env.VUE_APP_REPO_OWNER_NAME;

export default createStore({
	state: () => ({
		repoName: '',
		repos: [],
		repoIssues: [],
		loadingRepos: false,
		loadingRepoIssues: false,
	}),
	mutations: {
		setRepoName(state, name) {
			state.repoName = name;
		},
		setRepos(state, repos) {
			state.repos = repos;
		},
		setRepoIssues(state, issues) {
			state.repoIssues = issues;
		},
		setLoadingRepos(state, value) {
			state.loadingRepos = value;
		},
		setLoadingRepoIssues(state, value) {
			state.loadingRepoIssues = value;
		},
	},
	actions: {
		fetchRepos({ commit }) {
			commit('setLoadingRepos', true);

			const { onResult } = useQuery(SEARCH_REPOS, {
				userName: repoOwner,
			});

			onResult((result) => {
				const repos = result.data.user.repositories.nodes;

				commit('setRepos', repos);
				commit('setLoadingRepos', false);
			});
		},
		fetchRepoIssues({ state, commit }) {
			commit('setLoadingRepoIssues', true);

			const { onResult } = useQuery(SEARCH_SINGLE_REPO, {
				userName: repoOwner,
				repoName: state.repoName,
			});

			onResult((result) => {
				const issues = result.data.repository.issues.nodes.map((issue) => ({
					...issue,
					comments: issue.comments.nodes.map((comment) => {
						return {
							...comment,
							createdAt: formatDate(comment.createdAt),
						};
					}),
				}));

				commit('setRepoIssues', issues);
				commit('setLoadingRepoIssues', false);
			});
		},
	},
});