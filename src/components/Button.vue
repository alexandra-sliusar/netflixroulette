<template>
  <button type="button" class="nx-btn nx-btn_search" @onClick="onClick">
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.nx-btn {
  color: #fff;
  background-color: #f65261;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  border: 0px;
  padding: 10px 30px;
  cursor: pointer;
}

.nx-btn_filter {
  margin: 0;
  font-size: 90%;
}

.nx-btn_filter:not(.nx-btn_active) {
  background: rgba(66, 66, 66, 0.7);
}

.nx-btn_search {
  border-radius: 5px;
  font-size: 110%;
}

.nx-filter_btn-group > .nx-btn_filter:first-child {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.nx-filter_btn-group > .nx-btn_filter:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
