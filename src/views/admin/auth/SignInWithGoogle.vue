<template>
  <div>
    <div class="max-w-screen-xl mx-auto text-center">
      <div class="h-screen flex items-center justify-center">
        <button
          @click="signInWithGoogle"
          class="bg-white py-1.5 px-2 text-yellow-700 rounded-full"
        >
          <span class="text-sm-start mx-3 text-yellow-700 hover:font-semibold">
            <font-awesome-icon icon="fa-brands fa-google" class="mr-2" /> Sign
            In With Google</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
// import { reactive } from "vue";
import { useHead } from "@vueuse/head";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";

// import { useRouter } from "vue-router";
export default {
  name: "SignInPage",
  setup() {
    useHead({
      title: "Sign In | ENT CREWS",
    });
    // const router = useRouter();
    // let auth = getAuth();

    // if (auth.currentUser != null) {
    //   router.push("/dashboard");
    // }

    // const registerUser = reactive({
    //   email: "",
    //   password: "",
    // });

    // function signInEmailPassword() {
    //   signInWithEmailAndPassword(
    //     auth,
    //     registerUser.email,
    //     registerUser.password
    //   )
    //     .then((data) => {
    //       console.log("Successfully registered" + data);
    //       router.push("/");
    //     })
    //     .catch((error) => {
    //       console.log(error.code);
    //       alert(error.message);
    //     });
    // }

    // const signInWithGoogle = () => {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(getAuth(), provider)
    //     .then(() => {
    //       router.push("/dashboard");
    //     })
    //     .catch((error) => {
    //       console.log(error.code);
    //     });
    // };
    // return { registerUser, signInWithGoogle, signInEmailPassword };
  },
};
</script>
  
  <style>
#app .tosca {
  /* color: #6acacd; */
  background-color: #6acacd;
}
</style>