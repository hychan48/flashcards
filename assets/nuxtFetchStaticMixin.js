/**
 * First Attempt
 *
 * 1. nuxt fetch is called everytime. i can use keep-alive.
 *
 * 2. Using the store after the fetch would cache the results as well
 *
 * Lifecycle:
 * created, fetch, mounted
 * pending true to false
 *
 * fetch loads faster initially
 * import static is faster afterwards
 * 3. using the store would probably be faster (Keep-alive)?
 *
 * it
 */

const nuxtFetchStaticMixin = {}


/**
 * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env/
 * nuxt.config.js
 *
 * axios: baseURL
 * nuxt is baseUrl
 *
 */
