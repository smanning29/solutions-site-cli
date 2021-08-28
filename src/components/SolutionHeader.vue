<template>
  <div> 
      <!-- ['{ backgroundImage:url(../assets/img/s'+solutionNum+'-0.jpg)}'] -->
            <!-- v-bind:style="{ backgroundImage: bgImgs[solutionIndex]}" x-init="changeBgImage()" -->
    <div class="flex flex-row pb-24 lg:pb-28" >
        <button class="flex-initial w-1/8 object-left lg:pl-8"  v-on:click="decreaseSolutionIndex()">
            <img src="../assets/img/left.png" alt="Left arrow" id="l-arrow" class="object-left text-left" data-aos="fade" data-aos-delay="100">
        </button>
        <div class="w-3/4">  </div>
        <button class="flex-initial w-1/8 object-right"  v-on:click="increaseSolutionIndex()"> 
            <img src="../assets/img/right.png" alt="Right arrow" id="r-arrow" class="object-right text-right right-0" data-aos="fade" data-aos-delay="100">
        </button>
    </div>
        <!-- SOLUTION NUMBER AND TITLE -->
    <div data-aos="fade">
        <div class="w-full flex flex-row">
            <div class="lg:w-3/4 md:w-1/4 w-0"></div>
            <div class="lg:w-1/4 md:w-3/4 w-full text-right flex flex-row ">
                <div class="w-11/12">
                    <transition name="slide-fade">
                        <div v-show="showPhotoCred==true" class="px-5 py-2 bg-sky75 hover:underline" v-html="photoCred" >
                            Photo cred
                        </div>
                    </transition>
                </div>
                <div class="w-1/12 pl-2 py-2 bg-sky" v-on:click="togglePhotoCred()">
                   <svg v-if="showPhotoCred==false" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.45 48.49" width="20">
                    <path d="M29.08,1.18,11.65,24a1.77,1.77,0,0,0-.3,1.53h0a2.31,2.31,0,0,0,.1.28.25.25,0,0,0,0,.07,1.06,1.06,0,0,0,.12.2.56.56,0,0,0,.05.08L29.09,49a1.77,1.77,0,0,0,2.49.33l0,0A1.78,1.78,0,0,0,32,46.86L15.35,25.1,31.94,3.36A1.78,1.78,0,0,0,31.6.87l0,0A1.78,1.78,0,0,0,29.08,1.18Z" fill="#000"/></svg>
                   <svg v-if="showPhotoCred==true" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.45 48.49" width="20">
                    <path d="M.79,17.83,23.64,35.26a1.78,1.78,0,0,0,1.52.3h0l.27-.1.07,0,.21-.12.08,0L48.65,17.82A1.78,1.78,0,0,0,49,15.33l0,0A1.78,1.78,0,0,0,46.48,15L24.72,31.56,3,15a1.78,1.78,0,0,0-2.49.34l0,0A1.77,1.77,0,0,0,.79,17.83Z" fill="#000"/></svg>
                </div>
            </div>
        </div>
        <div class=" bg-drawdown50 font-hairline italic px-10 py-2">
            <p class="text-left text-white font-body text-sm"> 
                <!-- v-html="solNum[solutionIndex]" -->
                Solution #{{solutionNum}} of 20
            </p>
        </div>
        <div class="w-full bg-drawdown px-10 pt-2" >
            <h2 class="text-left text-white font-display text-md md:text-mdlg" > 
                <!-- v-html="solHeaders[solutionIndex]" -->
                {{solutionName}}
            </h2>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations} from "vuex";
export default {
  name: 'SolutionHeader',
  props: {
    solutionNum: Number,
    solutionName: String,
    photoCred: String,
    photoCredLink: String,
    showPhotoCred: Boolean
  },
  computed: {
      ...mapState(["solutionIndex"])
    },

    methods: {
      ...mapMutations(["increaseSolutionIndex", "decreaseSolutionIndex"]),
      togglePhotoCred: function () {
            return this.showPhotoCred = !this.showPhotoCred
        }

    }
}

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>