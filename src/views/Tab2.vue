<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="bg-header">
          <div>
            <h1>
              <a href="/tabs/tab2">Tab 2</a>
            </h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
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
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

export default {
  name: "Tab2",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
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
</style>
