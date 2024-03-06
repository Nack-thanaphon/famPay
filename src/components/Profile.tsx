import { Stack, Typography } from "@mui/material";
import React from "react";

interface ProfileProps {
    name: string;
    status: string;
  }

const Profile = ({ name, status }):ProfileProps => {
  return (
    <Stack marginBottom={1}>
      <Typography
        fontSize={13}
        fontWeight={700}
        className="text-blue-300"
        textTransform={"uppercase"}
      >
        {name}
      </Typography>
      <Typography fontSize={10}>สถานะ : {status}</Typography>
    </Stack>
  );
};

export default Profile;
