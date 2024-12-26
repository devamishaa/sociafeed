import React from "react";

// Icons (can replace with any library icons like FontAwesome or Material Icons)
const LikeIcon = () => <span role="img" aria-label="like">❤️</span>;
const ShareIcon = () => <span role="img" aria-label="share">🔗</span>;

interface PostProps {
    avatarSrc: string;
    username: string;
    postImages: string[]; // Array of images
    likesCount: number;
}

const PostPage: React.FC<PostProps> = ({ avatarSrc, username, postImages, likesCount }) => {
    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <div style={styles.avatarWrapper}>
                    <img src={avatarSrc} alt={`${username}'s avatar`} style={styles.avatar} />
                </div>
                <span style={styles.username}>{username}</span>
            </div>

            {/* Post Images */}
            <div style={styles.imageWrapper}>
                {postImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Post ${index + 1}`}
                        style={styles.postImage}
                    />
                ))}
            </div>

            {/* Footer */}
            <div style={styles.footer}>
                <div style={styles.left}>
                    <LikeIcon /> <span style={styles.likesCount}>{likesCount} Likes</span>
                </div>
                <div style={styles.right}>
                    <ShareIcon />
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: "600px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: "10px 15px",
        borderBottom: "1px solid #ddd",
    },
    avatarWrapper: {
        marginRight: "10px",
    },
    avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    username: {
        fontWeight: "bold",
        fontSize: "16px",
        color: "#333",
    },
    imageWrapper: {
        marginTop: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Adjust grid layout for multiple images
        gap: "10px",
    },
    postImage: {
        width: "200px",
        height: "auto",
        borderRadius: "10px",
        objectFit: "cover",
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px",
        borderTop: "1px solid #ddd",
    },
    left: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "16px",
    },
    right: {
        cursor: "pointer",
        fontSize: "18px",
    },
    likesCount: {
        fontWeight: "bold",
        color: "#555",
    },
};

export default PostPage;
