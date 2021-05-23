import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar 
                    className="post_avatar"
                    alt="Sanam"
                    src="https:vhvhjv"
                />
                <h3>Username</h3>
            </div>
            {/* header -> avatar + username */}

            {/* image */}
            <img
                className="post_image"
                src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-db07e.appspot.com/o/images%2FWhatsApp%20Image%202020-09-01%20at%2010.50.17%20PM.jpeg?alt=media&token=8ee9c715-fbdb-4b51-9edb-83c0d85c8cdc"
                alt="Instagram_Logo"
            />

            {/* usrname + caption */}
            <h4 className="post_text"><strong>Sappler:</strong> Wow, that's great</h4>

        </div>
    )
}

export default Post;
