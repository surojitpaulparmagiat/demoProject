module.exports={
  "extends": ["eslint:recommended"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 2020, // Adjust based on your project's JavaScript version
    "sourceType": "module"
  },
  "env": {
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }] // Example: Enforce Prettier formatting
  }
}
