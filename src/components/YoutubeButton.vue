<template>
  <a :href="href" class="btn btn-danger text-white">
    <!-- Use To render dynamic value -->
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "YouTube",
  props: {
    href: String,
  },
};
</script>
