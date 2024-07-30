import PhotoPage from "../components/PhotoPage";
import TextPage from "../components/TextPage";
import photo01 from "../assets/20220614_161329_mfnr.jpg";
import photo02 from "../assets/20220618_153423.jpg";
import photo03 from "../assets/20220731_005933.jpg";
import photo04 from "../assets/20220827_175320.jpg";
import photo05 from "../assets/20230728_151235.jpg";
import photo06 from "../assets/20231011_231436.jpg";
import photo07 from "../assets/20231103_145739.jpg";
import photo08 from "../assets/IMG-20220617-WA0033.jpg";
import photo09 from "../assets/IMG-20220617-WA0034.jpg";
import photo10 from "../assets/IMG-20230603-WA0003.jpg";
import photo11 from "../assets/IMG-20231012-WA0000.jpg";
import photo12 from "../assets/IMG-20231021-WA0017.jpg";
import photo13 from "../assets/IMG-20231031-WA0009.jpg";
import photo14 from "../assets/IMG-20231031-WA0047.jpg";
import photo15 from "../assets/IMG-20231101-WA0004.jpg";
import photo16 from "../assets/IMG-20231216-WA0005.jpg";
import photo17 from "../assets/IMG-20231224-WA0070.jpg";
import photo18 from "../assets/IMG-20240120-WA0004.jpg";
import photo19 from "../assets/IMG-20240211-WA0016.jpg";
import photo20 from "../assets/IMG-20240327-WA0041.jpg";
import photo21 from "../assets/IMG-20240328-WA0001.jpg";
import photo22 from "../assets/IMG-20240328-WA0006.jpg";
import photo23 from "../assets/IMG-20240328-WA0007.jpg";
import photo24 from "../assets/IMG-20240328-WA0028.jpg";
import photo25 from "../assets/IMG-20240721-WA0008.jpg";
import photo26 from "../assets/IMG-20240729-WA0016.jpg";
import photo27 from "../assets/IMG_4650.jpg";
import photo28 from "../assets/IMG_20220828_100904_947.jpg";
import photo29 from "../assets/IMG_20220828_100911_604.jpg";
import photo30 from "../assets/IMG_20220828_100917_330.jpg";
import photo31 from "../assets/IMG_20220828_100930_419.jpg";
import photo32 from "../assets/IMG_20220828_100939_081.jpg";
import photo33 from "../assets/IMG_20231207_135638.jpg";

export const albumPages = [
  // Everybody
  { id: 1, content: <PhotoPage layout="five" images={[photo26]} /> },
  // Recepção dos calouros
  {
    id: 4,
    content: <PhotoPage layout="four" images={[photo01, photo08]} />,
  },
  {
    id: 3,
    content: <PhotoPage layout="three" images={[photo09, photo27]} />,
  },
  // Posudos
  {
    id: 3,
    content: <PhotoPage layout="four" images={[photo11, photo02]} />,
  },
  // Passeio no Mario Quintana
  {
    id: 2,
    content: <PhotoPage layout="three" images={[photo28, photo30]} />,
  },
  {
    id: 2,
    content: <PhotoPage layout="two" images={[photo29, photo31]} />,
  },
  {
    id: 3,
    content: <PhotoPage layout="five" images={[photo32, photo04]} />,
  },
  // Sessão Helo
  { id: 1, content: <PhotoPage layout="one" images={[photo13]} /> },
  {
    id: 2,
    content: <PhotoPage layout="two" images={[photo05, photo07]} />,
  },
  {
    id: 2,
    content: <PhotoPage layout="three" images={[photo16, photo18]} />,
  },
  // Formatura da May
  {
    id: 2,
    content: <PhotoPage layout="three" images={[photo14, photo15]} />,
  },
  // Formatura da Vic
  {
    id: 2,
    content: <PhotoPage layout="two" images={[photo20, photo23]} />,
  },
  { id: 1, content: <PhotoPage layout="five" images={[photo22]} /> },
  {
    id: 2,
    content: <PhotoPage layout="three" images={[photo21, photo24]} />,
  },
  // ???
  {
    id: 3,
    content: <PhotoPage layout="four" images={[photo03, photo33]} />,
  },
  {
    id: 2,
    content: <PhotoPage layout="two" images={[photo25, photo10]} />,
  },
  {
    id: 3,
    content: <PhotoPage layout="four" images={[photo06, photo12]} />,
  },
  { id: 1, content: <PhotoPage layout="five" images={[photo17]} /> },
  {
    id: 5,
    content: <TextPage />,
  },
];
