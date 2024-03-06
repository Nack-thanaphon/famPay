import { Box, Stack, Typography } from "@mui/material";
import Profile from "../components/Profile";
import TransactionsChart from "../components/TransactionsChart";

const HomePage: React.FC = () => {
  interface Profile {
    name: string;
    status: string;
  }

  const Profiledata: Profile[] = [
    { name: "thanaphon", status: "family" },
    { name: "phiengpen", status: "family" },
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
          {Profiledata.map((data, index) => (
            <Profile key={index} name={data.name} status={data.status} />
          ))}
          <Box>
            <div className="">
              ความเสถียรภาพ :
              <span className="ml-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xl font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">
                ดี (Good)
              </span>
            </div>
          </Box>
          <Box className="mt-1">
            <p> ภาระผูกผัน : 0 รายการ</p>
          </Box>
        </Box>
        <Box
          display={"gird"}
          gridTemplateColumns={{ sm: "1fr", lg: "1fr 1fr" }}
          marginTop={1}
        >
          <Stack
            marginBottom={1}
            // boxShadow={2}
            padding={{ xs: "20px", lg: "10px 30px" }}
            borderRadius={1}
            className="bg-green-100 text-green-700 sm:w-100  ring-green-600/10"
          >
            <Typography fontSize={10}>เงินฝากทั้งหมด</Typography>
            <Typography fontSize={{ sm: "1rem", lg: "2rem" }}>
              {new Intl.NumberFormat().format(3500000)}
            </Typography>
          </Stack>
          <Stack
            marginBottom={1}
            // boxShadow={2}
            padding={{ xs: "20px", lg: "10px 30px" }}
            borderRadius={1}
            className="bg-red-100 text-red-700 sm:w-100  ring-red-600/10"
          >
            <Typography fontSize={10}>หนี้ทั้งหมด</Typography>
            <Typography fontSize={{ sm: "1rem", lg: "2rem" }}>
              {new Intl.NumberFormat().format(35000)}
            </Typography>
          </Stack>
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
      <Box marginTop={1} className="border border-spacing-1 py-3">
      </Box>
    </div>
  );
};

export default HomePage;

// Repeat for other pages: AboutPage, ContactPage, etc.
