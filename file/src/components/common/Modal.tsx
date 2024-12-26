import React, { useState, useEffect } from "react";
import {
    FaWhatsapp,
    FaFacebook,
    FaReddit,
    FaDiscord,
    FaFacebookMessenger,
    FaClipboard,
    FaTimes, // Importing close icon
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface SharePopupProps {
    onClose: () => void;
    shareLink: string;
}

const SharePopup: React.FC<SharePopupProps> = ({ onClose, shareLink }) => {
    const [copied, setCopied] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ ...styles.overlay, opacity: showPopup ? 1 : 0 }}>
            <div style={{ ...styles.popup, transform: showPopup ? "scale(1)" : "scale(0.8)" }}>
                <div style={styles.headerContainer}>
                    <h3 style={styles.header}>Share Post</h3>
                    <FaTimes onClick={onClose} style={styles.closeIcon} />
                </div>
                <div style={styles.options}>
                    <Link
                        to={`https://wa.me/?text=${encodeURIComponent(shareLink)}`}
                        target="_blank"
                        style={{ ...styles.option, backgroundColor: "#E7FBF0" }}
                    >
                        <FaWhatsapp style={styles.icon} />
                    </Link>
                    <Link
                        to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
                        target="_blank"
                        style={{ ...styles.option, backgroundColor: "#E7F1FD" }}
                    >
                        <FaFacebook style={styles.icon} />
                    </Link>
                    <Link
                        to={`https://reddit.com/submit?url=${encodeURIComponent(shareLink)}`}
                        target="_blank"
                        style={styles.option}
                    >
                        <FaReddit style={styles.icon} />
                    </Link>
                    <Link
                        to={`https://discord.com/channels/@me?text=${encodeURIComponent(shareLink)}`}
                        target="_blank"
                        style={styles.option}
                    >
                        <FaDiscord style={styles.icon} />
                    </Link>
                    <Link
                        to={`https://www.messenger.com/t?link=${encodeURIComponent(shareLink)}`}
                        target="_blank"
                        style={styles.option}
                    >
                        <FaFacebookMessenger style={styles.icon} />
                    </Link>
                    <div onClick={handleCopyLink} style={styles.option}>
                        <FaClipboard style={styles.icon} />
                    </div>
                </div>
                <span style={styles.pageLinkTitle}>Page Link</span>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={shareLink}
                        readOnly
                        style={styles.inputBox}
                    />
                    <div style={styles.copyButton}>
                        {copied ? (
                            <span>Copied!</span>
                        ) : (
                            <FaClipboard style={styles.icon} onClick={handleCopyLink} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        transition: "opacity 0.5s ease-in-out", // Smooth fade-in
    },
    popup: {
        width: "350px",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        transition: "transform 0.3s ease-out", // Smooth scale effect
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
    },
    header: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#000",
    },
    closeIcon: {
        fontSize: "20px",
        cursor: "pointer",
        color: "#000",
    },
    options: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        marginBottom: "15px",
    },
    option: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#f1f1f1",
        textDecoration: "none",
        color: "#fff",
        fontSize: "18px",
        transition: "background-color 0.2s",
        width: "56px",
        height: "56px",
        cursor: "pointer",
    },
    icon: {
        fontSize: "20px",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        border: "1px solid #ddd",
        background: "#D9D9D9",
        borderRadius: "8px",
        overflow: "hidden",
    },
    inputBox: {
        flex: 1,
        padding: "10px",
        border: "none",
        background: "#D9D9D9",
        fontSize: "14px",
        color: "rgba(85, 85, 85, 0.6)",
        outline: "none",
    },
    copyButton: {
        padding: "10px 15px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#fff",
        border: "none",
        cursor: "pointer",
    },
    pageLinkTitle: {
        display: "flex",
        justifyContent: "start",
        marginBottom: "10px",
        marginTop: "10px",
        fontWeight: "500",
    }
};

export default SharePopup;
