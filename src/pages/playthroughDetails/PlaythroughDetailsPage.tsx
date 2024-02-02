import axios from "axios";
import { useState, useEffect } from "react";
import Page from "../../components/page/Page";
import { PlaythroughDetailsData } from "../../models/character";
import { IonLabel } from "@ionic/react";
import { useParams } from "react-router";
import css from "./PlaythroughDetailsPage.module.css";
import TextLink from "../../components/textLink/TextLink";
import Title from "../../components/title/Title";

interface PlaythroughDetailsPageProps {}

const PlaythroughDetailsPage: React.FC<PlaythroughDetailsPageProps> = (
  props: PlaythroughDetailsPageProps
) => {
  const [characterData, setCharacterData] = useState<PlaythroughDetailsData>();
  const { character } = useParams() as {
    character: string;
  };

  useEffect(() => {
    let temp = Array<PlaythroughDetailsData>();
    axios.get("/playthroughDetails.json").then((res) => {
      res.data.details.map((element: PlaythroughDetailsData) => {
        if (element.name === character) {
          setCharacterData(element);
        }
      });
    });
  }, []);

  return (
    <Page title="Playthrough Details">
      <div className={css.page}>
        <TextLink label="Return to characters" href={"/"} />
        <IonLabel>
          <Title label={"name"} allCaps={true} />
          {characterData?.name}
        </IonLabel>
        <IonLabel>
          <Title label={"current arc"} allCaps={true} />
          {characterData?.progress}
        </IonLabel>
        <IonLabel>
          <Title label={"romanced"} allCaps={true} /> {characterData?.romanced}
        </IonLabel>
        <IonLabel>
          <Title label={"companion quests"} allCaps={true} />
        </IonLabel>

        {characterData?.companions.map((companion) => {
          return (
            <>
              <IonLabel className={css.companions}>
                <Title
                  label={companion.name}
                  allCaps={true}
                  className={css.titleText}
                />
                <span className={css.summaryText}>{companion.summary}</span>
              </IonLabel>
            </>
          );
        })}

        <IonLabel>
          <Title label={"additional notes"} allCaps={true} />
          {characterData?.notes}
        </IonLabel>
      </div>
    </Page>
  );
};

export default PlaythroughDetailsPage;
