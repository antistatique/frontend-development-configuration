export default {
  moduleDirectories: ['./node_modules', 'src'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.(spec|test).+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  setupFiles: [
    'dotenv/config'
  ],
  extensionsToTreatAsEsm: ['.ts','.tsx'],
};
