<template>
    <header class="header">
       <div class="header-container">
            <img v-show="!isBurgerClicked" class="header-container__logo" src="../assets/logo-1.svg" alt="">
            <nav class="header-container__nav">
                <ul class="header-container__nav__list">
                    <li class="header-container__nav__list__item"><a class="header-container__nav__list__item__link" href="#">О компании</a></li>
                    <li class="header-container__nav__list__item"><a class="header-container__nav__list__item__link" href="#">Услуги</a></li>
                    <li class="header-container__nav__list__item"><a class="header-container__nav__list__item__link" href="#">Контакты</a></li>
                </ul>
            </nav>
            <div v-show="!isBurgerClicked" class="header-container__mobile-menu-enter" @click="toggleBurger">
                <menu-outlined />
            </div>
            <div class="mobile-menu" v-show="isBurgerClicked">
                <div class="mobile-header">
                    <div><img class="mobile-header-container__logo" src="../assets/logo-1.svg" alt=""></div>
                    <p class="header-container__mobile-menu-exit" @click="toggleBurger"><close-outlined /></p>
                </div>
               
                
                <ul class="mobile-header-container__nav__list">
                    <li class="mobile-header-container__nav__list__item"><a class="mobile-header-container__nav__list__item__link" href="#">О компании</a></li>
                    <li class="mobile-header-container__nav__list__item"><a class="mobile-header-container__nav__list__item__link" href="#">Услуги</a></li>
                    <li class="mobile-header-container__nav__list__item"><a class="mobile-header-container__nav__list__item__link" href="#">Контакты</a></li>
                </ul>
            </div>
       </div>
    </header>
</template>

<script>
    import '../scss/header.scss';
    import '../scss/mobileMenu.scss';
    import { computed } from 'vue';
    import { useStore } from 'vuex';  
    import { MenuOutlined, CloseOutlined } from '@ant-design/icons-vue';      

    export default {
        name: 'AppHeader',
        components: {
            MenuOutlined,
            CloseOutlined
        },
        setup() {
            const store = useStore();
            const isBurgerClicked = computed(() => store.getters.isBurgerClicked);

            const toggleBurger = () => {
                store.dispatch('setBurgerClicked', !isBurgerClicked.value);
            };

            return {
                isBurgerClicked,
                toggleBurger,
            };
        }

    }
</script>

