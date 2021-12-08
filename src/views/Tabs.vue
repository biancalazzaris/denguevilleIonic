<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="sintomas" href="/tabs/Sintomas">
          <ion-icon :icon="body" />
          <ion-label>Sintomas e Cuidados</ion-label>
        </ion-tab-button>

         <ion-tab-button tab="Denuncia" href="/tabs/Denuncia">
          <ion-icon :icon="square" />
          <ion-label>Denuncia</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { ellipse, home, square, body } from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      ellipse,
      home,
      square,
      body,
    };
  },
};
</script>

<style scoped>
ion-tab-bar {
  background-color: #1aae9f;
}
ion-tab-button {
  background-color: #1aae9f;
  color: white;
}
</style>
