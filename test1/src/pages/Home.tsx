import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import css from "./Home.module.css";
import Accordian from "../components/charAccordian/CharAccordian";
import nimiah from "../../public/NimiahHead.png";
import aesya from "../../public/aesya.png";
import tav from "../../public/tav.png";
import ehdros from "../../public/ehdros.png";
import maeve from "../../public/maeve.png";
import emrys from "../../public/emrys.png";
import andor from "../../public/andor.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My BG3 Characters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Accordian
          data={[
            {
              img: aesya,
              name: "Aesya",
              race: "Half-Elf",
              class: "Ranger/Bard",
              level: 12,
              bio: "some stuff here",
            },
            {
              img: nimiah,
              name: "Nimiah",
              race: "Tiefling",
              class: "Monk",
              level: 12,
              bio: "some stuff here",
            },
            {
              img: tav,
              name: "Tav",
              race: "Tiefling",
              class: "Ranger",
              level: 8,
              bio: "some stuff here",
            },
            {
              img: emrys,
              name: "Emrys",
              race: "Tiefling",
              class: "Barbarian/Fighter",
              level: 7,
              bio: "some stuff here",
            },
            {
              img: maeve,
              name: "Maeve",
              race: "Githyanki",
              class: "Monk",
              level: 5,
              bio: "some stuff here",
            },
            {
              img: andor,
              name: "Andor",
              race: "Half-Elf",
              class: "Paladin",
              level: 4,
              bio: "some stuff here",
            },
            {
              img: ehdros,
              name: "Ehdros",
              race: "Dragonborn",
              class: "Fighter",
              level: 1,
              bio: "some stuff here",
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
