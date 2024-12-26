import React, { useState } from "react";
import { FaEdit, FaHeart, FaComment, FaShare } from "react-icons/fa";
import Avatar from "../../common/Avatar";

// Sample data for posts
const samplePosts = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x300",
    text: "This is my first post!",
    createdAt: "2024-12-25",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x300",
    text: "Loving the new profile page!",
    createdAt: "2024-12-24",
  },
];

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState({
    avatar: "https://via.placeholder.com/150",
    coverImage: "https://via.placeholder.com/800x200",
    bio: "This is my bio",
    name: "John Doe",
    username: "johndoe",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newBio, setNewBio] = useState(user.bio);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setUser({
      ...user,
      name: newName,
      bio: newBio,
    });
    setIsEditing(false);
  };

  return (
    <div style={styles.container}>
      {/* Profile Header Section */}
      <div style={styles.headerContainer}>
        <img
          src={user.coverImage}
          alt="Cover"
          style={styles.coverImage}
        />
        <div style={styles.avatarContainer}>
          <Avatar
            src={user.avatar}
            alt="User Avatar"
            size={110}
          />
        </div>
        <button style={styles.editButton} onClick={handleEditProfile}>
          <FaEdit /> Edit Profile
        </button>
        <div style={styles.profileDetails}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                style={styles.inputField}
              />
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                style={styles.inputField}
              />
              <button style={styles.saveButton} onClick={handleSaveProfile}>
                Save
              </button>
            </>
          ) : (
            <>
              <h2 style={styles.profileName}>{user.name}</h2>
              <p style={styles.username}>@{user.username}</p>
              <p style={styles.bio}>{user.bio}</p>
            </>
          )}
        </div>
      </div>

      {/* Posts Feed Section */}
      <div style={styles.postsContainer}>
        <h3 style={styles.postsTitle}>My Posts</h3>
        <div style={styles.reelsContainer}>
          {samplePosts.map((post) => (
            <div key={post.id} style={styles.reel}>
              <img
                src={post.image}
                alt="Post"
                style={styles.reelImage}
              />
              <div style={styles.overlay}>
                <div style={styles.overlayIcons}>
                  <FaHeart style={styles.icon} />
                  <FaComment style={styles.icon} />
                  <FaShare style={styles.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff",
    paddingBottom: "50px",
    width: "600px",
  },
  headerContainer: {
    position: "relative",
    backgroundColor: "#ffffff",
  },
  coverImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  avatarContainer: {
    position: "absolute",
    top: "150px",
    left: "20px",
    borderRadius: "50%",
    border: "5px solid white",
    overflow: "hidden",
  },
  profileDetails: {
    padding: "10px 20px 20px",
    textAlign: "left",
  },
  profileName: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  },
  username: {
    fontSize: "16px",
    color: "#657786",
  },
  bio: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#14171a",
  },
  editButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #00000057",
    borderRadius: "25px",
    marginLeft: "165px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "200px",
    justifyContent: "center",
    gap: "5px",
  },
  postsContainer: {
    padding: "20px",
    backgroundColor: "#ffffff",
    marginTop: "20px",
  },
  postsTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  reelsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  reel: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderRadius: "10px",
  },
  reelImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 0.3s",
  },
  reel: {
    position: "relative",
    borderRadius: "10px",
    cursor: "pointer",
  },
  overlayIcons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
  },
  reelHover: {
    opacity: 1,
  },
  inputField: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#1da1f2",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ProfilePage;
