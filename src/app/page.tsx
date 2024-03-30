import * as React from "react";
import { Announcement } from "~/components/announcement";
import { CopyNodeJsTSConfig, CopyNextJsTSConfig, CopyTSConfigEslint } from "~/components/copy-config-button";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header";

export default function Page() {
	return (
		<main className="min-h-screen flex flex-col container max-w-7xl p-4 mx-auto">
			<PageHeader>
				<Announcement />
				<PageHeaderHeading>
					<span className="text-sky-600">TS</span>Config
				</PageHeaderHeading>
				<PageHeaderDescription>
					Harness the power of TypeScript&apos;s robust features for building scalable applications. Whether you&apos;re
					coding a personal project or a large-scale application, this configuration ensures productivity and code
					quality. Copy, paste, and unlock TypeScript&apos;s full potential in your development journey.
				</PageHeaderDescription>
				<PageActions>
					<CopyTSConfigEslint />
					<CopyNextJsTSConfig />
					<CopyNodeJsTSConfig />
				</PageActions>
			</PageHeader>
		</main>
	);
}
