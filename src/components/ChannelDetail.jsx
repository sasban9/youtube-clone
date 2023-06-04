import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,241,1) 0%, rgba(206,3,184,1) 50%, #fc1503 100%)",
            zIndex: 10,
            height: 300,
          }}
        ></div>
        <ChannelCard channel={channelDetail} marginTop={"-110px"} background="transparent"></ChannelCard>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}></Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
