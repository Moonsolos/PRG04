import { ImageSource, Sound, Resource, Loader } from "excalibur";
import fishImage from "/src/images/fish.png";
import fishImage2 from "/src/images/fish2.png";
import fishImage3 from "/src/images/fish3.png";
import backGroundSprite from "../images/backGroundImage.png";
import button from "../images/menuButton.png";
import Logo from "../images/Logo.png";
import StartButton from "../images/StartButton.png"
import Background2 from "../images/Background2.png"




const Resources = {
    Fish: new ImageSource(fishImage),
    Fish2: new ImageSource(fishImage2),
    Fish3: new ImageSource(fishImage3),
    Background: new ImageSource(backGroundSprite),
    retryButton: new ImageSource(button),
    Logo: new ImageSource(Logo),
    StartButton: new ImageSource(StartButton),
    Background2: new ImageSource(Background2),

};
const ResourceLoader = new Loader([ Resources.Fish, Resources.Fish2, Resources.Fish3, Resources.Background, Resources.retryButton, Resources.Logo, Resources.StartButton, Resources.Background2]);

export { Resources, ResourceLoader };
