<script>
import Navbar from "~/components/Navbar.vue"
</script>

<template>
  <div data-theme="mytheme" class="h-screen flex flex-col">
    <Navbar class=""/>
    <slot  class=""/>
  </div>
</template>
