<template>
  <div class="nx-results-line">
    <span class="nx-results-title">
      {{ resultsString }}
    </span>
    <switch-bar switchName="Sort by" :options="options" />
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
        { id: "releaseDate", text: "Release Date", selected: true },
        { id: "rating", text: "Rating", selected: false },
      ],
    };
  },

  computed: {
    resultsString() {
      var length = this.moviesLength;
      if (length === 0) return "";
      return `${length} movie${length > 1 ? "s" : ""} found`;
    },
    sorting() {
      var selected = this.options.filter((option) => option.selected);
      if (selected.length > 0) return selected[0].id;
      return "releaseDate";
    },
  },

  watch: {
    sorting: function(newSortingOption) {
      this.$emit("sortingChanged", newSortingOption);
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
