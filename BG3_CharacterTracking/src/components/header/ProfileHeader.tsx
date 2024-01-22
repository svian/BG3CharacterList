import { IonHeader, IonImg } from "@ionic/react";
import "./ProfileHeader.css";
import nimiah from "../../../public/NimiahHead.png";

interface ContainerProps {}

const ProfileHeader: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <div id="bioGroup">
        <IonImg id="profileImg" src={nimiah}></IonImg>
        <div>
          <div id="headerText">Nimiah</div>
          <div id="subheaderText">
            <span>Tiefling Monk</span>
            <span>Lv. 12</span>
          </div>
        </div>
      </div>
    </IonHeader>
  );
};

export default ProfileHeader;
