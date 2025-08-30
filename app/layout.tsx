import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Shinhaeng Lee",
		template: "%s | shinhaenglee.com",
	},
	description:
		"Shinhaeng Lee – AI researcher passionate about deep learning, large datasets, and building intelligent systems.",
	openGraph: {
		title: "Shinhaeng Lee",
		description:
			"Shinhaeng Lee – AI researcher passionate about deep learning, large datasets, and building intelligent systems.",
		url: "https://shinhaenglee.com",
		siteName: "shinhaenglee.com",
		images: [
			{
				url: "https://shinhaenglee.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Shinhaeng",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/icon.webp",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
				<meta
					name="description"
					content="Shinhaeng Lee – AI researcher passionate about deep learning, large datasets, and building intelligent systems."
				/>
				<Analytics />
			</head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
