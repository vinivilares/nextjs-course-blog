const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Marcus",
        mongodb_password: "JAKLq7Ash96zqeBV",
        mongodb_cluster: "cluster0",
        mongodb_database: "nextjs-course-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Marcus",
      mongodb_password: "JAKLq7Ash96zqeBV",
      mongodb_cluster: "cluster0",
      mongodb_database: "nextjs-course-blog",
    },
  };
};
