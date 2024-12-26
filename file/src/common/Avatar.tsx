import React from "react";

interface AvatarProps {
    src: string; 
    alt?: string; 
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = "Avatar",
    size = 50,
}) => {
    const avatarStyle: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={avatarStyle}>
            <img
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    );
};

export default Avatar;
