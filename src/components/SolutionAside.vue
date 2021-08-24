<template>
  
    <div class="lg:order-1 lg:w-1/4 p-5" data-aos="fade">

        <div class="my-5 p-5 bg-forest text-white font-light tracking-wider text-smd" >
            <div class="font-display text-mdlg">
                57.6–159
            </div>
            GIGATONS
            <div class="text-sm pt-2">CO2 EQUIVALENT <br> REDUCED / SEQUESTERED (2020–2050)</div>
        </div>

        <div>
            <!-- v-if="keyWords[solutionIndex] != 'no'" -->
            <div class="bg-sun p-2 text-white text-base text-center tracking-wide" >
                KEY WORDS
            </div>
            <div class="bg-sun25">
                <div class="p-5">
                    key words
                </div>
            </div>
        </div>

        <a href="" target="_blank">
            <div class="bg-drawdown hover:bg-sky text-white hover:text-drawdown text-center my-5 p-5 text-smd rounded-md">
                VIEW THE ORIGINAL SOLUTION
            </div>
        </a>
        <a href="" target="_blank">
            <div class="bg-drawdown hover:bg-sky text-white hover:text-drawdown text-center my-5 p-5 text-smd rounded-md">
                DOWNLOAD THIS SOLUTION TO PRINT
            </div>
        </a>
        <a class="text-drawdown italic hover:underline" href="">
            or download Top 20 Solutions to print
        </a>
        
    </div>

    
</template>

<script>
import { mapState, mapMutations} from "vuex";
export default {
  name: 'SolutionHeader',
  props: {
    solutionNum: String,
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