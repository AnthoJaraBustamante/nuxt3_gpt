<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div class="grid gap-y-2">
        <!-- chat messages -->
      </div>
    </div>
    <!-- messagebox -->
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
  }
}
</script>

<style></style>