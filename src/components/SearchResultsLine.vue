<template>
  <div class="nx-results-line">
    <span class="nx-results-title">
      {{ resultsString }}
    </span>
    <switch-bar
      switchName="Sort by"
      :options="options"
      @changeSelection="changeSorting"
    />
  </div>
</template>

<script>
import SwitchBar from "./SwitchBar.vue";

export default {
  name: "SearchResultsLine",
  components: { SwitchBar },
  props: {
    moviesLength: Number,
  },

  data: function() {
    return {
      options: [
        { id: "release_date", text: "Release Date", selected: true },
        { id: "vote_average", text: "Rating", selected: false },
      ],
    };
  },

  computed: {
    resultsString() {
      var length = this.moviesLength;
      if (length === 0) return "";
      return `${length} movie${length > 1 ? "s" : ""} found`;
    },
  },

  methods: {
    changeSorting(sortOption) {
      this.$store.commit("CHANGE_SORT_OPTION", sortOption);
    },
  },
};
</script>

<style>
.nx-results-line {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #555555;
  padding: 0 50px;
  min-height: 60px;
  line-height: 60px;
}

.nx-results-title {
  font-size: 95%;
  font-weight: 800;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  vertical-align: middle;
}
</style>
