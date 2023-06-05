import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoInfo(data.items[0])
    );
  }, [id]);

  if(!videoInfo?.snippet) return 'Loading...'

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoInfo;
  console.log("SASBAN", videoInfo);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
