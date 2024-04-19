<template>
  <form @submit.prevent="sendMessage" class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">

    <div class="mr-3">
      <button @click="openFileInput" class="flex items-center justify-center text-gray-400">
        <i class="fa-solid fa-paperclip text-xl"></i>
      </button>
      <input type="file" ref="fileInput" hidden @change="handleFileChange">
    </div>

    <div class="flex-row w-full">
      <div class="relative w-full">
        <input type="text" autofocus
          class="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
          :placeholder="placeholder" v-model="message">

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
    openFileInput() {
      (this.$refs.fileInput as HTMLInputElement).click();
    },
    handleFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      console.log(input);
      if (!input.files) return;
      this.file = input.files[0];
    },
    sendMessage() {
      console.log(this.file);
      if (this.file === undefined) return;
      this.$emit('on-message', this.message, this.file);
      this.message = '';
      this.file = undefined;
    },
  },
  data() {
    return {
      message: '',
      file: undefined as File | undefined,
    }
  }
}

</script>

<style></style>