"use client";

// next router hook
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    const handleNavigateToLogin = () => {
        router.push("/login");
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    paddingTop: "30px",
                }}
            >
                <h1 style={{ fontSize: 55, textDecoration: "underline" }}>
                    Welcome to the Todo List application
                </h1>
            </div>
            <div style={{ display: "flex", gap: "50px" }}>
                <button onClick={handleNavigateToLogin}>Login</button>
                <button>Sign Up</button>
            </div>
        </>
    );
};

export default Home;
