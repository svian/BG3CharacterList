import {
  IonAccordion,
  IonAccordionGroup,
  IonImg,
  IonItem,
  IonLabel,
  IonModal,
} from "@ionic/react";
import css from "./CharAccordian.module.css";
import { useState } from "react";

interface CharData {
  img: string;
  name: string;
  race: string;
  class: string;
  level: number;
  bio: string;
}

interface CharAccordianProps {
  data: Array<CharData>;
}

const CharAccordian: React.FC<CharAccordianProps> = (
  props: CharAccordianProps
) => {
  const [largePhoto, setLargePhoto] = useState("");

  return (
    <IonAccordionGroup className={css.page}>
      {props.data.map((char, index) => {
        return (
          <IonAccordion key={index}>
            <IonItem slot="header" color="light">
              <IonImg
                className={css.img}
                onClick={() => setLargePhoto(char.img)}
                src={char.img}
              />
              <IonLabel>{char.name}</IonLabel>
              <IonLabel>{char.race + " " + char.class}</IonLabel>
              <IonLabel>{char.level}</IonLabel>
            </IonItem>
            <div slot="content" className={css.bio}>
              {char.bio}
            </div>
          </IonAccordion>
        );
      })}{" "}
      <IonModal
        isOpen={largePhoto !== ""}
        onDidDismiss={() => setLargePhoto("")}
      >
        <IonImg src={largePhoto} />
      </IonModal>
    </IonAccordionGroup>
  );
};

export default CharAccordian;
