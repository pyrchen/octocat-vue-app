<template>
  <div class="drop-box">
    <div v-if="loading">
      <p>Repositories are loading...</p>
    </div>
    <template v-if="repos.length">
      <v-select
        :items="repos"
        label="Select repository"
        hint="Choose a repo what issues you want to get"
        item-title="name"
        item-value="id"
        variant="solo"
        @update:modelValue="handleRepoSelect"
        inputmode
        persistent-hint
        return-object
        single-line
      ></v-select>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: 'RepositoryListDropBox',
  computed: {
    ...mapState({
      repos: (state) => state.repos,
      loading: (state) => state.loadingRepos,
    }),
  },
  methods: {
    ...mapMutations({
      changeRepoName: 'setRepoName',
      setFilterString: 'setRepoNameFilter',
    }),
    ...mapActions({
      fetchRepos: 'fetchRepos',
      fetchRepoIssues: 'fetchRepoIssues',
    }),
    handleRepoSelect({ id: repoId }) {
      const repo = this.repos.find((rep) => rep.id === repoId);
      if (repo) {
        this.changeRepoName(repo.name);
        this.fetchRepoIssues();
      }
    },
  },
  mounted() {
    this.fetchRepos();
  },
});
</script>

<style scoped>
  .drop-box {
    margin-bottom: 20px;
  }
</style>