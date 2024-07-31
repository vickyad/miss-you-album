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
import photo34 from "../assets/20220713_181403.jpg";
import photo35 from "../assets/20221006_103302.jpg";
import photo36 from "../assets/20221006_103322.jpg";
import photo37 from "../assets/20221124_121759.jpg";
import photo38 from "../assets/IMG_20221118_170824_547.jpg";
import photo39 from "../assets/IMG-20220709-WA0019.jpg";
import photo40 from "../assets/IMG-20220805-WA0037.jpg";
import photo41 from "../assets/IMG-20220821-WA0000.jpg";
import photo42 from "../assets/IMG-20220821-WA0002.jpg";
import photo43 from "../assets/IMG-20221120-WA0077.jpg";
import photo44 from "../assets/IMG-20221124-WA0057.jpg";
import photo45 from "../assets/IMG-20221124-WA0063.jpg";
import photo46 from "../assets/IMG-20230114-WA0008.jpg";
import photo47 from "../assets/IMG-20230125-WA0009.jpg";
import photo48 from "../assets/IMG-20230515-WA0027.jpg";
import photo49 from "../assets/IMG-20230623-WA0010.jpg";
import photo50 from "../assets/IMG-20231011-WA0014.jpg";
import photo51 from "../assets/IMG-20240217-WA0000.jpg";

export const albumPages = [
  {
    id: 1,
    content: <TextPage cover text="Para nossos futuros franceses" />,
  },
  // Everybody
  { id: 2, content: <PhotoPage layout="five" images={[photo26]} /> },
  // Recepção dos calouros
  {
    id: 3,
    content: <PhotoPage layout="four" images={[photo01, photo08]} />,
  },
  {
    id: 4,
    content: <PhotoPage layout="three" images={[photo09, photo27]} />,
  },
  // Posudos
  {
    id: 5,
    content: <PhotoPage layout="four" images={[photo11, photo02]} />,
  },
  // Passeio no Mario Quintana
  {
    id: 6,
    content: <PhotoPage layout="three" images={[photo28, photo30]} />,
  },
  {
    id: 7,
    content: <PhotoPage layout="two" images={[photo29, photo31]} />,
  },
  {
    id: 8,
    content: <PhotoPage layout="five" images={[photo32, photo04]} />,
  },
  // Sessão Helo
  { id: 9, content: <PhotoPage layout="one" images={[photo13]} /> },
  {
    id: 10,
    content: <PhotoPage layout="two" images={[photo05, photo07]} />,
  },
  {
    id: 11,
    content: <PhotoPage layout="three" images={[photo16, photo18]} />,
  },
  // Sessão Pedro
  {
    id: 12,
    content: <PhotoPage layout="two" images={[photo25, photo37]} />,
  },
  {
    id: 13,
    content: <PhotoPage layout="three" images={[photo39, photo48]} />,
  },
  // Formatura da May
  {
    id: 14,
    content: <PhotoPage layout="three" images={[photo14, photo15]} />,
  },
  // Formatura da Vic
  {
    id: 15,
    content: <PhotoPage layout="two" images={[photo20, photo23]} />,
  },
  { id: 16, content: <PhotoPage layout="five" images={[photo22]} /> },
  {
    id: 17,
    content: <PhotoPage layout="three" images={[photo21, photo24]} />,
  },
  // ???
  {
    id: 18,
    content: <PhotoPage layout="four" images={[photo03, photo33]} />,
  },
  {
    id: 19,
    content: <PhotoPage layout="two" images={[photo19, photo10]} />,
  },
  {
    id: 20,
    content: <PhotoPage layout="four" images={[photo06, photo12]} />,
  },
  {
    id: 21,
    content: <PhotoPage layout="three" images={[photo34, photo50]} />,
  },
  {
    id: 22,
    content: <PhotoPage layout="four" images={[photo51, photo49]} />,
  },
  {
    id: 23,
    content: <PhotoPage layout="two" images={[photo38, photo35]} />,
  },
  {
    id: 24,
    content: <PhotoPage layout="four" images={[photo36, photo46]} />,
  },
  {
    id: 25,
    content: <PhotoPage layout="three" images={[photo41, photo42]} />,
  },
  {
    id: 26,
    content: <PhotoPage layout="four" images={[photo47, photo40]} />,
  },
  {
    id: 27,
    content: <PhotoPage layout="three" images={[photo44, photo45]} />,
  },
  { id: 28, content: <PhotoPage layout="five" images={[photo17]} /> },
  {
    id: 29,
    content: <TextPage cover />,
  },
];
