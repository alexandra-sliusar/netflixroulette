<template>
  <div class="nx-search">
    <div class="nx-search_header">
      Find your movie
    </div>
    <div class="nx-search_actions">
      <input
        type="text"
        class="nx-search_input"
        placeholder="Search"
        v-model="query"
        @keyup.enter="searchMovies"
      />
      <my-button msg="Search" @onClick="searchMovies" />
    </div>
    <switch-bar
      switchName="Search by"
      :options="options"
      @changeSelection="changeSearchFieldOption"
    />
  </div>
</template>

<script>
import MyButton from "./Button.vue";
import SwitchBar from "./SwitchBar.vue";

export default {
  name: "SearchBar",
  components: { MyButton, SwitchBar },

  data: function() {
    return {
      options: [
        { id: "title", text: "Title", selected: true },
        { id: "genre", text: "Genre", selected: false },
      ],
    };
  },
  computed: {
    query: {
      set(query) {
        this.$store.commit("CHANGE_SEARCH_QUERY", query);
      },
      get() {
        return this.$store.state.searchQuery;
      },
    },
  },

  methods: {
    searchMovies() {
      this.$store.commit("SEARCH_MOVIES");
    },

    changeSearchFieldOption(searchFieldOption) {
      this.$store.commit("CHANGE_SEARCH_FIELD_OPTION", searchFieldOption);
    },
  },
};
</script>

<style>
.nx-search {
  display: flex;
  flex-flow: column wrap;
  margin: 30px 50px 0;
}

.nx-search_header {
  font-size: 250%;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin: 0 0 25px;
}

.nx-search_actions {
  margin: 10px 0;
  display: flex;
  flex-flow: row wrap;
  max-height: 60px;
}

.nx-search_input {
  width: 70%;
  margin-right: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 110%;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  background: rgba(35, 35, 35, 0.6);
  border: 0;
}

.nx-search_input:focus,
.nx-btn:focus {
  outline: none;
}
</style>
