"use strict";

const app = Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      currentDateTime: new Date().toLocaleString("en-us"),
    };
  },
}).mount("#app");
