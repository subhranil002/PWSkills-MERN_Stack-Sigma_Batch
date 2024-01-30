import React, { useCallback, useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import axios from "axios";

function PhotoList() {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);

    const [apiUrl, setApiUrl] = useState(
        `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
    );
    const [isLoading, setIsLoading] = useState(true);
    const [photoList, setPhotolist] = useState([]);

    const downloadPhotos = useCallback(async () => {
        try {
            const response = await axios.get(apiUrl);
            const result = response.data.photos.map((photo) => ({
                id: photo.id,
                imageUrl: photo.url,
            }));
            setPhotolist(result);
            setIsLoading(false);
        } catch (error) {
            console.log("Error:", error);
        }
    }, [offset, limit, apiUrl, isLoading, photoList]);

    useEffect(() => {
        setIsLoading(true);
        downloadPhotos();
    }, [apiUrl]);

    const prevUrl = () => {
        if (offset != 0) {
            setOffset((prev) => prev - 20);
            setLimit((prev) => prev - 20);
            setApiUrl(
                `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
            );
        }
    };

    const nextUrl = () => {
        if (limit != 132) {
            if (limit + 20 <= 132) {
                setOffset((prev) => prev + 20);
                setLimit((prev) => prev + 20);
                setApiUrl(
                    `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
                );
            } else {
                setOffset((prev) => prev + 20);
                setLimit(132);
                setApiUrl(
                    `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
                );
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-between w-full mt-5 gap-5">
            <h1 className="text-4xl font-mono">Photos</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="flex flex-wrap gap-5 w-full items-center justify-center">
                        {photoList.map((photo) => (
                            <Photo
                                key={photo.id}
                                id={photo.id}
                                imageUrl={photo.imageUrl}
                            />
                        ))}
                    </div>
                    <div className="flex gap-3 mb-5">
                        <button
                            disabled={offset == 0}
                            onClick={prevUrl}
                            className="p-2 bg-green-600 rounded-lg text-white font-bold"
                        >
                            Prev
                        </button>
                        <button
                            disabled={limit == 132}
                            onClick={nextUrl}
                            className="p-2 bg-orange-600 rounded-lg text-white font-bold"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default PhotoList;
