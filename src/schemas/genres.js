const genreSchema = {
  name: {
    exists: {
      errorMessage: "should exist.",
    },
    isString: {
      errorMessage: "should be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 100,
      },
      errorMessage: "should be at least 3 to 100 characters",
    },
  },
};

module.exports = genreSchema;
