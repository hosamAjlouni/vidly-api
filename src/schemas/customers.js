const movieSchema = {
  name: {
    exists: {
      errorMessage: "should exist.",
    },
    isString: {
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
  isGold: {
    isBoolean: {
      errorMessage: "should be a boolean.",
    },
  },
  phone: {
    exists: {
      errorMessage: "should exist.",
    },
    isPhone: {
      errorMessage: "should be a phone number.",
    },
    isLength: {
      options: {
        min: 10,
        max: 14,
      },
      errorMessage: "should have length of 10 to 14",
    },
  },
};

module.exports = movieSchema;
