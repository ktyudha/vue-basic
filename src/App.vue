<template>
  <router-view></router-view>
</template>

<script>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
export default {
  name: "App",
  components: {},
  setup() {
    const siteData = reactive({
      title: "Dashboard | SMARTNET",
      description: "Official SMARTNET",
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: "description",
          content: computed(() => siteData.description),
        },
      ],
    });
  },
};
</script>
