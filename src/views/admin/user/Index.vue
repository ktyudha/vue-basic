<template>
  <LayoutAdmin>
    <div class="w-full bg-gray-50 py-6 rounded-lg justify-between md:flex">
      <h1 class="text-4xl font-medium text-[#073545] px-10">Profile</h1>
      <div class="right-0 px-10 mt-3">
        <BreadCrumbComp :dataBreadCrumb="breadcrumbData" />
      </div>
    </div>

    <div class="mt-10 pb-10 bg-gray-50 rounded-lg">
      <div class="bg-[#47A101] rounded-t-lg">
        <!-- <img
          src="@/assets/logo-ent.svg"
          alt=""
          class="p-10 place-content-center mx-auto"
        /> -->
        <h1 class="text-center p-10 text-white font-semibold text-2xl">
          SMARTNET
          <p class="text-xs font-light mt-2">Lora Multihop Smart Agriculture</p>
        </h1>
      </div>
      <div class="mt-[-5.5%] ml-10">
        <img
          :src="user.photoURL"
          alt=""
          class="rounded-full border-4 border-white"
        />
        <h1 class="font-semibold text-xl mt-3">
          {{ user.displayName }}
          <font-awesome-icon
            v-if="user.emailVerified == true"
            icon="fa-solid fa-circle-check"
            class="text-blue-600"
          />
        </h1>
        <p class="font-light text-md">{{ user.email }}</p>
      </div>
    </div>
  </LayoutAdmin>
</template>

<script>
import { onMounted, reactive } from "vue";
import { initFlowbite } from "flowbite";
import { useHead } from "@vueuse/head";
import BreadCrumbComp from "@/components/admin/BreadCrumbAdmin.vue";
import LayoutAdmin from "@/layouts/LayoutAdmin.vue";

import { getAuth } from "firebase/auth";
import moment from "moment";

export default {
  name: "MainViewShortLink",
  components: {
    BreadCrumbComp,
    LayoutAdmin,
  },
  methods: {
    dateTime(value) {
      return moment(value).format("dddd, MMMM Do YYYY | HH:mm:ss");
    },
  },
  setup() {
    useHead({
      title: "Profile | SMARTNET",
    });
    const auth = getAuth();
    const user = auth.currentUser;

    const breadcrumbData = reactive([
      { url: "/dashboard/profile", name: "Profile" },
      {
        url: "/dashboard/profile",
        name: auth.currentUser ? auth.currentUser.displayName : "Guest", // Initialize with an empty string
      },
    ]);

    onMounted(() => {
      initFlowbite();
    });

    return {
      breadcrumbData,
      user,
    };
  },
};
</script>

<style>
</style>