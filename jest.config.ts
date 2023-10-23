import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config = {
	clearMocks: true,
	collectCoverageFrom: ["src/**/*.tsx", "src/lib/*.ts", "!src/app/blog/**/*"],
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
		"^.+\\.ts(x)?$": "@swc/jest",
	},
	extensionsToTreatAsEsm: [".ts", ".tsx"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	preset: "ts-jest",
};

export default createJestConfig(config);
