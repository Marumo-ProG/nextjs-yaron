// this is the user profile page it will help with the user to view and edit their profile

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const userProfilePage = ({ params }: any) => {
	return (
		<Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<Typography variant={"h4"} sx={{ textAlign: "center" }}>
				Hello {params.id}
			</Typography>
		</Stack>
	);
};

export default userProfilePage;
