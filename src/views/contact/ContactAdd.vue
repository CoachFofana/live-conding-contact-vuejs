<script setup>
import { useContactStore } from "@store/contactStore";
import { useRouter } from "vue-router"
const store = useContactStore();
const router = useRouter()
const form = store.contactForm;

const addContact = () => {
  if (form.name && form.number && form.email) {
    store.add();
    router.push('/contact')
  } else {
    console.log("Please fill all fields in form");
  }
};
</script>

<template>
  <div>
    <h1>Contact add</h1>
    <div class="contact-add w-50 m-auto">
      <ContactForm @on-submit-form="addContact" />
    </div>
  </div>
</template>

<style scoped>
</style>
