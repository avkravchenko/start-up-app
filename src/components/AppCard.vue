<template>
  <div class="card" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <div v-if="isHovered">
      <img src="../assets/arrow-on.png" alt="">
    </div>
    <div v-else>
      <img src="../assets/arrow-off.png" alt="">
    </div>
    <h2>{{ headerText }}</h2>
    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import '../scss/card.scss';

export default defineComponent({
  name: 'AppCard',
  props: {
    header: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isHovered = ref(false);

    const handleMouseOver = () => {
      isHovered.value = true;
    };

    const handleMouseLeave = () => {
      isHovered.value = false;
    };

    return {
      isHovered,
      headerText: props.header,
      handleMouseOver,
      handleMouseLeave
    };
  }
});
</script>
