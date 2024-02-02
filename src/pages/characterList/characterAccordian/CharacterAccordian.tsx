import {
  IonAccordion,
  IonAccordionGroup,
  IonImg,
  IonItem,
  IonLabel,
  IonModal,
} from "@ionic/react";
import css from "./CharacterAccordian.module.css";
import TextLink from "../../../components/textLink/TextLink";
import { CharacterListData } from "../../../models/character";
interface AccordianProps {
  data: Array<CharacterListData>;
  onClick: (img: string) => void;
}

const CharAccordian: React.FC<AccordianProps> = (props: AccordianProps) => {
  return (
    <IonAccordionGroup className={css.page}>
      {props.data.map((char, index) => {
        return (
          <IonAccordion key={index}>
            <IonItem slot="header" color="light">
              <img
                className={css.img}
                src={char.img}
                onClick={() => props.onClick(char.img)}
              />

              <div>
                <IonLabel>{char.name}</IonLabel>
                <IonLabel>{char.race + " " + char.class}</IonLabel>
              </div>
              <IonLabel>
                <div className={css.level}>{"Lv. " + char.level}</div>
              </IonLabel>
            </IonItem>
            <div slot="content" className={css.bio}>
              {char.background}
              <TextLink
                className={css.button}
                label="View Playthrough Details"
                href={`/playthrough/${char.name}`}
              />
            </div>
          </IonAccordion>
        );
      })}
    </IonAccordionGroup>
  );
};

export default CharAccordian;
