<template>
  <button type="button" class="nx-btn nx-btn_search" @click="onClick">
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
  padding: 8px 25px;
  cursor: pointer;
}

.nx-btn_search {
  border-radius: 5px;
  font-size: 130%;
  width: 20%;
}
</style>
