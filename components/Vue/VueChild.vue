<template>
  <div class='lit'>
    <label>
      user: {{ data.selectedField }}
    </label>
    <label>
      action: +1
    </label>
    <button @click="handleClick">
      pass data to parent
    </button>
  </div>
</template>

<script>

export default {
  name: "VueChild",
  props: {
    data: Object,
    callback: Function
  },
  methods: {
    handleClick() {
      this.callback(this.data.actions[this.data.selectedField] + 1)
    }
  }
};
</script>

<style scoped>
.lit {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  padding: 20px;
}
</style>
