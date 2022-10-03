// this config includes typescript specific settings
// and if you're not using typescript, you should remove `transform` property
module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: ['/src.*/*\\.spec\\.ts$'],
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    rootDir: 'src',
}
