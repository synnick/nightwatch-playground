module.exports = {
    abortOnAssertionFailure : true,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval : 300,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout : 5000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned : true,

    // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout : 10000,

    default: {
        launchUrl: 'https://google.com',
    },

    chrome: {
        launchUrl: 'https://google.com',
    },
};
