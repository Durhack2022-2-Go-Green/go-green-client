import "./Share.css";
import Person from "../../assets/person/1.jpeg";
import ImageIcon from "../../assets/icons/image-icon.svg";
import TagIcon from "../../assets/icons/tag-icon.svg";
import MapIcon from "../../assets/icons/map-icon.svg";
import SmileIcon from "../../assets/icons/smile-icon.svg";

export default function Share() {
  const submitHandler = /*async*/ (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const user = {
    username: "John Doe",
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={Person} alt="" />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            // ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {/* {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )} */}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <img src={ImageIcon} className="shareIcon" alt="" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => console.log(e)}
              />
            </label>
            <div className="shareOption">
              <img src={TagIcon} className="shareIcon" alt="" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <img src={MapIcon} className="shareIcon" alt="" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <img src={SmileIcon} className="shareIcon" alt="" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
