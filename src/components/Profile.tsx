import { Box, Typography } from "@mui/material";

interface ProfileProps {
  name: string;
  profileUrl: string;
  status: string;
}

const Profile: React.FC<ProfileProps> = ({ name, profileUrl, status }) => {
  return (
    <Box
      display={"flex"}
      marginRight={1}
      marginY={1}
      boxShadow={1}
      width={"auto"}
      borderRadius={2}
      paddingX={2}
      paddingY={1}
    >
      <Box className="mr-2">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white "
          src={profileUrl}
          alt="alt"
        />
      </Box>

      <Box>
        <Typography
          fontSize={13}
          fontWeight={700}
          className="text-blue"
          textTransform={"uppercase"}
        >
          {name}
        </Typography>
        <Typography fontSize={10}>สถานะ : {status}</Typography>
      </Box>
    </Box>
  );
};

export default Profile;
