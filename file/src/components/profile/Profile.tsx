import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Avatar from "../../common/Avatar";

// Sample data for posts
const samplePosts = [
  {
    id: 1,
    text: "This is my first post!",
    createdAt: "2024-12-25",
  },
  {
    id: 2,
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

  const handleEditProfile = () => {
    alert("Edit Profile clicked");
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
          {/* <img
            src={user.avatar}
            alt="Avatar"
            style={styles.avatar}
          /> */}
           <Avatar
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                size={110}
            />
        </div>
        <button style={styles.editButton} onClick={handleEditProfile}>
            <FaEdit /> Edit Profile
          </button>
        <div style={styles.profileDetails}>
          <h2 style={styles.profileName}>{user.name}</h2>
          <p style={styles.username}>@{user.username}</p>
          <p style={styles.bio}>{user.bio}</p>
         
        </div>
      </div>

      {/* Posts Feed Section */}
      <div style={styles.postsContainer}>
        <h3 style={styles.postsTitle}>My Posts</h3>
        <div style={styles.postsList}>
          {samplePosts.map((post) => (
            <div key={post.id} style={styles.post}>
              <p>{post.text}</p>
              <span style={styles.postDate}>{post.createdAt}</span>
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
    width:"600px"
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
  avatar: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
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
    backgroundColor: "#1DA1F2",
    color: "#ffffff",
    border: "none",
    borderRadius: "25px",
    marginLeft:"165px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
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
  postsList: {
    marginTop: "10px",
  },
  post: {
    padding: "15px",
    borderBottom: "1px solid #e1e8ed",
  },
  postDate: {
    fontSize: "12px",
    color: "#657786",
  },
};

export default ProfilePage;
