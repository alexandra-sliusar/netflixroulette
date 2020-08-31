<template>
  <div class="nx-switch">
    <span v-if="switchName" class="nx-switch_title">{{ switchName }}</span>
    <div class="nx-switch_btn-group">
      <button
        type="button"
        v-for="(option, index) in options"
        :key="option.id"
        :class="{
          'nx-btn nx-btn_switch': true,
          'nx-btn_active': option.selected,
        }"
        @click="changeSelection(index)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchBar",
  props: {
    switchName: String,
    options: {
      type: Array,
      required: true,
    },
  },

  methods: {
    changeSelection(index) {
      this.options.forEach((option) => (option.selected = false));
      this.options[index].selected = true;
    },
  },
};
</script>

<style>
.nx-switch {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
}

.nx-switch_title {
  font-size: 95%;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-right: 30px;
  vertical-align: middle;
  opacity: 0.85;
}

.nx-switch_btn-group {
  min-width: 150px;
  min-height: 40px;
  opacity: 0.9;
}

.nx-btn_switch {
  margin: 0;
  font-size: 90%;
}

.nx-btn_switch:not(.nx-btn_active) {
  background: rgba(66, 66, 66, 0.7);
}

.nx-switch_btn-group > .nx-btn_switch:first-child {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.nx-switch_btn-group > .nx-btn_switch:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
