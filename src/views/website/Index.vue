<template>
  <LayoutWebsite>
    <div class="h-screen w-full bg-white place-content-center">
      <img src="@/assets/logo-smartnet.svg" class="mx-auto" alt="" />
      <p class="text-black font-semibold text-xl font-sans text-center mt-6">
        Hi !😉🫶🥳 <br />
        WEBSITE IS COMING SOON
      </p>
    </div>
  </LayoutWebsite>
</template>

<script>
import LayoutWebsite from "@/layouts/LayoutWebsite.vue";

import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useHead } from "@vueuse/head";
import {
  faWhatsapp,
  faInstagram,
  faYoutube,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(faWhatsapp, faInstagram, faYoutube, faLinkedin, faFacebook);

// import { getDatabase, ref as dbRef, get, query } from "firebase/database";

export default {
  name: "IndexWebsite",
  components: {
    LayoutWebsite,
    // FontAwesomeIcon,
  },
  setup() {
    useHead({
      title: "Home | SMARTNET",
    });
    onMounted(() => {
      initFlowbite();
      // getData();
    });

    // const db = getDatabase();
    // const queryBySlug = query(dbRef(db, "links"));

    // const links = ref();

    // function getData() {
    //   get(queryBySlug)
    //     .then((snapshot) => {
    //       if (snapshot.exists()) {
    //         links.value = snapshot.val();
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    // return { links };
  },
};
</script>

<style>
</style>