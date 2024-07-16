<template>
  <LayoutAdmin>
    <div class="h-screen">
      <div class="w-full bg-gray-50 py-6 rounded-lg justify-between md:flex">
        <h1 class="text-4xl font-medium text-[#073545] px-10">Dashboard</h1>
        <div class="right-0 px-10 mt-3">
          <BreadCrumbComp :dataBreadCrumb="breadcrumbData" />
        </div>
      </div>
    </div>
    <!-- <div class="hs-screen w-full bg-[#134675] place-content-center">
      <img src="@/assets/logo-ent.svg" class="mx-auto" alt="" />
      <p class="text-white font-semibold text-xl font-sans text-center mt-6">
        Hi !😉🫶🥳 <br />
        WEBSITE IS COMING SOON
      </p>
    </div> -->
  </LayoutAdmin>
</template>

<script>
import LayoutAdmin from "@/layouts/LayoutAdmin.vue";

import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

export default {
  name: "IndexAdmin",
  components: {
    LayoutAdmin,
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>

<style>
</style>