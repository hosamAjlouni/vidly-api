const movieSchema = {
  title: {
    exists: {
      errorMessage: "should exist.",
    },
    isString: {
      errorMessage: "should be a string",
    },
    isLength: {
      options: {
        min: 5,
        max: 255,
      },
      errorMessage: "should be at least 5 to 255 characters",
    },
  },
  genreId: {
    exists: {
      errorMessage: "should exist.",
    },
    isInt: {
      errorMessage: "should be an integer.",
    },
  },
  dailyRentalRate: {
    exists: {
      errorMessage: "should exist.",
    },
    isInt: {
      errorMessage: "should be an integer.",
    },
  },
  numberInStock: {
    exists: {
      errorMessage: "should exist",
    },
    isInt: {
      errorMessage: "should be an integer",
    },
  },
};

module.exports = movieSchema;
