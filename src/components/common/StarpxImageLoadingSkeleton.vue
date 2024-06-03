<script setup lang="ts">
import IconLogo from '@/components/icon/IconLogo.vue'
</script>

<template>
  <div role="status" class="z-0 w-full h-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
      <IconLogo :width="60" class="animate-pulse-fast" alt="loading" />
    </div>
  </div>
</template>