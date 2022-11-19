import Topbar from "../../components/topbar/Topbar.jsx";
import Share from "../../components/share/Share.jsx";
/* import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"; */
import "./Home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Share />
      </div>
    </>
  );
}
