import React from "react";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
// Styled
import { Wrapper } from './index.styles';

const Modal = (props) => {

  const { closeModal, user } = props;

  return (
    <Wrapper>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => closeModal()}
          >
            X
          </button>
        </div>
        <>
          {
            user.map((userObj) => {
              return (
                <div key={userObj.id} className="card">
                  <a rel="noreferrer" href={userObj.html_url} target="_blank">
                    <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">
                    {userObj.login}
                    { userObj.site_admin ? <AiFillCheckSquare style={{color: "green"}} /> : <AiFillCloseSquare style={{color: "red"}}/> }
                  </p>
                  <p className="card-text">{userObj.name}</p>
                  <p className="card-text">{userObj.location}</p>
                  <p className="card-text">{userObj.bio}</p>
                  <p className="card-text">{userObj.blog}</p>
                </div>
              )
            })
          }
        </>
        <div className="footer">
          <button
            onClick={() => closeModal()}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Modal;