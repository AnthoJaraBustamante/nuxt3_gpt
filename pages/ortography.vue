<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div class="grid gap-y-2">
        <!-- chat messages -->
        <template v-for="(message, index) of messages" :key="index">
          <ChatMessage v-if="message.isGpt" :text="message.text" />
          <MyMessage v-else :text="message.text" />
        </template>
        <TypingLoader v-if="isLoading" />
      </div>
    </div>
    <!-- <button @click="fetchData"><span>Press</span></button> -->
    <!-- <div v-if="data">{{ data }}</div> -->
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

import { ortographySchema, type OrtographyDTO } from '~/schemas/ortography';

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

    async fetchData() {
      const body: OrtographyDTO = { prompt: 'asd', maxTokens: 2 };
      const data = await $fetch('/api/gpt/ortography-check', { method: 'POST', body: body });
     
      console.log(data);
      // this.data = data;
    }

  },
  data() {
    return {
      messages: [{ text: 'Hola soy GPT', isGpt: true, }, { text: 'Hola, soy un usuario', isGpt: false }] as Message[],
      isLoading: false,
      options: [{ id: '1', text: 'Uno' }, { id: '2', text: 'Dos' },] as TextMessageOption[],
      data: null as any,
    }
  }
}
</script>

<style></style>