import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config = {
	clearMocks: true,
	coverageDirectory: "coverage",
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!**/node_modules/**",
		"!**/.next/**",
		"!**/dist/**",
	],
	testEnvironment: "jest-environment-jsdom",
	moduleDirectories: ["node_modules", "<rootDir>/"],
	transform: {
		"^.+\\.(t|j)sx?$": "@swc/jest",
	},
	extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
};

export default createJestConfig(config);
