module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation
        "style", // Formatting, missing semicolons, etc.
        "refactor", // Code change that neither fixes a bug nor adds a feature
        "perf", // Performance improvement
        "test", // Adding tests
        "chore", // Maintenance
        "revert", // Revert to a commit
        "build", // Build system or dependencies
        "ci", // CI configuration
      ],
    ],
    "subject-case": [0], // Allow any case for subject
  },
};
