import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { inter, jetBrainsMono, fontSans } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { Navbar } from "~/components/Navbar";
import { Toaster } from "~/components/ui/toaster";

import "../styles/globals.css";

export const metadata: Metadata = {
	title: "tsconfig",
	icons: {
		other: [
			{
				url: "/tsconfig.svg",
				sizes: "32x32",
				type: "image/svg",
			},
			{
				url: "/tsconfig.svg",
				sizes: "16x16",
				type: "image/svg",
			},
		],
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>
					<div className="relative min-h-screen flex flex-col">
						<Navbar />
						{children}
					</div>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
