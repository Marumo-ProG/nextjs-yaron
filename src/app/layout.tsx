import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Next Components
import Link from "next/link";

export const metadata: Metadata = {
    title: "Yaron Todo List application",
    description: "Todo List application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        backgroundColor: "white",
                        color: "black",
                        padding: "8px",
                    }}
                >
                    <h1>Todo List Application</h1>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/todo"}>Todo's</Link>
                    </div>
                </div>
                <main>{children}</main>
            </body>
        </html>
    );
}
