"use strict";

Vue.createApp({
  data() {
    return {
      users: [
        {
          username: "Giuliano",
          status: "online",
          lastActivity: 10,
        },
        {
          username: "Paulina",
          status: "offline",
          lastActivity: 22,
        },
        {
          username: "Blanca",
          status: "online",
          lastActivity: 104,
        },
        {
          username: "Marijana",
          status: "online",
          lastActivity: 5,
        },
      ],
    };
  },
  methods: {
    recentActivity(user) {
      return user.status === "online" && user.lastActivity <= 10;
    },
    getStatus(user) {
      let color = "";

      if (user.status === "online" && this.recentActivity(user)) {
        color = "green";
      } else if (user.status === "offline") {
        color = "grey";
      } else if (user.status === "online" && !this.recentActivity(user)) {
        color = "red";
      }

      return { color };
    },
  },
}).mount("#app");
