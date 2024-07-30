import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

interface IIcon {
  type: "arrow-left" | "arrow-right";
}

const Icon = ({ type }: IIcon) => {
  const getIcon = () => {
    switch (type) {
      case "arrow-left":
        return <ArrowLeft />;
      case "arrow-right":
        return <ArrowRight />;
      default:
        return <></>;
    }
  };
  return <>{getIcon()}</>;
};
export default Icon;
