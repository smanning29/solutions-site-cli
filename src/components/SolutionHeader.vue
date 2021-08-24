<template>
  <div> 
      <!-- ['{ backgroundImage:url(../assets/img/s'+solutionNum+'-0.jpg)}'] -->
            <!-- v-bind:style="{ backgroundImage: bgImgs[solutionIndex]}" x-init="changeBgImage()" -->
    <div class="flex flex-row pb-24 lg:pb-32" >
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
    solutionName: String
  },
  computed: {
      ...mapState(["solutionIndex"])
    },

    methods: {
      ...mapMutations(["increaseSolutionIndex", "decreaseSolutionIndex"])
    }
}

</script>