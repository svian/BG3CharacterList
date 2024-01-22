import axios from "axios";
import { useEffect, useState } from "react";
import CharacterAccordian from "./characterAccordian/CharacterAccordian";
import Page from "../../components/page/Page";
import { CharacterListData } from "../../models/character";
import { IonModal, IonImg } from "@ionic/react";

const CharacterListPage: React.FC = () => {
  const [characterData, setCharacterData] = useState<Array<CharacterListData>>(
    []
  );
  const [largePhoto, setLargePhoto] = useState("");

  useEffect(() => {
    axios.get("/characters.json").then((res) => {
      setCharacterData(res.data.characters);
    });
  });

  return (
    <Page title="My BG3 Characters">
      <CharacterAccordian
        data={characterData}
        onClick={(img) => setLargePhoto(img)}
      />
      <IonModal
        isOpen={largePhoto !== ""}
        onDidDismiss={() => setLargePhoto("")}
      >
        <IonImg src={largePhoto} />
      </IonModal>
    </Page>
  );
};

export default CharacterListPage;
