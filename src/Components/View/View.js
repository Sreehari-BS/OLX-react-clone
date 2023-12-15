import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';
function View() {
  
  const [userDetails, setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(async () => {
    try {
      const { userid } = postDetails;
      const details = await firebase
        .firestore()
        .collection("users")
        .where("id", "==", userid)
        .get();
  
      details.forEach((doc) => {
        setUserDetails(doc.data());
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="product image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>Name: {postDetails.name}</span>
          <p>Category: {postDetails.category}</p>
          <span>Posted On: {postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>Seller Name: {userDetails.userName}</p>
          <p>Phone Number: {userDetails.phoneNumber}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
