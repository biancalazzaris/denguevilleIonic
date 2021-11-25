<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="bg-header">
          <div>
            <h1>
              <a href="/">Home</a>
            </h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="bg-header" size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1>
          DENGUE <br />
          &nbsp; &nbsp; &nbsp; AQUI NÃO
        </h1>
        <img src="assets/images/mosquito.svg" />
        <p>
          Denuncie pontos de foco do mosquito na sua comunidade e <br />
          acompanhe os números da doença na cidade.
        </p>
        <ion-button href="/tabs/tab2" class="button" shape="round">
          <ion-icon :icon="chevronForward" />
        </ion-button>
      </div>
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
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { chevronForward } from "ionicons/icons";

export default {
  name: "Home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
  },
  setup() {
    return {
      chevronForward,
    };
  },
};
</script>

<style scoped>
.bg-header {
  background-color: #1aae9f;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}
#container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}
#container h1 {
  font-size: 50px;
}
#container p {
  font-size: 30px;
  text-align: center;
}
.button {
  --background: #1aae9f;
}
</style>
