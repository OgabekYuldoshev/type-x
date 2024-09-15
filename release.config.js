module.exports = {
  branches: ["main"], // The branch you want to release from
  repositoryUrl: "https://github.com/OgabekYuldoshev/type-x", // Your GitHub repo
  plugins: [
    "@semantic-release/commit-analyzer", // Analyze commit messages
    "@semantic-release/release-notes-generator", // Generate release notes
    "@semantic-release/changelog", // Update changelog
    "@semantic-release/npm", // Publish to npm
    "@semantic-release/git", // Push version commits and tags
  ],
  pkgRoot: "dist", // If you're building your packages, define where your package.json is located (optional)
  tagFormat: "${version}", // Define the format for the Git tag
};
