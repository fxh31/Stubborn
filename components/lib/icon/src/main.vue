<template>
  <i :class="'s-icon-' + name"></i>
</template>

<script>
export default {
  name: 'SIcon',

  props: {
    name: String
  }
};
</script>