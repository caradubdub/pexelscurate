const API_KEY = process.env.NEXT_PUBLIC_PEXELS;

export const getCuratedPhotos = async (page) => {
  const result = await fetch(
    `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
    { headers: { Authorization: API_KEY } }
  );
  const response = await result.json();
  return response.photos;
};

export const getPhotoSearch = async (query, page) => {
  const result = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const response = await result.json();
  return response.photos;
};
