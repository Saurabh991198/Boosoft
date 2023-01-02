<template>
<!-- right content -->
<div class="col-lg-10  col-12 p-0 ps-lg-3 mt-3" id="right">
    <div class="container-fluid p-0">
        <div class="row m-0 p-0">
            <!-- welocme content -->
            <div class="row m-0 p-0" id="welcome">
                <!-- wlecome left content -->
                <div class="col-lg-6 col-8" id="rightcontent">
                    <div class="fleftcontent">
                        <div id="name">
                            Welcome back {{name}} ,
                        </div>
                        <div id="date">
                            {{currentdate }}
                        </div>
                    </div>
                </div>
                <!-- wlecome right content bgchange & profile-->
                <div class="col-lg-6 col-4   pt-3">
                    <div class="frightcontent ">
                        <!-- bgchange -->
                        <bgChange />
                        <!-- profile  -->
                        <Profile_ />
                    </div>
                </div>
            </div>
            <!-- Shipments second row -->
            <div class="row pt-lg-3 mb-lg-3 m-0 p-0 " id="content2">
                <!-- shipments new orders left content  -->
                <div class="col-lg-6  m-0 ">
                    <div class="fleftcontent">
                        <div id="shipment">
                            Shipments
                        </div>
                        <div id="shipcontent">
                            You can check or create your new orders , ready to shipment and track an orders.
                        </div>
                    </div>
                </div>
                <!-- shipments rigth buttons doownload,import,addord -->
                <div class="col-lg-6 pt-3 p-0 m-0">
                    <div class="frightcontent right2 pe-lg-2">
                        <!-- download -->
                        <downloadBtn />
                        <!-- import -->
                        <div id="import" class="ms-lg-3">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.778" height="11.704" viewBox="0 0 15.778 11.704">
                                    <path id="import_icon" data-name="import icon" d="M105.647,95.192a4.542,4.542,0,0,1,4.5,3.8,3.726,3.726,0,0,1-.6,7.406h-8.318a3.219,3.219,0,0,1-.138-6.435,4.538,4.538,0,0,1,4.552-4.769Zm0,.679a3.9,3.9,0,0,0-3.873,4.371.34.34,0,0,1-.34.382h-.2a2.546,2.546,0,1,0,0,5.093h8.318a3.057,3.057,0,0,0,.281-6.1h0a.339.339,0,0,1-.308-.3,3.892,3.892,0,0,0-3.878-3.448Zm0,3.4a.367.367,0,0,1,.228.085l1.867,1.7a.349.349,0,0,1,.027.483.355.355,0,0,1-.483.021l-1.3-1.183v3.65a.339.339,0,0,1-.679,0v-3.65l-1.3,1.183a.362.362,0,0,1-.483-.021.345.345,0,0,1,.027-.483l1.867-1.7a.3.3,0,0,1,.228-.085Z" transform="translate(-97.758 -94.942)" fill="#393a60" stroke="#393a60" stroke-width="0.5" />
                                </svg>

                            </span>
                            <span>Import CSV</span>
                        </div>
                        <!-- addorder -->
                        <div id="addorder" class="ms-lg-3 me-3">
                            <button>
                                <span>+</span>
                                <span> Add order</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- new orders,readytship left content third row-->
                <div class="col-12 pt-lg-3 my-lg-3 my-3 m-0" id="neword">
                    <div class="fleftcontent d-flex">
                        <!-- new order -->
                        <div id="new" class="nrs d-flex" >
                            <div > New orders</div>
                            <div class="ms-2">
                                <div class="rp">0</div>
                            </div>
                        </div>
                        <!-- ready to ship -->
                        <div id="ready" class="ms-3 d-flex nrs ">
                            <div>
                                Ready to ship
                            </div>
                            <div class="ms-2">
                                <div class="rp">0 </div>
                            </div>
                        </div>
                        <!-- history -->
                        <div id="history" class="ms-3">
                            <div>
                                <!-- <lottie-player src="shipment.json"></lottie-player> -->
                                <img src="../assets/iconmask.gif" alt="" width="28px" id="iconmask">
                            </div>
                            <div class="nrs">
                                Shipment history
                            </div>
                        </div>
                    </div>
                </div>
                <!-- input & filter -->
                <div class="row p-0 m-0" id="inputcontent">
                    <!-- input -->
                    <div class="col-lg-10 col-9 pe-0" id="inputbg">
                        <div class="fleftcontent">
                            <div id="searchbox">
                                <div id="searchicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.323" viewBox="0 0 15.359 15.323">
                                        <path id="Search" d="M20.2,21.273,16.908,18.02a5.82,5.82,0,0,1-1.849,1.07,6.536,6.536,0,0,1-2.245.383,6.576,6.576,0,0,1-4.833-1.981A6.514,6.514,0,0,1,6,12.711a6.514,6.514,0,0,1,1.981-4.78A6.545,6.545,0,0,1,12.788,5.95a6.471,6.471,0,0,1,4.767,1.981,6.76,6.76,0,0,1,1.6,6.973,6.7,6.7,0,0,1-1.109,1.981l3.316,3.227Zm-7.409-3.385a4.943,4.943,0,0,0,3.645-1.519,5.008,5.008,0,0,0,1.505-3.658,5.008,5.008,0,0,0-1.505-3.658,4.943,4.943,0,0,0-3.645-1.519A5.017,5.017,0,0,0,9.1,9.053a4.986,4.986,0,0,0-1.519,3.658A4.986,4.986,0,0,0,9.1,16.369,5.017,5.017,0,0,0,12.788,17.888Z" transform="translate(-6 -5.95)" fill="#393a60" />
                                    </svg>
                                </div>
                                <input type="search" id="input" placeholder="Search by criteria including name, reference, connote …">
                            </div>
                        </div>
                    </div>
                    <!-- filter button -->
                    <filterButton />
                </div>
                <!-- inbox :- orderbox  -->
                <div class="row mt-3 p-0 m-0 " id="inbox">
                    <div class="col-12 p-0 m-0 " id="list">
                        <div id="empty">
                            <div class="img">
                                <img src="../assets/emptybox.png" alt="">
                            </div>
                            <div id="femptytext">
                                You currently have no new orders
                            </div>
                            <div id="semptytext">
                                You can check for new orders by syncing with your ecommerce integration.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Profile_ from './RightcontentComp/profile.vue'
import bgChange from './RightcontentComp/bgchange.vue'
import downloadBtn from './RightcontentComp/downloadbtn.vue'
import filterButton from './RightcontentComp/filterbutton.vue'
import moment from 'moment'
export default {
    name: 'RightContent',
    components: {
        Profile_,
        bgChange,
        downloadBtn,
        filterButton
    },
    data() {
        return {
            name: '',
            currentdate: ''
        }
    },
   async mounted() {
        let user = localStorage.getItem('user-info')
        this.name =  JSON.parse(user).FirstName;

        // current Date
        let setdate = moment().format('dddd, DD MMM');
        // console.log(setdate)
        this.currentdate = setdate;
    }

}
</script>

<style>
@import '../css/rightcontent.css'
</style>
