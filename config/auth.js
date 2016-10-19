exports.default = {
  auth: api => {
    return {
      // ---------------------------------------------------------------------
      // Secret token to generate the JWT token
      // ---
      // This must be changed on the application configs.
      // ---------------------------------------------------------------------
      secret: 'thisMustBeChangedOnAppConfig',

      // ---------------------------------------------------------------------
      // Time until the token expires
      // ---
      // Expressed in seconds or a string describing a time span rauchg/ms
      // ---------------------------------------------------------------------
      expiresIn: '1 day',

      errors: {
        // don't expand this
        '_toExpand': false,

        // ---------------------------------------------------------------------
        // Token not provided
        // ---------------------------------------------------------------------
        tokenNotProvided: () => {
          return {
            code: 'token_not_provided',
            message: 'Token not provided'
          }
        },

        // ---------------------------------------------------------------------
        // Malformed token
        // ---------------------------------------------------------------------
        malformedToken: () => {
          return {
            code: 'malformed_token',
            message: 'The token is invalid'
          }
        },

        // ---------------------------------------------------------------------
        // Expired token
        // ---------------------------------------------------------------------
        expiredToken: () => {
          return {
            code: 'expired_token',
            message: 'The token was expired'
          }
        },

        // ---------------------------------------------------------------------
        // Wrong username or password
        // ---------------------------------------------------------------------
        invalidCredentials: () => {
          return {
            code: 'invalid_credentials',
            message: 'Invalid credentials'
          }
        },

        // ---------------------------------------------------------------------
        // User are disable
        // ---------------------------------------------------------------------
        userIsDisabled: () => {
          return {
            code: 'user_id_disabled',
            message: 'The user are disable'
          }
        }
      }
    }
  }
}
