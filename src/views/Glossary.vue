<template>
  <div class="py-7">
    <h1 class="text-drawdown font-display text-mdlg tracking-wide">
        Glossary
    </h1>
    <p class="pb-5">
        This glossary includes climate science words or phrases that are used often in these solutions but may be unfamiliar to new learners.
    </p>

    <glossary-item term="Climate Change" def="The process in which human-produced greenhouse gases trap excess heat in the atmosphere. This trapped heat causes the Earth’s climate to warm. For this reason,  the process is sometimes referred to as global warming."/>
    <glossary-item term="Greenhouse gas/gasses" def="Greenhouse gases are gases that trap heat in earth’s atmosphere by absorbing infrared radiation. The four main greenhouse gases are carbon dioxide, methane, nitrous oxide, and fluorinated gases. The accumulation of these gases in the atmosphere are the main cause of climate change."/>
    <glossary-item term="Drawdown" def="Drawdown is the point in the future when levels of greenhouse gases in the atmosphere stop climbing and start to steadily decline. If we are able to drawdown greenhouse gases to the level they were at before the Industrial Revolution, we have a chance to stop the negative impacts of climate change."/>
    <glossary-item term="Carbon" def="Carbon is a chemical element that is one of the building blocks of life. It is present in all living things on Earth. It’s simple atomic structure allows it to bond in many different ways and with many different elements.  In terms of climate change, carbon can combine with other elements to form greenhouse gases, such as carbon dioxide or methane."/>
    <glossary-item term="Carbon dioxide" def="Carbon dioxide, or CO2, is a heavy, odorless gas. It is the most abundant greenhouse gas after water vapor. Carbon dioxide is produced when we burn fossil fuels, when animals and plants decompose, and when humans breathe. It is absorbed from the air by plants as part of the process of photosynthesis."/>
    <glossary-item term="Carbon sink" def="Carbon sinks are natural features, such as forests, wetlands and oceans. They take carbon dioxide out of the atmosphere and sequester (store) it in their biomass as part of the carbon cycle. Carbon sinks are important for climate change because they sequester carbon dioxide so that it does not accumulate in the atmosphere. Rainforests are an important example of carbon sinks because as plants grow, they absorb carbon in their roots, trunks, and branches. When we burn and cut down rainforests, the carbon dioxide that plants have sequestered is released again into the atmosphere."/>
    <glossary-item term="Methane" def="Methane is a colorless, odorless, flammable gas that is generally released by the decomposition of organic matter and the process of extracting fossil fuels. For example, cows release methane as part of their digestion process and trapped pockets of methane can be released when we drill for oil. Methane is the main component of natural gas. It is a greenhouse gas that can trap 34 times more heat than carbon dioxide in earth’s atmosphere. That means that it warms the earth 34 times faster than carbon dioxide."/>
    <glossary-item term="Emissions" def="Emission means sending or throwing out. When we use this term in the context of climate change, we refer to the greenhouse gases that are released when things, such as fossil fuels and biomass are burned. One of the most common examples is a car burning gas and creating emissions through exhaust."/>
    <glossary-item term="Energy" def="Energy is the ability to do work or create heat. Everything around us has energy, and energy can take many forms: electrical, thermal, chemical, potential and kinetic. We use energy to cook food, to light and heat our homes, and our bodies even transfer energy when we kick a soccer ball."/>
    <glossary-item term="Electricity" def="Electricity is a form of energy that involves the movement of charged particles. We use electricity to power things like lights, appliances, and even cars."/>
    <glossary-item term="Fossil fuels" def="Fossil fuels are created when plants and animals die, are buried in the earth, and after thousands of years turn into substances like oil, coal, and methane. When fossil fuels are burned, the chemical energy inside of them turns into heat. We use this heat to create electricity or create motion, such as in the engine of a car. Burning fossil fuels also releases carbon dioxide and other air pollutants into the atmosphere. Fossil fuels are considered a nonrenewable energy source because there is a limited amount of them."/>
    <glossary-item term="Renewable energy" def="Energy that comes from relatively unlimited sources such as wind, geothermal, sun, or tides. Sometimes referred to as “clean” energy. This type of energy is in contrast to non-renewable energy sources, such as fossil fuels."/>

    <div class="flex flex-row p-5 pb-10">
                
        <router-link to="/solutions" class="w-1/2 transition duration-500 ease-in-out bg-drawdown hover:bg-sky text-white hover:text-drawdown text-center mr-2 p-5 text-smd rounded-md motion-reduce:transition-none">
            READ THE SOLUTIONS
        </router-link>
        <a class="w-1/2 transition duration-500 ease-in-out bg-forest hover:bg-leaf text-white hover:text-black text-center ml-2 p-5 text-smd rounded-md motion-reduce:transition-none" href="#">
            DOWNLOAD GLOSSARY FOR PRINT
        </a>
    </div>

  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import GlossaryItem from '@/components/GlossaryItem.vue';

export default {
  name: 'Glossary',
  components: {
    GlossaryItem
  },
  computed: {
        ...mapState(["solutionIndex"])
  },
  methods: {
        ...mapMutations(["setSolutionIndex"])
  },
}

</script>
