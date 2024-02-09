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
     license_key: '123123',
     distributed_tracing: {
      enabled: true,
    },
    logging: {
      level: 'info',
    },
    application_logging: {
      enabled: true,
      forwarding: {
        enabled: true,
        max_samples_stored: 100,
      },
      filepath : require('path').join(process.cwd(), 'newrelic_agent.log'),
    },
    /* ... rest of configuration .. */
   }