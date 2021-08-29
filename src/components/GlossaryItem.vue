<template>
    <div class="font-body p-5 hover:bg-leaf25 transition duration-500 ease-in-out motion-reduce:transition-none" >
        <div class="font-bold text-forest" data-aos="fade" data-aos-delay="50">
            {{term}}
        </div>
        <div class="" data-aos="fade" data-aos-delay="50">
            {{def}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'GlossaryItem',
  props: {
    term: String,
    def: String
  }
}
</script>