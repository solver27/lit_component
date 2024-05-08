<template>
  <div>
    Hello from Vue! Data: {{ message }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    message: String
  },
  setup(props) {
    const message = ref(props.message);
    return { message };
  }
}
</script>
