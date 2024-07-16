import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import { createHead } from "@vueuse/head";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBook,
  faCheckCircle,
  faChevronDown,
  faEye,
  faMoneyBill,
  faPen,
  faPlus,
  faPowerOff,
  faTrash,
  faUser,
  faGear,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBook,
  faChevronDown,
  faMoneyBill,
  faPowerOff,
  faPen,
  faEye,
  faTrash,
  faPlus,
  faUser,
  faCheckCircle,
  faGear,
  faCopy
);

const app = createApp(App);
const head = createHead();

app.component("font-awesome-icon");
app.use(router);
app.use(head);

app.mount("#app");
