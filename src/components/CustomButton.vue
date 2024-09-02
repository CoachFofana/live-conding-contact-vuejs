<script setup>
defineProps({
  customClass: String,
  title: String,
  icon: {
    require: false,
    default: null,
    type: String,
  },
  isLink: {
    require: true,
    default: false,
    type: Boolean,
  },
  route: {
    require: false,
    default: null,
    type: String,
  },
});
</script>

<template>
  <span>
    <router-link :to="route" :class="customClass" v-if="isLink && route">
      <i :class="icon" v-if="icon"></i>
      {{ title }}
    </router-link>

    <button :class="customClass" v-else>
      <i :class="icon" v-if="icon"></i>
      {{ title }}
    </button>


  </span>
</template>

<style scoped></style>
