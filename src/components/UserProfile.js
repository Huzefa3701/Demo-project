import React from "react";
import style from "./UserProfile.module.css";
const UserProfile = () => {
  return (
    <div className={style.UserProfile}>
      <div className={style.userTopImg}>
        <div className={style.banerImg}>
          <img
            class="card-img-top"
            src="https://i.imgur.com/K7A78We.jpg"
            alt="Card image cap"
          />
        </div>

        <div className={style.profilePic}>
          {/* <img src="https://i.pinimg.com/originals/bb/d4/4b/bbd44b37f18e40a01543b8b4721b1cce.jpg" alt="user" /> */}
          {/* <img src="https://i.pinimg.com/originals/a5/61/a2/a561a2adb3d30b5d5229e1a250fe1bf9.jpg" alt="user" /> */}
          <img src="https://images.unsplash.com/photo-1682167176130-5dc0cbb20402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt="user" />
        </div>
      </div>
      <div className={style.username}>JhonDoe2</div>
      <div className={style.userInfo}>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Name</label>
          <h5>umesh saini</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Email</label>
          <h5>umesh@gmail.com</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Phone</label>
          <h5>9XXXXXXXX2</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Name</label>
          <h5>umesh saini</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Email</label>
          <h5>umesh@gmail.com</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Phone</label>
          <h5>9XXXXXXXX2</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Name</label>
          <h5>umesh saini</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Email</label>
          <h5>umesh@gmail.com</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Phone</label>
          <h5>9XXXXXXXX2</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">DOB</label>
          <h5>12 May 2001</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">Gender</label>
          <h5>Mail</h5>
        </div>
        <div className={style.userOtherInfo}>
          <label htmlFor="">PinCode</label>
          <h5>458664</h5>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
