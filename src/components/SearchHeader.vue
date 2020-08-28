<template>
  <div class="nx-search">
    <div class="nx-search_header">
      Find your movie
    </div>
    <div class="nx-search_actions">
      <input type="text" class="nx-search_input" v-bind="query" />
      <my-button msg="Search" />
    </div>
    <filter-bar filterName="Search by" :options="options" />
  </div>
</template>

<script>
import MyButton from "./Button.vue";
import FilterBar from "./FilterBar.vue";

export default {
  name: "SearchHeader",
  components: { MyButton, FilterBar },

  data: function() {
    return {
      query: "",
      options: [{ text: "Title" }, { text: "Genre" }],
    };
  },
};
</script>

<style>
.nx-search {
  display: flex;
  flex-flow: column wrap;
}

.nx-search_header {
  font-size: 200%;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin: 0 0 50px;
}

.nx-search_actions {
  margin: 10px 0;
  display: flex;
  flex-flow: row wrap;
  max-height: 60px;
}

.nx-search_input {
  width: 70%;
  margin-right: 30px;
  padding: 10px;
  border-radius: 5px;
  font-size: 110%;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  background: rgba(66, 66, 66, 0.6);
  border: 0;
}

.nx-search_input:focus,
.nx-btn:focus {
  outline: none;
}
</style>
