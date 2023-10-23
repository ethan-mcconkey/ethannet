import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config = {
	clearMocks: true,
	collectCoverageFrom: ["src/**/*.tsx", "src/lib/*.ts"],
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
	testEnvironment: "jest-environment-jsdom",
	moduleDirectories: ["node_modules", "<rootDir>/"],
	moduleNameMapper: {
		"@/components/(.*)": "<rootDir>/src/components/$1",
		"@/lib/(.*)": "<rootDir>/src/lib/$1",
	},
	transform: {
		"^.+\\.tsx?$": "@swc/jest",
	},
	extensionsToTreatAsEsm: [".ts", ".tsx"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
