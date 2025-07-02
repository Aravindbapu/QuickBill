import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "test_thumbnail");
    formData.append("cloud_name", "#Your_cloudname");

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/#Your_cloudname/image/upload`,
        formData
    );

    return res.data.secure_url;
};
