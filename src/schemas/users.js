const userSignupSchema = {
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
  email: {
    isEmail: {
      errorMessage: "should be an email.",
    },
  },
  password: {
    exists: {
      errorMessage: "should exist.",
    },
    isString: {
      errorMessage: "should be a string.",
    },
    isLength: {
      options: {
        min: 8,
        max: 255,
      },
      errorMessage: "should have length of 8 to 255",
    },
  },
};

const userLoginSchema = {
  email: {
    exists: {
      errorMessage: "should exist"
    },
    isEmail: {
      errorMessage: "should be an email.",
    },
  },
  password: {
    exists: {
      errorMessage: "should exist.",
    },
    isString: {
      errorMessage: "should be a string.",
    },
    isLength: {
      options: {
        min: 8,
        max: 255,
      },
      errorMessage: "should have length of 8 to 255",
    },
  },
};

module.exports = {
  userSignupSchema,
  userLoginSchema,
};
