import { Stack, Typography } from "@mui/material";

interface ProfileProps {
  name: string;
  status: string;
}

const Profile: React.FC<ProfileProps> = ({ name, status }) => {
  return (
    <Stack marginBottom={1}>
      <Typography
        fontSize={13}
        fontWeight={700}
        className="text-blue"
        textTransform={"uppercase"}
      >
        {name}
      </Typography>
      <Typography fontSize={10}>สถานะ : {status}</Typography>
    </Stack>
  );
};

export default Profile;
