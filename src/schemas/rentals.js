const movieSchema = {
  dateOut: {
    exists: {
      errorMessage: "should exist.",
    },
    isDate: {
      errorMessage: "should be a string",
    },
    isLength: {
      options: {
        min: 1,
        max: 255,
      },
      errorMessage: "should be at least 1 to 255 characters",
    },
  },
  movieId: {
    exists: {
      errorMessage: "should exist.",
    },
    isInt: {
      errorMessage: "should be an integer.",
    },
  },
  customerId: {
    exists: {
      errorMessage: "should exist.",
    },
    isInt: {
      errorMessage: "should be an integer.",
    },
  },
};

module.exports = movieSchema;
