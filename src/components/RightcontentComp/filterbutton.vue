<template>
<div class="col-lg-2 col-3 pe-lg-4 pe-3 p-0">
    <div class="frightcontent">
        <div id="filter" v-on:click="filter()">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15.129" height="10.896" viewBox="0 0 15.129 10.896">
                    <g id="filter_icon" data-name="filter icon" transform="translate(-177.052 -155.448)">
                        <path id="Path_9033" data-name="Path 9033" d="M177.788,156.918h13.658a.735.735,0,0,0,0-1.47H177.788a.735.735,0,0,0,0,1.47Z" fill="#393a60" />
                        <path id="Path_9034" data-name="Path 9034" d="M236.588,260.3h8.52a.735.735,0,1,0,0-1.47h-8.52a.735.735,0,1,0,0,1.47Z" transform="translate(-56.228 -98.858)" fill="#393a60" />
                        <path id="Path_9035" data-name="Path 9035" d="M284.638,372.408h4.316a.735.735,0,1,0,0-1.47h-4.316a.735.735,0,0,0,0,1.47Z" transform="translate(-102.176 -206.064)" fill="#393a60" />
                    </g>
                </svg>

            </span>
            <span id="fil">Filters</span>
        </div>
        <!-- filter click -->
        <div id="filterclick" ref="fltc">
            <div class="filtercontent">
                <div>
                    Filter by
                </div>
                <div id="close" v-on:click="close()">
                    <svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2" />
                        <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div class="filtercontet" id="formdate">
                <form action="">
                    <div id="fdate">Date</div>
                    <div id="datelist">
                        <div id="dateinput" v-on:click="dateinput()">
                            <div id="inputdatevalue" >{{datevalue}}</div>
                            <div id="drop">
                                <svg width="1px" height="1px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;">
                                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" /></svg>
                            </div>
                        </div>
                        <div id="dates" ref="showldate">
                            <div class="datevalue">Past Week</div>
                            <div class="datevalue">Past Month</div>
                            <div class="datevalue">Past Year</div>
                            <div class="datevalue">All Time</div>
                            <div id="customdate">
                                <div id="radiobtn" v-on:click="customdate()">
                                    <input type="radio" name="Date" id="cus">&nbsp;&nbsp;Custom Date
                                </div>
                                <div>
                                    <input type="date" name="" id="custdate" ref="cusdate">
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" id="datesubmit" value="submit">
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'filterButton',
    data(){
        return {
            datevalue:'Past Week'
        }
    },
    methods: {
        
        filter() {
            let fltr = this.$refs.fltc.style.display == "flex";
            if (fltr) {
                this.$refs.fltc.style.display = "none";
                this.$refs.showldate.style.display = "none";
                this.$refs.cusdate.style.display = "none";
            } else {
                this.$refs.fltc.style.display = "flex";
            }
        },
        close() {
            this.$refs.fltc.style.display = "none";
            this.$refs.showldate.style.display = "none";
            this.$refs.cusdate.style.display = "none";
        },
        dateinput() {
            let datelist = this.$refs.showldate.style.display == "flex";
            if (datelist) {
                this.$refs.showldate.style.display = "none";
                this.$refs.cusdate.style.display = "none";
            } else {
                this.$refs.showldate.style.display = "flex";
            }
        },
        customdate() {
            let cusdt = this.$refs.cusdate.style.display == "flex";
            if (cusdt) {
                this.$refs.cusdate.style.display = "none";
            } else {
                this.$refs.cusdate.style.display = "flex";
            }
        }

    }
}
</script>
