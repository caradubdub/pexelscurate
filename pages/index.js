import Head from "next/head";

import styled from "styled-components";
import { getCuratedPhotos, getPhotoSearch } from "../lib/api";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Thumbnail from "../components/Thumbnail";
import BottomNav from "../components/BottomNav";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: lightgray;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const ThumbNailSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-basis: 50%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  font-size: 14px;
`;

export default function Home({ data }) {
  const [curated, setCurated] = useState(data);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopUp] = useState(false);
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(false);

  const handleSubmit = async (e) => {
    if (query.length < 1) {
      await e.preventDefault();
      alert("Please enter a value");
    }
    if (query.length > 0) {
      await e.preventDefault();
      await setPage(1);
      await setSearchQuery(query);
      const result = await getPhotoSearch(query, page);
      await setCurated(result);
      await setQuery("");
      await setSearch(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault;
    setSelected(e.target.id);
    setShowPopUp(true);
  };

  const handleBack = async (e) => {
    e.preventDefault;
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleForward = async (e) => {
    e.preventDefault;
    setPage(page + 1);
  };

  useEffect(() => {
    if (search) {
      const asyncFunc = async () => {
        const result = await getPhotoSearch(searchQuery, page);
        setCurated(result);
      };
      asyncFunc();
    } else {
      const asyncFunc = async () => {
        const result = await getCuratedPhotos(page);
        setCurated(result);
      };
      asyncFunc();
    }
  }, [page, searchQuery, search]);

  return (
    <div>
      <Head>
        <title> Pexels Curated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <NavBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
        <ThumbNailSection>
          {curated.map((image) => (
            <Thumbnail
              key={image.id}
              showPopup={showPopup}
              selected={selected}
              image={image}
              handleClick={handleClick}
            />
          ))}
        </ThumbNailSection>
        <BottomNav
          handleBack={handleBack}
          handleForward={handleForward}
          page={page}
        />
      </Wrapper>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos(1);
  return {
    props: {
      data,
    },
  };
}
