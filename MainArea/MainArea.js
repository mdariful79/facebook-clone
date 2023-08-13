import React from "react";
import "./MainArea.css";
import {
  FaFontAwesomeFlag,
  FaFacebookMessenger,
  FaAngleDown,
  FaUserFriends,
  FaSearch,
  FaGrin,
  FaRegThumbsUp,
  FaCommentAlt,
  FaRegShareSquare,
  FaStore,
  FaNewspaper,
} from "react-icons/fa";
import { MdVideoCall, MdMoreHoriz } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

function MainArea() {
  return (
    <div className="Main">
      <div className="Rside">
        <div className="Profile">
          <img
            src="/images/dp.jpg"
            alt="dp"
            style={{ height: "60px", padding: "1rem" }}
          />
          মোঃ আরিফুল ইসলাম
        </div>
        <div className="Pro">
          <FaUserFriends color="blue" fontSize="2rem" />
          <div>Friends</div>
        </div>
        <div className="Pro">
          <FaFontAwesomeFlag color="green" fontSize="2rem" />
          <div>Pages</div>
        </div>
        <div className="Pro">
          <FaStore color="blue" fontSize="2rem" />
          <div>Market Place</div>
        </div>
        <div className="Pro">
          <FaNewspaper color="magenta" fontSize="2rem" />
          <div>Memories</div>
        </div>
        <div className="Pro">
          <FaFacebookMessenger color="green" fontSize="2rem" />
          <div>Messenger Kids</div>
        </div>

        <div className="Pro">
          <FaAngleDown color="black" fontSize="2rem" />
          <div>See More</div>
        </div>
        <br></br>
        <div><b>Groups you've joined</b></div>
        <div className="Profiles">
          <img
            src="/images/react_js.png"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          React.js Developers
        </div>
        <div className="Profiles">
          <img
            src="/images/2.jpeg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          MEAN/MERN Stack Developers.
        </div>
        <div className="Profiles">
          <img
            src="/images/3.jpeg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
          JavaScript
        </div>
        <div className="Profiles">
          <img
            src="/images/cover2.jpg"
            alt="logo"
            style={{ height: "35px", padding: "1rem" }}
          />
         48BM🖤 Bhai-Brothers
        </div>
        <div className="Pross">
          <FaAngleDown color="black" fontSize="2rem" />
          <div>See More</div>
        </div>
      </div>

      <div className="MainArea">
        <div className="addStory">
          <div className="Story">
            <img
              src="/images/story1.jpg"
              alt="IMG"
              style={{ height: "60px", width: "50px", borderRadius: "60%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            মোঃ আরিফুল ইসলাম
          </div>
          <div className="Story">
            <img
              src="/images/story3.jpg"
              alt="IMG"
              style={{ height: "60px", width: "50px", borderRadius: "60%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Arif Haider
          </div>
          <div className="Story">
            <img
              src="/images/story2.jpg"
              alt="IMG"
              style={{ height: "60px", width: "50px", borderRadius: "60%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Istiaq Ahmed
          </div>
          <div className="Story">
            <img
              src="/images/story4.jpg"
              alt="IMG"
              style={{ height: "60px", width: "50px", borderRadius: "60%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Mohammad Akiful Islam
          </div>
          <div className="Story">
            <img
              src="/images/story4.jpg"
              alt="IMG"
              style={{ height: "60px", width: "50px", borderRadius: "60%" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Mohammad Akiful Islam
          </div>
        </div>
        <div className="message">
          <div className="text">
            <div className="Post">
              <img src="/images/dp.jpg" alt="PIC" />
              <input
                type="Mind"
                placeholder="What's on your mind, মোঃ আরিফুল?"
              />
            </div>
            <div className="Call">
              <div className="ico">
                <div className="icone">
                  <MdVideoCall fontSize="2rem" color="red" />
                  <div>Live Video</div>
                </div>
                <div className="icone">
                  <AiFillFileImage fontSize="2rem" color="green" />
                  <div>Photo/Video</div>
                </div>
                <div className="icone">
                  <FaGrin fontSize="2rem" color="orange" />
                  <div>Felling/activity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Posted">
            <div className="poster">
              <div className="postere">
                <img
                  src="/images/story3.jpg"
                  alt="Img"
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                />
                Arif Haider
                <div className="update"> updated his cover photo.</div>
              </div>
              <div className="edit">
                <MdMoreHoriz fontSize="1.5rem" />
              </div>
            </div>
            <div className="caption">
              খেতের পরে খেত চলেছে, খেতের নাহি শেষ সবুজ হাওয়ায় দুলছে ও কার এলো
              মাথার কেশ। সেই কেশেতে গয়না পরায় প্রজাপতির ঝাঁক, চঞ্চুতে জল ছিটায়
              সেথা কাল কাল কাক।
            </div>
            <br></br>
            <div className="FacebookImg">
              <img
                src="/images/cover.jpg"
                alt="dp"
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <div className="Comment">
              <div className="Like">
                <FaRegThumbsUp color="grey" />
                Like
              </div>
              <div className="Like">
                <FaCommentAlt color="grey" />
                Comment
              </div>
              <div className="Like">
                <FaRegShareSquare color="grey" />
                Share
              </div>
            </div>
          
          <div className="poster">
            <div className="postere">
              <img
                src="/images/dp.jpg"
                alt="Img"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
              মোঃ আরিফুল ইসলাম
              <div className="update"> updated his cover photo.</div>
            </div>
            <div className="edit">
              <MdMoreHoriz fontSize="1.5rem" />
            </div>
          </div>
          <div className="caption">
            Beginning is the end, End is the beginning 💥 Unofficially signing
            off CSE-48BM🖤
          </div>
          <br></br>
          <div className="FacebookImg">
            <img
              src="/images/cover2.jpg"
              alt="dp"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className="Comment">
            <div className="Like">
              <FaRegThumbsUp color="grey" />
              Like
            </div>
            <div className="Like">
              <FaCommentAlt color="grey" />
              Comment
            </div>
            <div className="Like">
              <FaRegShareSquare color="grey" />
              Share
            </div>
          </div>
        </div>
      </div>
     </div>  

      <div className="Lside">
        <div className="Contact">
          <div className="Contacts">Contacts</div>

          <div className="chaticon">
            <div className="icons">
              <MdVideoCall fontSize="1.8rem" />
            </div>
            <div className="icons">
              <FaSearch fontSize="1.6rem" />
            </div>
            <div className="icons">
              <MdMoreHoriz fontSize="1.6rem" />
            </div>
          </div>
        </div>
        <div className="concise">
          <div className="Profilee">
            <img
              src="images/story1.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Md. Ariful Islam
          </div>
          <div className="Profilee">
            <img
              src="images/story3.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Arif Haider
          </div>
          <div className="Profilee">
            <img
              src="images/story4.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Mohammad Akiful Islam
          </div>
          <div className="Profilee">
            <img
              src="images/story2.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Istiaq Ahmed
          </div>
          <div className="Profilee">
            <img
              src="images/cover.jpg"
              alt="logo"
              style={{ height: "35px", padding: "1rem" }}
            />
            Abdur Rahman
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainArea;
