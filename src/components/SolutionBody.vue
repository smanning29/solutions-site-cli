<template>

        <!-- MAIN BODY TEXT SECTION -->
        <div class="lg:order-2 lg:w-3/4" data-aos="fade">

            <!-- REQ -->
            <p class="p-5 md:text-smd text-sml mt-5 md:leading-8" v-html="firstPar">
                paragraph 1
            </p>
            <h3 class="font-light font-body md:text-base text-smd text-drawdown tracking-wide px-5"  v-html="firstSub">
                subheader 1
            </h3>
            <p class="p-5 md:text-smd text-sml  md:leading-8" v-html="secondPar">
                paragraph 2
            </p>
            <img :src="['../assets/img/s'+ solutionNum +'-1.jpg']" alt="Image" class="px-5">
            <div class="text-drawdown p-5" v-html="firstImgCap" >
                image caption
            </div>
            <h3 class="font-light font-body md:text-base text-smd text-drawdown tracking-wide px-5" v-html="secondSub">
                subheader 2
            </h3>
            <p class="p-5 md:text-smd text-sml  md:leading-8" v-html="thirdPar">
                paragraph 3
            </p>

            <!-- CONDITIONAL PARAGRAPHS -->
            <h3 v-if="thirdSub != 'no'" class="font-light font-body md:text-base text-smd text-drawdown tracking-wide px-5" v-html="thirdSub">
                subheader 3
            </h3>
            <p v-if="fourthPar != 'no'" class="p-5 md:text-smd text-sml md:leading-8" v-html="fourthPar">
                paragraph 4
            </p>

            <!-- REQ -->
            <img :src="['../assets/img/s'+ solutionNum +'-2.jpg']" alt="Image" class="px-5">
            <div class="text-drawdown p-5" v-html="secondImgCap" >
                image caption
            </div>

            <!-- CONDITIONAL PARAGRAPHS -->
            <h3 v-if="fourthSub != 'no'" class="font-light font-body md:text-base text-smd text-drawdown tracking-wide px-5" v-html="fourthSub">
                subheader 4
            </h3>
            <p v-if="fifthPar != 'no'" class="p-5 md:text-smd text-sml md:leading-8" v-html="fifthPar">
                paragraph 5
            </p>

            <!-- CONDITIONAL IMAGE -->
            <!-- <div v-if="thirdImg[solutionIndex] != 'no'">
                <img v-bind:src="thirdImg[solutionIndex]" alt="Image" class="px-5">
                <div class="text-drawdown p-5" v-html="thirdImgCap[solutionIndex]" >
                    image caption
                </div>
            </div> -->

            <div class="flex flex-row p-5 lg:pb-10">
                
                    <a class="w-1/2 transition duration-500 ease-in-out bg-drawdown hover:bg-sky text-white hover:text-drawdown text-center mr-2 p-5 md:text-smd text-sml rounded-md transform hover:scale-1025 motion-reduce:transform-none motion-reduce:transition-none" v-on:click="decreaseSolutionIndex()" href="#top-anchor">
                        PREVIOUS SOLUTION
                    </a>
                
                    <a class="w-1/2 transition duration-500 ease-in-out bg-drawdown hover:bg-sky text-white hover:text-drawdown text-center ml-2 p-5 md:text-smd text-sml rounded-md transform hover:scale-1025 motion-reduce:transform-none motion-reduce:transition-none" v-on:click="increaseSolutionIndex()" href="#top-anchor">
                        NEXT SOLUTION
                    </a>
            </div>

        </div>

</template>

<script>
import { mapState, mapMutations} from "vuex";
export default {
  name: 'SolutionHeader',
  props: {
    solutionNum: Number,
    firstPar: String,
    firstSub: String,
    secondPar: String,
    firstImgCap: String,
    secondSub: String,
    thirdPar: String,
    thirdSub: String,
    fourthPar: String,
    secondImgCap: String,
    fourthSub: String,
    fifthPar: String,
  },
  computed: {
      ...mapState(["solutionIndex"])
    },

    methods: {
      ...mapMutations(["increaseSolutionIndex", "decreaseSolutionIndex"])
    }
}

</script>