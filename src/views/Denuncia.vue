<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Denuncia</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Denuncia</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label>Assunto</ion-label>
        <!-- <ion-input v-model="denuncia.assunto"></ion-input> -->
      </ion-item>

      <ion-item>
        <ion-label>Descrição</ion-label>
        <!-- <ion-input v-model="denuncia.descricao"></ion-input> -->
      </ion-item>

      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- <ion-fab> markup  -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-button shape="round" @click="enviar()">Enviar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  // IonInput,
  IonLabel,
  IonItem,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { camera, trash, close } from "ionicons/icons";
import { anexo, UserPhoto } from "@/composables/anexo";

export default defineComponent({
  name: "Denuncia",
  components: {
    IonPage,
    IonHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    // IonInput,
    IonLabel,
    IonItem,
    IonButton,
  },
  setup() {
    const { photos, takePhoto } = anexo();
    return {
      photos,
      takePhoto,
      camera,
      trash,
      close,
    };
  },
});
</script>
