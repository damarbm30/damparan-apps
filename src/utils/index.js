export const formatImageUrl = (url, setImageUrl) => {
  if (url) {
    const regex = /\/d\/(.+?)\/view/;
    const match = regex.exec(url);
    if (!!match) setImageUrl(`https://drive.google.com/uc?export=view&id=${match[1]}`);
  }
};
