<template>
<!-- profile -->
<div id="profile" >
    <button id="pbtn" class="mb-2" v-on:click="profileshow()">SJ</button>
</div>
<!-- profile click -->
<div id="setlog" ref="profilebtn">
    <div class=" val">Settings</div>
    <div class=" val" id="logout" v-on:click="logout()">Logout</div>
</div>
</template>

<script>
export default {
    name: 'Profile_',
    methods: {
        profileshow() {
            let val = this.$refs.profilebtn.style.display == "block";
            if (val) {
                this.$refs.profilebtn.style.display = "none"
            } else {
                this.$refs.profilebtn.style.display = "block"
            }
        },
          logout() {
            localStorage.clear();
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>
