<template>
<div class="container">
    <div class="row">
        <div class="col-12 mt-3">
            <img src="../assets/Logo.png" alt=" </> Boosoft">
        </div>
    </div>
</div>
<!-- form -->
<div class="container" id="form">
    <div class="row justify-content-evenly">
        <div class="col-12" id="des">
            <div id="welcome" class="text-center ">
                Welcome back
            </div>
            <div id="logdes" class="text-center ">
                Log In to manage your deliveries and access other services.
            </div>
            <p id="errormsg" style="color: red; font-size: 12px;"></p>
            <form enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label my-0">Email</label>
                    <input type="email" class="inputs" id="e1" placeholder="Enter your Email" name="email" v-model="email" />
                    <p id="result"></p>
                </div>
                <div>
                    <label for="inputPassword" class="form-label  my-0">Password</label>
                    <input type="password" class="inputs" id="p1" placeholder="Enter your Password" v-model="password" />
                </div>
                <div class="d-grid my-4 gap-2">
                    <input type="button" v-on:click="Login()" class="btn" value="Log In" id="button">
                </div>
            </form>
        </div>
        <div class="col-12 text-end">
            <a href="" id="forget">Forgot Password?</a>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login_',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async Login() {
 
            // console.log(this.email,this.password)
            // let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            // let result = await axios.get(`https://apigenerator.dronahq.com/api/mL3GFFSa/User?Email=${this.email}&Password=${this.password}`)
            // let result = await axios.get(`https://apigenerator.dronahq.com/api/mL3GFFSa/User`)
            // let result = await axios.get(`https://reqres.in/api/users?email=${this.email}&first_name=${this.password}`)

            let result = await axios.get(`https://apigenerator.dronahq.com/api/-Up9SsFh/users?FirstName=${this.password}&Email=${this.email}`)
            // console.log(result)
            if (result.status == 200 && result.data.length > 0) {
               alert("Welcome to Boosoft  " +this.password)
                this.$router.push({ name: 'Shiping' }) //redirect to home page after submiting
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))

            } else {
                alert('Invalid Credentials')
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'Shiping' })
        }
    }
}
</script>

<style>
@import '../css/login.css'
</style>
