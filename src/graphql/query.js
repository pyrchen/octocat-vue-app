import gql from "graphql-tag";

export const SEARCH_REPOS = gql`
    query ($userName: String!) {
        user(login: $userName) {
            repositories(first: 10, privacy: PUBLIC, ownerAffiliations: OWNER) {
                nodes {
                    name, id
                }
            }
        }
    }
`;

export const SEARCH_SINGLE_REPO = gql`
    query ($userName: String!, $repoName: String!) {
        repository(owner: $userName, name: $repoName) {
            issues(last: 30) {
                nodes {
                    title,
                    bodyText,
                    state,
                    comments(first:20) {
                        nodes {
                            body,
                            createdAt
                        }
                    }
                }
            }
        }
    }
`;