module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|html)$":
      "jest-transform-stub",
  },
  setupFilesAfterEnv: ["jest-localstorage-mock"],
};
