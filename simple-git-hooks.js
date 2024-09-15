module.exports = {
  "pre-commit": "pnpm lint && pnpm format",
  "pre-push": "pnpm lint:fix && pnpm format:fix",
};
