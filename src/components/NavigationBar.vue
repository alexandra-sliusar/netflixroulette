<template>
  <div class="nx-navigation">
    <div class="nx-navigation-logo">
      <a class="nx-navigation-link" href="/">
        <span class="nx-navigation-logo_bold">netflix</span>roulette
      </a>
    </div>
    <div class="nx-navigation-search" v-if="searchIconPresent">
      <a class="nx-navigation-link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="28px"
          height="28px"
          viewBox="0 0 32 32"
          version="1.1"
        >
          <g id="surface1714647">
            <path
              style=" stroke:none;fill-rule:nonzero;fill:rgb(96.470588%,32.156863%,38.039216%);fill-opacity:1;"
              d="M 21 2 C 16.039062 2 12 6.039062 12 11 C 12 13.117188 12.765625 15.046875 14 16.585938 L 4.046875 26.539062 L 5.453125 27.960938 L 15.414062 18 C 16.953125 19.234375 18.882812 20 21 20 C 25.960938 20 30 15.960938 30 11 C 30 6.039062 25.960938 2 21 2 Z M 21 4 C 24.875 4 28 7.125 28 11 C 28 14.875 24.875 18 21 18 C 17.125 18 14 14.875 14 11 C 14 7.125 17.125 4 21 4 Z M 21 4 "
            />
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    searchIconPresent: Boolean,
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.nx-navigation {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 30px;
}
.nx-navigation-logo {
  font-family: "Montserrat", sans-serif;
  font-size: 125%;
}
.nx-navigation-logo_bold {
  font-weight: 900;
}
.nx-navigation-link {
  text-decoration: none;
  color: #f65261;
}
.nx-navigation-search {
  margin-right: 50px;
}
</style>
