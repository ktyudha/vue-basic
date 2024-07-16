<template>
  <div class="bg-[#134675] pb-4">
    <slot />
    <!-- <FooterWebsite /> -->
  </div>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// import FooterWebsite from "@/components/website/FooterWebsite.vue";

export default {
  name: "LayoutWebsite",
  components: {
    // FooterWebsite,
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>

<style>
/* body {
  background-color: #134675;
} */
</style>