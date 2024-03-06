import { Box, Divider, Stack, Typography } from "@mui/material";
import Profile from "../components/Profile";
import TransactionsChart from "../components/TransactionsChart";
import ProgressBar from "../components/ProgressBar";

const HomePage: React.FC = () => {
  interface Profile {
    name: string;
    profileUrl: string;
    status: string;
  }

  const Profiledata: Profile[] = [
    {
      name: "phiengpen",
      profileUrl:
        "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/275553591_10209912283879618_2022651175832381254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHH8X92-YQaCoQiO6lGccr-kDLOMS1zXSuQMs4xLXNdK5ZOF5NYKTQppA1C16tkR7ddPAzcten28HrZSRuuSYJ3&_nc_ohc=MtGYQWJuZU0AX_r1Ttv&_nc_oc=AQk7j57a4tVgW88aT25w_kkMPL41n0LoRM1_83gYRJFovZvbmiX--bY-BWw91c5zLQSFhzZFt50f7YqRTpYYSGTe&_nc_ht=scontent.fbkk12-5.fna&oh=00_AfBgPy4Xk3aUDvmWofzRFvishItxn1IqirZA7JEY-aGiOw&oe=65ECB5F0",
      status: "แฟน",
    },
    {
      name: "thanaphon (HOST)",
      profileUrl:
        "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/421769161_949788609906655_1323660886917509043_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFycEq85v6G9M7Ce-_I9M3381vAgJ84TBLzW8CAnzhMEhbxLs4gPQFl33A-SjTiA7IXKHKtR4FkKEdJ3zR9nhCw&_nc_ohc=J4lWnjgPWd8AX9TNo9a&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfBLZ6ixCm8b0YqidGAkGOKbdIgoP9rSXUAPjgdZk6SuEA&oe=65EDCBD7",
      status: "แฟน",
    },
  ];

  return (
    <div>
      <Stack marginBottom={2}>
        <Typography fontSize={26} fontWeight={700}>
          Dashboard
        </Typography>
      </Stack>
      <Box
        display={{ sm: "block", lg: "flex" }}
        justifyContent={"space-between"}
      >
        <Box className="border border-spacing-1 p-3 lg:w-1/2 my-auto">
          <Typography fontSize={20}>ประจำเดือน : มกราคม 2567</Typography>
          <Stack margin={1}></Stack>
          <Box display={{ sm: "block", lg: "flex" }}>
            {Profiledata.map((data, index) => (
              <Profile
                key={index}
                name={data.name}
                profileUrl={data.profileUrl}
                status={data.status}
              />
            ))}
          </Box>
          <Box>
            <div className="">
              ความเสถียรภาพ :
              <br />
              <span className="my-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xl font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">
                ดี (Good)
              </span>
            </div>
          </Box>
          <Box className="mt-1">
            <p> ภาระผูกผัน : 0 รายการ</p>
          </Box>
        </Box>
        <Box>
          <Box
            display={{ sm: "block", lg: "flex" }}
            justifyContent={"space-between"}
            // gridTemplateColumns={{ sm: "1fr", lg: "1fr 1fr" }}
            marginTop={1}
          >
            <Box
              // boxShadow={2}
              padding={{ xs: "20px", lg: "10px 30px" }}
              borderRadius={1}
              marginBottom={1}
              className="bg-green-100 text-green-700 sm:w-100  ring-green-600/25 h-fit  lg:mr-2 "
            >
              <Typography fontSize={13} fontWeight={700}>
                เงินฝากทั้งหมด
              </Typography>
              <Typography fontSize={{ sm: "1rem", lg: "2rem" }}>
                {new Intl.NumberFormat().format(3500000)}
              </Typography>
            </Box>
            <Box
              padding={{ xs: "20px", lg: "10px 30px" }}
              borderRadius={1}
              className="bg-red-100 text-red-700 sm:w-100  ring-red-600/25 h-fit"
            >
              <Typography fontSize={13} fontWeight={700}>
                หนี้ทั้งหมด
              </Typography>
              <Typography fontSize={{ sm: "1rem", lg: "2rem" }}>
                {new Intl.NumberFormat().format(35000)}
              </Typography>
            </Box>
          </Box>
          <Box boxShadow={1} padding={2}>
            <Box marginBottom={1}>
              <h2 className="font-bold	">รายละเอียด</h2>
              <p>
                เติบโตขึ้นจากไตรมาส 3 (74%{" "}
                <span className="text-green-300">↑</span>)
              </p>
            </Box>
            <Divider sx={{ marginY: "6px" }} />

            <Box marginBottom={1}>
              <h2 className="font-bold	">เป้าหมาย</h2>
              <Stack gap={1} marginBottom={1}>
                <p>แต่งงาน</p>
                <ProgressBar progress={70} />
              </Stack>
              <Stack gap={1} marginBottom={1}>
                <p>ซื้อคอนโด</p>
                <ProgressBar progress={30} />
              </Stack>
              <Stack gap={1} marginBottom={1}>
                <p>ซื้อรถยนต์</p>
                <ProgressBar progress={89} />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop={1} className="border border-spacing-1 py-3">
        <TransactionsChart />
      </Box>
      <Stack marginY={2}>
        <Typography fontSize={26} fontWeight={700}>
          รายรับ-รายจ่ายทั้งหมด
        </Typography>
      </Stack>
      <Box marginTop={1} className="border border-spacing-1 py-3"></Box>
    </div>
  );
};

export default HomePage;

// Repeat for other pages: AboutPage, ContactPage, etc.
