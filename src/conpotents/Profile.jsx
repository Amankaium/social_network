import React from 'react'

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>profile photo, short info</div>
            <div>
                posts
                <div>add post</div>
                <div>
                    feed
                    <div>post1</div>
                    <div>post1</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;