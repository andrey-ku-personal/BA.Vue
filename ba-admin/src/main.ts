import { createApp } from "vue";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";

import FormComponents from "@/components/form/index";

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-orange/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import App from "@/components/App.vue";

const app = createApp(App);

FormComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(PrimeVue);
app.component("p-input-text", InputText);
app.component("p-input-number", InputNumber);
app.component("p-dropdown", Dropdown);

app.mount("#app");
