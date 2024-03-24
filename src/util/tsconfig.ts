export const tsConfig = {
	compilerOptions: {
		allowUnreachableCode: false,
		allowUnusedLabels: false,
		exactOptionalPropertyTypes: true,
		noFallthroughCasesInSwitch: true,
		noImplicitOverride: true,
		noImplicitReturns: true,
		noUnusedParameters: true,
		noUnusedLocals: true,
		strict: true,
		useUnknownInCatchVariables: true,
		noUncheckedIndexedAccess: true,
		module: "Node16",
		moduleResolution: "Node16",
		resolveJsonModule: true,
		declaration: true,
		declarationMap: true,
		importHelpers: true,
		verbatimModuleSyntax: true,
		inlineSources: true,
		newLine: "lf",
		noEmitHelpers: true,
		outDir: "dist",
		preserveConstEnums: true,
		removeComments: true,
		sourceMap: true,
		esModuleInterop: true,
		forceConsistentCasingInFileNames: true,
		emitDecoratorMetadata: true,
		experimentalDecorators: true,
		lib: ["ESNext"],
		target: "ES2021",
		useDefineForClassFields: true,
		isolatedModules: true,
		jsx: "preserve",
		baseUrl: ".",
		noEmit: true,
		allowJs: false,
		incremental: true,
		skipLibCheck: true,
	},
	include: ["src/**/*.ts"],
	exclude: ["node_modules"],
};

export const tsConfigEslint = {
	extends: "./tsconfig.json",
	compilerOptions: {
		allowJs: true,
	},
	include: [
		"**/*.ts",
		"**/*.tsx",
		"**/*.js",
		"**/*.jsx",
		"**/*.test.ts",
		"**/*.test.js",
		"**/*.spec.ts",
		"**/*.spec.js",
	],
	exclude: [],
};

export type TSConfig = typeof tsConfig;
export type TSConfigEslint = typeof tsConfigEslint;
