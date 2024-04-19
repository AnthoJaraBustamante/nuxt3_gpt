<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div class="grid gap-y-2">
        <!-- chat messages -->
        <ChatMessage :text="'Escribe el texto que revise'" />
        <MyMessage :text="'Escribe el texto que revise'" />
        <TypingLoader />
      </div>
    </div>
    <!-- messagebox -->
    <TextMessageBoxSelect placeholder="Escribe aquí lo que deseas" @on-message="onMessage" />
  </div>
</template>

<script lang="ts">
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
    }
  }
}
</script>

<style></style>