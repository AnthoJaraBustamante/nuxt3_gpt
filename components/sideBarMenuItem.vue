<template>
  <NuxtLink :to="path" exact-active-class="bg-gray-800"
    class="flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors">
    <i :class="icon" class="text-2xl mr-4 text-indigo-400"></i>
    <div class="flex flex-col flex-grow">
      <span class="text-white text-lg font-semibold">{{ title }} </span>
      <span class="text-gray-400 text-sm">{{ description }} </span>
    </div>
  </NuxtLink>
</template>
 
<script lang="ts">

export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    path: {
      required: true,
      type: String,
    },
  }
}

</script>

<style></style>