<script setup>
import { useRoute } from 'vue-router';
import { useContactStore } from '@store/contactStore';
const store = useContactStore();

const route = useRoute();
const contact = store.getContactById(route.params.id);

</script>

<template>
  <div>
    <h1>Contact edit</h1>
    <div class="contact-add w-50 m-auto">
      <ContactForm edit :contact="contact" />
    </div>
  </div>
</template>

<style scoped>
</style>
