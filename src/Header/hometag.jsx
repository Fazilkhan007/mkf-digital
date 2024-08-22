import HomeIcon from "@mui/icons-material/Home";
import "./hometag.css";

export default function Home() {
  return (
    <>
      <div className="hometag">
        <div className="home">
          <HomeIcon />
          &nbsp; Home / &nbsp;
          <a className="hometag1" href="#">
            Digital Marketing Services
          </a>
        </div>
      </div>
    </>
  );
}
