<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Maps</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Maps</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label>Latitude {{posicao.latitude}}</ion-label>
        <ion-label>Longitude {{posicao.longitude}} </ion-label>
        <ion-label>Altitude</ion-label>
      </ion-item>
      <div id="info"></div>
      <div id="divMap"></div>
      

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="getCurrentPosition()">
          <ion-icon :icon="locate"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { Geolocation } from "@capacitor/geolocation";
import { locate } from "ionicons/icons";
import { maps } from "@/composables/maps";

export default {
  name: "maps",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    const { printCurrentPosition, getCurrentPosition, posicao } = maps();
    return {
      locate,
      printCurrentPosition,
      getCurrentPosition,
      posicao,
    };
  },
};
</script>