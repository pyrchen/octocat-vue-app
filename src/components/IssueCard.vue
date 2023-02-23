<template>
  <v-card
    class="justify-start issue-item text-start"
    width="100%"
  >
    <v-card-title>
      {{ issue.title }}
    </v-card-title>

    <v-card-text>
      {{ issue.bodyText }}
      ({{ issue.state }})
    </v-card-text>

    <v-expand-transition>
      <div v-if="isExpanded">
        <v-divider :thickness="5" color="success" class="ma-4"></v-divider>
        <div v-if="issue.comments.length">
          <v-list class="bg-transparent" lines="three">
            <template
              v-for="(comment, index) in issue.comments"
              :key="comment.id"
            >
              <v-list-item
                :subtitle="comment.body"
                :title="comment.createdAt"
              >
              </v-list-item>
              <v-divider
                v-if="index < issue.comments.length - 1"
                :thickness="2"
                class="justify-start ma-2"
              ></v-divider>
            </template>
          </v-list>
        </div>
        <div v-else class="v-card-text">No comments for this issue</div>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions class="justify-end">
      <v-btn @click="isExpanded = !isExpanded">
        {{ !isExpanded ? 'Show comments' : 'Hide comments' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { defineComponent } from "vue";
import { formatDate } from "../util/date";

export default defineComponent({
  name: 'IssueCard',
  methods: {
    formatDate() {
      return formatDate
    }
  },
  props: {
    issue: {
      id: String,
      title: String,
      bodyText: String,
      state: String,
      comments: Array,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
});
</script>

<style scoped>
  .issue-item {
    margin-bottom: 15px;
  }
</style>