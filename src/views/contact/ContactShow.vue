<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import { useContactStore } from "../../store/contactStore";

const store = useContactStore();
const contactModal = ref(null);
const route = useRouter();

onMounted(() => {
  const modalElement = contactModal.value;
  const bootstrapModal = new Modal(modalElement);
  bootstrapModal.show();
});
</script>

<template>
  <div class="container-fluid">
    <h1 class="text-center fw-bold text-dark">Contact Show page</h1>

    <div
      class="modal fade"
      id="modalId"
      ref="contactModal"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="false"
    >
      <div
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitleId">Details contact</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="route.push('/contact')"
            ></button>
          </div>
          <div class="modal-body">
            <p v-if="store.currentContact.id">
              <span class="fw-bold">Id : </span>{{ store.currentContact.id }}
            </p>
            <p v-if="store.currentContact.name">
              <span class="fw-bold">Name : </span
              >{{ store.currentContact.name }}
            </p>
            <p v-if="store.currentContact.phone">
              <span class="fw-bold">Phone : </span
              >{{ store.currentContact.phone }}
            </p>
            <p v-if="store.currentContact.email">
              <span class="fw-bold">E-mail : </span
              >{{ store.currentContact.email }}
            </p>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <div class="right">
              <button
                aria-label="button edit"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="
                  store.getContactById(store.currentContact.id),
                    route.push(`/contact/edit/${store.currentContact.id}`)
                "
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                aria-label="button edit"
                class="btn btn-danger ms-1"
                @click="
                  store.remove(store.currentContact.id), route.push('/contact')
                "
                data-bs-dismiss="modal"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="route.push('/contact')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-image: url("../../assets/bg-sow-contact.jpg");
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.modal-content {
  background-color: #ffffffc4;
}
</style>
