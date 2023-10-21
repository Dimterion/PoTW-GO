import { useState } from "react";
import { Link } from "react-router-dom";
import CreditsScreenSlider from "../../components/Sliders/CreditsScreenSlider/CreditsScreenSlider";
import prologueImage from "../../assets/images/prologue_image.jpg";
// import arikaPortrait from "../../assets/images/arika_portrait.jpg";
// import characterImage from "../../assets/images/character_image.jpg";
// import evenPortrait from "../../assets/images/even_portrait.jpg";
// import prologueSubImage01 from "../../assets/images/prologue_subImage_01.jpg";
// import prologueSubImage02 from "../../assets/images/prologue_subImage_02.jpg";
// import prologueSubImage03 from "../../assets/images/prologue_subImage_03.jpg";
import levelOneImage01 from "../../assets/images/levelOne_image_01.jpg";
import levelOneImage02 from "../../assets/images/levelOne_image_02.jpg";
//import unaPortrait from "../../assets/images/una_portrait.jpg";
import unaApartment from "../../assets/images/una_apartment.jpg";
import deoApartment from "../../assets/images/deo_apartment.jpg";
import deoVirtualApartment from "../../assets/images/deo_virtual_apartment.jpg";
// import sanePortrait from "../../assets/images/sane_portrait.jpg";
// import saneRealPortrait from "../../assets/images/sane_real_portrait.jpg";
import bridgeInnerStructure from "../../assets/images/bridge_inner_structure.jpg";
import floppyDisk from "../../assets/images/floppy_disk.jpg";
import shrikeMainEntrance from "../../assets/images/shrike_main_entrance.jpg";
import shrikeLockers from "../../assets/images/shrike_lockers.jpg";
//import evrenPortrait from "../../assets/images/evren_portrait.jpg";
import orangePortal from "../../assets/images/orange_portal.jpg";
import shrikeLoophole from "../../assets/images/shrike_loophole.jpg";
import nnifVirtualApartment from "../../assets/images/nnif_virtual_apartment.jpg";
import nnifApartment from "../../assets/images/nnif_apartment.jpg";
// import nnifPortrait from "../../assets/images/nnif_portrait.jpg";
// import nnifRealPortrait from "../../assets/images/nnif_real_portrait.jpg";
// import nnifPreviousPortrait from "../../assets/images/nnif_previous_portrait.jpg";
import portalsRoom from "../../assets/images/portals_room.jpg";
import "./creditsScreen.css";

const creditsScreenSlides = [
  { url: prologueImage, alt: "Toxic clouds above the surface." },
  { url: levelOneImage01, alt: "Old rusty corridor." },
  { url: levelOneImage02, alt: "Yellow-green futuristic corridor." },
  { url: unaApartment, alt: "A living room with a window, couch and closet." },
  { url: deoApartment, alt: "Tiny futuristic apartment." },
  { url: deoVirtualApartment, alt: "Virtual futuristic apartment." },
  { url: bridgeInnerStructure, alt: "Yellow-green virtual structure." },
  { url: floppyDisk, alt: "A red floppy disk." },
  { url: shrikeMainEntrance, alt: "Virtual futuristic arena." },
  { url: shrikeLockers, alt: "Virtual futuristic arena lockers area." },
  { url: orangePortal, alt: "Glowing orange portal." },
  { url: shrikeLoophole, alt: "Virtual structure with orange portals." },
  { url: nnifVirtualApartment, alt: "Virtual futuristic apartment." },
  { url: nnifApartment, alt: "Tiny futuristic apartment." },
  { url: portalsRoom, alt: "Glowing orange portal." },
];

function CreditsScreen() {
  const [openList, setOpenList] = useState(false);

  return (
    <section className="creditsScreen-container">
      <CreditsScreenSlider images={creditsScreenSlides} />
      <h1 className="creditsScreen-title">Thank you for playing</h1>
      <button
        className="creditsScreen-btn"
        onClick={() => setOpenList(!openList)}
      >
        {!openList ? "CHARACTERS" : "CLOSE"}
      </button>
      {openList && <article>Characters list.</article>}
      <Link className="creditsScreen-startScreenLink" to="/">
        START SCREEN
      </Link>
    </section>
  );
}

export default CreditsScreen;
