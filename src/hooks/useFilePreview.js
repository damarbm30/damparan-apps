import { useEffect, useState } from "react";

export default function useFilePreview(file) {
  const [imgSrc, setImgSrc] = useState(null);

  let images = [];

  useEffect(() => {
    if (file && file[0]) {
      for (let i = 0; i < file.length; i++) images.push(URL.createObjectURL(file[i]));
      setImgSrc(images);
    }
  }, [file]);

  return [imgSrc, setImgSrc];
}
