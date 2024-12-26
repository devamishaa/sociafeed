import Avatar from "../../common/Avatar";
import PostPage from "../posts/Post";
import SharePopup from "../common/Modal";
import { useState } from "react";
const Feed = () => {
    const [showPopup, setShowPopup] = useState(false);
    const postLink = "https://yourpostlink.com/post/123";
    const postImages = [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400/ff7f7f",
        "https://via.placeholder.com/600x400/87ceeb",
    ];
    return (
        <div style={styles.container}>
            feed
            <Avatar
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                size={80}
            />
            <span className="welcome-text">Welcome Back</span>
            <br />
            <span>Amisha</span>
            {/* {username} */}
            <h4>Feeds</h4>
            {/* <PostPage
                avatarSrc="https://via.placeholder.com/150"
                username="John Doe"
                postImage={PostOne}
                likesCount={120}
            /> */}
            <PostPage
                avatarSrc="https://via.placeholder.com/150"
                username="John Doe"
                postImages={postImages}
                likesCount={120}
            />
            <button
                onClick={() => setShowPopup(true)}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Share Post
            </button>
            {showPopup && (
                <SharePopup
                    onClose={() => setShowPopup(false)}
                    shareLink={postLink}
                />
            )}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: "600px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid #ddd",
        backgroundColor: "#fff",
    },
};
export default Feed;
