/**
 * Store Index.. just email for now..
 */

const defaultPageTitle = "Flashcards"
export const state = () => ({
  pageTitle:defaultPageTitle,
})
export const getters = {
  //i can totally just make this.. need to update notes
  pageTitle(state) {
    return state.pageTitle;
  },
}
export const mutations = {

  setDefaultPageTitle(state) {
    state.pageTitle = defaultPageTitle;
  },
  setPageTitle(state,payload) {
    state.pageTitle = payload;
  },


}
