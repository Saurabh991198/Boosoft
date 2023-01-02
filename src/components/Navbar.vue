<template>
<!-- left content -->
<div class="col-lg-2  col-12" id="leftbg">
    <div class="row justify-content-between" id="menuposition">
        <!-- menu -->
        <div id="menu">
            <!-- hamburget -->
            <div class="col-2 menuicons ps-3" id="hambur">
                <div>
                    <svg id="menusvg" v-on:click="show()" ref="menu" xmlns="http://www.w3.org/2000/svg" width="16.748" height="11.165" viewBox="0 0 16.748 11.165">
                        <path id="hamburget_menu_icon" data-name="hamburget menu icon" d="M6,23.165v-1.4H22.748v1.4Zm0-4.885v-1.4H22.748v1.4ZM6,13.4V12H22.748v1.4Z" transform="translate(-6 -12)" fill="#393a60" />
                    </svg>
                </div>
                <div id="cross" v-on:click="cross()" ref="cross">
                    <svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2" />
                        <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <!-- logo -->
            <div class="col-10  mt-2 menutext" id="logo">
                <div>
                    <img src="../assets/Logo.png" id="logoimg" alt="">
                </div>
            </div>
        </div>
        <!--main menu parts -->
        <div id="mainmenu" ref="menucont">
            <mainMenu />
        </div>
    </div>
</div>
</template>

<script>
import mainMenu from './mainmenu.vue'
export default {
    name: 'navbar_',
    data() {
        return {

        }
    },
    components: {
        mainMenu
    },
    methods: {
        show() {
            this.$refs.menu.style.display = "none";
            this.$refs.cross.style.display = "flex";
            this.$refs.menucont.style.display = "block";

        },
        cross() {
            this.$refs.menu.style.display = "flex";
            this.$refs.cross.style.display = "none";
            this.$refs.menucont.style.display = "none";
        }
    }
}
</script>

<style>
@import '../css/navbar.css'
</style>
