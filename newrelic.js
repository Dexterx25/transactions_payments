   /* File: newrelic.js */
   'use strict'
   /**
    * New Relic agent configuration.
    *
    * See lib/config/default.js in the agent distribution for a more complete
    * description of configuration variables and their potential values.
    */
   exports.config = {
     app_name: ['TransactionsPayments'],
     license_key: '16a22e2bbe0902cec6fe0c08af9353bfFFFFNRAL',
     distributed_tracing: {
      enabled: true,
    },
    logging: {
      level: 'trace',
    },
    application_logging: {
      enabled: true,
      forwarding: {
        enabled: true,
        max_samples_stored: 10000,
      },
    },
    /* ... rest of configuration .. */
   }