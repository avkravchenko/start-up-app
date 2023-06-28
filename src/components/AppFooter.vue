<template>
    <footer class="footer">
        <div class="footer-container" :class="{ 'footer-container--blured': isBurgerClicked }">
            <img class="footer-container__logo" src="../assets/logo-1.svg" alt="">
            <p class="footer-container__date">© 2016-2022 startup-it.ru</p>
        </div>
    </footer>
</template>

<script>
    import '../scss/footer.scss';
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: 'AppFooter',
        setup() {  
            const store = useStore();
            const isBurgerClicked = computed(() => store.getters.isBurgerClicked);

            return {
                isBurgerClicked
            };
        }
    }
</script>