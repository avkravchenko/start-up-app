<template>
    <main class="main">
      <div class="main-container" :class="{ 'main-container--blured': isBurgerClicked }">
        <AppCard v-for="(option, index) in options" :key="index" :header="option.header" />
      </div>
    </main>
  </template>
  
  <script>
  import AppCard from './AppCard.vue';
  import '../scss/main.scss';
  import { defineComponent, reactive, computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    components: {
      AppCard
    },
    setup() {
      const options = reactive([
        { header: 'Option 1' },
        { header: 'Option 2' }
      ]);
  
      const store = useStore();
      const isBurgerClicked = computed(() => store.getters.isBurgerClicked);

    return {
      options,
      isBurgerClicked
    };
    }
  });
  </script>
  