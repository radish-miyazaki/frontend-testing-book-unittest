export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: { "^.+\\.(ts|tsx)$": ["esbuild-jest", { sourcemap: true }] },
};