/**
 * Store Index.. just email for now..
 */

const defaultPageTitle = "Flashcards"
export const state = () => ({
  pageTitle:"",
})
export const getters = {
  //i can totally just make this.. need to update notes
  email(state) {
    return state.email;
  },
}
export const mutations = {

  clearPageTitle(state) {
    state.pageTitle = defaultPageTitle;
  },


}
