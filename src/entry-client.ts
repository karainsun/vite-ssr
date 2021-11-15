import { createApp } from "./main"; 

const { app, router, store } = createApp();

router.isReady().then(() => {
  app.mount("#app");
}); 
