<template>
  <AppHeading :appTitle="appTitle" />
  <RepositoryListDropBox />
  <IssuesList />
</template>

<script>
import { defineComponent } from 'vue';
import {
  RepositoryListDropBox,
  IssuesList,
  AppHeading,
} from './components';
import { provideApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./apollo-config.js";

provideApolloClient(apolloClient);

export default defineComponent({
  name: 'App',
  components: {
    AppHeading,
    IssuesList,
    RepositoryListDropBox,
  },
  data() {
    return {
      appTitle: process.env.VUE_APP_REPO_OWNER_NAME + "'s repositories",
    };
  },
});
</script>

<style scoped>
</style>
