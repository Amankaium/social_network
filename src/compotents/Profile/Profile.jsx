import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const ProfileInfo = () => {
    return (
        <div>
            <div className>
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div className={s.profileContent}>profile photo, short info</div>
        </div>
    );
}

const Profile = () => {

    let postData = [
        {message: 'text of post one', rating: -3},
        {message: 'cat and dog are pets duh', rating: 21}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
}

export default Profile;
