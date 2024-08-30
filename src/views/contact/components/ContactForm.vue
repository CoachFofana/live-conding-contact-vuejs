<script setup>
import { useContactStore } from "@store/contactStore";
import { watch } from "vue";
const store = useContactStore();

const emit = defineEmits(["onSubmitForm"]);

const props = defineProps({
  contact: {
    require: false,
    default: null,
    type: Object,
  },
  edit: {
    require: false,
    default: false,
    type: Boolean,
  },
});

if (props.edit && props.contact) {
  store.contactForm = props.contact;
}

const form = store.contactForm;

const onSubmit = () => {
  emit("onSubmitForm");
};

watch(
  () => store.contactForm.name,
   (currentValue, oldValue) => {
    console.log("Current name length is " + currentValue.length);
  }
);
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Your name"
        v-model="form.name"
      />
    </div>
    <div class="mb-3">
      <label for="number" class="form-label">Number</label>
      <input
        type="text"
        class="form-control"
        id="number"
        placeholder="Your number"
        v-model="form.number"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Your email"
        v-model="form.email"
      />
    </div>

    <div class="mt-5 d-flex justify-content-end">
      <CustomBtn
        custom-class="btn btn-secondary"
        class="me-4"
        title="Contact list"
        isLink
        route="/contact"
      />
      <CustomBtn
        custom-class="btn btn-primary"
        :title="edit ? 'Save' : 'Submit'"
        icon="fas fa-paper-plane"
      />
    </div>
  </form>
</template>

<style scoped>
</style>
