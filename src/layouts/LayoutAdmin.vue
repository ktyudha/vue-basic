<template>
  <div>
    <NavbarAdmin />

    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg dark:border-gray-700 my-14">
        <slot />
      </div>
      <!-- <FooterAdmin /> -->
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
// import FooterAdmin from "@/components/admin/FooterAdmin.vue";

export default {
  name: "LayoutAdmin",
  components: {
    NavbarAdmin,
    // FooterAdmin,
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