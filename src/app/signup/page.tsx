// this is the login page component that will be rendered when the user navigates to the /signup route

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { axios } from "axios";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const SignupPage = () => {
	const [user, setUser] = useState({ name: "", email: "", password: "" });

	const handleSignup = () => {};
	return (
		<Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
			<Stack width={"400px"} spacing={2}>
				<Typography variant={"h4"} sx={{ textAlign: "center" }}>
					Signup
				</Typography>
				<TextField
					label="Username"
					variant="outlined"
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
					sx={{ backgroundColor: "white", borderRadius: "5px" }}
				/>
				<TextField
					label="Email"
					type="email"
					variant="outlined"
					value={user.email}
					onChange={(e) =>
						setUser({ ...user, email: e.target.value })
					}
					sx={{ backgroundColor: "white", borderRadius: "5px" }}
				/>
				<TextField
					label="password"
					type="password"
					variant="outlined"
					value={user.password}
					onChange={(e) =>
						setUser({ ...user, password: e.target.value })
					}
					sx={{ backgroundColor: "white", borderRadius: "5px" }}
				/>
				<Button
					variant="outlined"
					color="primary"
					onClick={handleSignup}
					sx={{ borderColor: "white", color: "white" }}
				>
					Signup
				</Button>

				<Stack alignItems={"center"}>
					<Link href="/login">Navigate to Login</Link>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default SignupPage;
