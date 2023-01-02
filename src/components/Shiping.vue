<template>
<!-- container -->
<div class="container-fluid  m-0 pt-lg-3  ">
    <div class="row" id="menucontent">
        <navbar_ />
        <RightContent />
    </div>
</div>
</template>

<script>
import navbar_ from './Navbar.vue'
import RightContent from './Rightcontent.vue'
export default {
    name: 'Shiping_',
    components: {
        navbar_,
        RightContent
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        // this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'Login' })
        }
        // this.name = JSON.parse(user).name

    }
}
</script>
