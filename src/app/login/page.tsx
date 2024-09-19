// this is the login page component that will be rendered when the user navigates to the /login route
"use client";
// Appwrite
import { Client, Databases } from "appwrite";

// initialize the client
const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66eb25660024e25e0710");

const databases = new Databases(client);
import React, { useState } from "react";
import Link from "next/link";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";

const LoginPage = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [loader, setLoader] = useState(false);

    const handleLogin = async () => {
        setLoader(true);
        // API call to check and validate the user
        const { documents } = await databases.listDocuments(
            "66eb2685003012cd34d1", // databaseId
            "66eb26a8001e730d10b6", // collectionId
            [] // queries (optional)
        );
        if (documents[0].email === user.email && documents[0].password === user.password) {
            alert("Login successful");
        } else {
            alert("Login failed");
        }
        setLoader(false);
    };
    return (
        <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Stack width={"400px"} spacing={2}>
                <Typography variant={"h4"} sx={{ textAlign: "center" }}>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    sx={{ backgroundColor: "white", borderRadius: "5px" }}
                />
                <TextField
                    label="password"
                    type="password"
                    variant="outlined"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    sx={{ backgroundColor: "white", borderRadius: "5px" }}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    endIcon={loader && <CircularProgress size={20} />}
                    onClick={handleLogin}
                    sx={{ borderColor: "white", color: "white" }}
                >
                    Login
                </Button>

                <Stack alignItems={"center"}>
                    <Link href="/signup">Navigate to Signup</Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LoginPage;
