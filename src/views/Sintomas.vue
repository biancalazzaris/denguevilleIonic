<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="bg-header">
          <div>
            <h1>
              <a href="/tabs/sintomas">Sintomas</a>
            </h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="bg-header" size="large">Sintomas</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h3>O QUE É A DENGUE ?</h3>
        <img src="assets/images/mosquito.svg" />
        <h4>
          <b>
            &nbsp; Dengue é uma doença causada por um vírus transmitidos por
            picadas de insetos, como os mosquitos. <br />
            &nbsp; São 4 tipos de vírus da dengue (sorotipos 1,2,3 e 4). <br />
            &nbsp; Nós podemos ter os 4 sorotipos da doença, mas a infecção por
            um sorotipo gera imunidade permanente para ele.<br />
            &nbsp; Quem transmite a dengue é o mosquito Aedes aegypti, que
            precisa de água parada para se proliferar. <br />
            &nbsp; O período com maior transmissão são os meses mais chuvosos de
            cada região. <br />
            &nbsp; Os ovos do mosquito podem sobreviver por um ano até encontrar
            as melhores condições para se desenvolver. <br />
            &nbsp; Todos nós somos suscetíveis, porém os mais velhos têm mais
            risco de ter dengue grave e outras complicações que podem levar à
            morte. <br />
          </b>
        </h4>
        <h1>SINTOMAS</h1>
        <h2>
          <img src="assets/images/sintomas.png" />
        </h2>
        <h1>CUIDADOS</h1>
        <img src="assets/images/dengue-cuidados.jpg" />
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
} from "@ionic/vue";

export default {
  name: "Sintomas",
  components: {
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
#container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#container h1 {
  font-size: 50px;
}
.button {
  --background: #1aae9f;
}
</style>
