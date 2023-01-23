<script>
import AppHeader from './components/AppHeader.vue';




export default {
  name: 'AppVue',
  components: {
    AppHeader,


  }
}
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

/* Route transition */
.route-enter-from {
  opacity: 0;
  transform: translateY(-300px);
}

.route-enter-active {
  transition: all 0.4s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(300px);
}

.route-leave-active {
  transition: all 0.4s ease-in;
}
</style>
