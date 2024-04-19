<template>
  <form @submit.prevent="sendMessage" class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
    <div class="flex-grow">
      <div class="relative w-full">

        <input type="text" autofocus
          class="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
          :placeholder="placeholder" v-model="message">

        <select class="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10">
          <option value="">Seleccione</option>
        </select>
      </div>
    </div>

    <div class="ml-4">
      <button class="btn-primary" type="submit">
        <!-- <span class="mr-2">Enviar</span> -->
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    disableCorrection: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['on-message'],
  methods: {
    sendMessage() {
      if (this.message === '') return;
      this.$emit('on-message', this.message);
      this.message = '';
    },
  },
  data() {
    return {
      message: '',
    }
  }
}

</script>

<style></style>