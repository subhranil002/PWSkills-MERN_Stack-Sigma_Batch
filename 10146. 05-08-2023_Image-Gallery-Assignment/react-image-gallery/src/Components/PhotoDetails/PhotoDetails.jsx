import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PhotoDetails() {
    const { id } = useParams();
    const [photo, setPhoto] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const downloadPhoto = useCallback(async () => {
        try {
            const response = await axios.get(
                `https://api.slingacademy.com/v1/sample-data/photos/${id}`
            );
            const photoData = response.data.photo;
            setPhoto({
                id: photoData.id,
                title: photoData.title,
                description: photoData.description,
                imageUrl: photoData.url,
            });
            setIsLoading(false);
        } catch (error) {
            console.log("Error:", error);
        }
    }, [id, photo, isLoading]);

    useEffect(() => {
        setIsLoading(true);
        downloadPhoto();
    }, []);

    return (
        <main className="flex items-center justify-center w-full py-10">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex items-center w-[90%] gap-10 bg-[#042e5e] text-white p-10 rounded">
                    <img
                        className="rounded-xl shadow-[0_3px_5px_3px_rgba(61,102,149,255)] w-[400px]"
                        src={photo.imageUrl}
                        alt="image"
                    />
                    <div className="flex flex-col gap-10">
                        <h1 className="text-5xl font-bold font-sans">
                            {photo.title}
                        </h1>
                        <p className="text-2xl font-semibold font-sans">
                            {photo.description}
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}

export default PhotoDetails;
