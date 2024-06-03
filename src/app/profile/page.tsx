// this is the home page of the profile page

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProfilePage = () => {
	return (
		<Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<Typography variant={"h4"} sx={{ textAlign: "center" }}>
				Profile Page
			</Typography>
			<Typography variant={"body"} sx={{ textAlign: "center" }}>
				Welcome
			</Typography>
		</Stack>
	);
};

export default ProfilePage;
