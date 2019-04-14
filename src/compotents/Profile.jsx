import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>profile photo, short info</div>
            <div className={s.posts}>
                posts
                <div>add post</div>
                <div>
                    feed
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;