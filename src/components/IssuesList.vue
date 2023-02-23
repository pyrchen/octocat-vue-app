<template>
  <div v-if="loading">Issues are loading...</div>
  <div v-if="!issues.length && repoName && !loading">No issues</div>
  <template v-if="issues.length">
    <div class="d-flex flex-column">
      <IssueCard
        v-for="issue in issues"
        :key="issue.id"
        :issue="issue"
      />
    </div>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import IssueCard from "./IssueCard.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: 'IssuesList',
  components: {IssueCard},
  computed: {
    ...mapState({
      issues: 'repoIssues',
      loading: 'loadingRepoIssues',
      repoName: 'repoName',
    }),
  },
});
</script>

<style scoped></style>