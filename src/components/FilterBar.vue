<template>
  <div class="nx-filter">
    <span v-if="filterName" class="nx-filter_title">{{ filterName }}</span>
    <div class="nx-filter_btn-group">
      <button
        type="button"
        v-for="(option, index) in options"
        :key="option.text"
        :class="{ 'nx-btn nx-btn_filter': true, 'nx-btn_active': index === 0 }"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  props: {
    filterName: String,
    options: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.nx-filter {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin: 8px 0;
}

.nx-filter_title {
  font-size: 95%;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-right: 30px;
  vertical-align: middle;
  opacity: 0.85;
}

.nx-filter_btn-group {
  min-width: 150px;
  min-height: 40px;
}
</style>
