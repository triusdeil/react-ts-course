import React, { useEffect, useState } from "react";

interface Photo {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function FecthComponent() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setPhotos(data);
    };
    getPhotos();
  });

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h1>{photo.title}</h1>
          <img src={photo.thumbnailUrl} alt=""></img>
        </div>
      ))}
    </div>
  );
}

export default FecthComponent;
