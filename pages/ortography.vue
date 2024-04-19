<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div class="grid gap-y-2">
        <!-- chat messages -->
        <template  v-for="(message, index) of messages" :key="index">
          <ChatMessage v-if="message.isGpt" :text="message.text" />
          <MyMessage v-else :text="message.text" />
        </template>
        <TypingLoader v-if="isLoading" />
      </div>
    </div>
    <!-- messagebox -->
    <!-- <TextMessageBox placeholder="Escribe aquí lo que deseas" @on-message="onMessage" /> -->
    <!-- <TextMessageBoxFile placeholder="Escribe aquí lo que deseas" @on-message="onMessageWithFile" /> -->
    <TextMessageBoxSelect placeholder="Escribe aquí lo que deseas" @on-message="onMessageWithSelect"
      :options="options" />
  </div>
</template>

<script lang="ts">
import type { TextMessageOption } from '~/components/textMessageBoxSelect.vue';
import type { Message } from '~/interfaces/message.interface';

export default {
  setup() {
    definePageMeta({
      icon: 'fa-solid fa-spell-check',
      title: 'Ortografía',
      description: 'Corregir ortografía',
    });
  },
  methods: {
    onMessage(message: string) {
      console.log(message);
    },
    onMessageWithFile(message: string, file: File) {
      console.log(message, file);
    },
    onMessageWithSelect(message: string, selectedOption: string) {
      console.log(message, selectedOption);
    },
  },
  data() {
    return {
      messages: [{ text: 'Hola soy GPT', isGpt: true, }, { text: 'Hola, soy un usuario', isGpt: false }] as Message[],
      isLoading: false,
      options: [{ id: '1', text: 'Uno' }, { id: '2', text: 'Dos' },] as TextMessageOption[],
    }
  }
}
</script>

<style></style>