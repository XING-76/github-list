import React from "react";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
// Styled
import { Wrapper } from './index.styles';

const Card = (props) => {
  const { users, getUser } = props;
  
  return (
    <Wrapper>
      {
        users?.map((userObj) => {
          return (
            <div key={userObj.id} className="card">
              <div className="card-img" onClick={() => getUser(userObj.login)} >
                <img alt="head_portrait" src={userObj.avatar_url}/>
              </div>
              <p className="card-text">
                { userObj.login }
                { userObj.site_admin ? <AiFillCheckSquare style={{color: "green"}} /> : <AiFillCloseSquare style={{color: "red"}}/> }
              </p>
            </div>
          )
        })
      }
    </Wrapper>
  )
}

export default Card;