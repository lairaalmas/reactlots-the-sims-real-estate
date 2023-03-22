import "../../../styles/css/Banner.min.css";

const Banner: React.FC<{ type: "os" | "wc" }> = (props) => {
  return <div className={`Banner -${props.type}`}></div>;
};

export default Banner;
