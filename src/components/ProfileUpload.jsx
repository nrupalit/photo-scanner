import { Button } from "@mui/material";
import { useState } from "react";


export default function ProfileUpload() {
    const [image, setImage] = useState(undefined);
    const handleImageChange = (event) => {
        const [selectedImage] = event.target.files;
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(selectedImage);
    };

    return (
        <section className="profile-upload-container">
            <Button
                variant="contained"
                component="label"
            >
                Upload Profile
                <input
                    type="file"
                    onChange={handleImageChange} accept={".jpg"}
                    hidden
                />
            </Button>
            <div className="image-container">
                {image?.length && <img src={image} />}
            </div>
        </section>
    )
}