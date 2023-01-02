<template>
<!-- download -->
<div id="download" class="ms-lg-3" v-on:click="download()">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
            <path id="download" d="M9.219,21A1.25,1.25,0,0,1,8,19.781v-2.9H9.219v2.9H19.781v-2.9H21v2.9A1.25,1.25,0,0,1,19.781,21ZM14.5,17.892l-3.92-3.92.873-.873,2.438,2.437V8h1.219v7.536L17.547,13.1l.873.873Z" transform="translate(-8 -8)" fill="#393a60" />
        </svg>
    </span>
    <span> Download Template</span>
</div>
<!-- download click -->
<div id="downl" ref="showdown">
    <div class="downlval">Domestic Download</div>
    <div class="downlval">International Download</div>
</div>
</template>

<script>
export default {
    name:'downloadBtn',
    methods:{
        download(){
            let down = this.$refs.showdown.style.display == "flex";
            if(down){
                this.$refs.showdown.style.display = "none";
            }
            else{
                this.$refs.showdown.style.display = "flex";
            }
        }
    }
}
</script>
