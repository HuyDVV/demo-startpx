<template>
  <div class="typing-container">
    <p class="typed">{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">

interface TypingAnimationProps {
    text: string
}
const props = defineProps<TypingAnimationProps>()
</script>

<style scoped>
.typing-container {
  display: inline-block;
  font-family: 'arial';
  font-size: 24px;
}

.typed {
  color: white;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinking {
  0% {border-right-color: transparent}
  50% {border-right-color: white}
  100% {border-right-color: transparent}
}
</style>
