import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoVideoTitle, demoVideoUrl } from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <Card sx={{ width: { md: 320, xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ height: 106, background: "#1e1e1e" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.publishedAt}
          </Typography>
          <Typography variant="subtitle2" color="#fc1503">
            {snippet?.channelTitle}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="white"
            title={snippet?.title}
            fontSize={
              Math.min(16, 500 / Math.pow(snippet?.title.length, 0.78)) || 12
            }
          >
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
