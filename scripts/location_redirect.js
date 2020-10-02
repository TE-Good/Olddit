/**
 * Auto changes the URL from www.reddit.com/.. to old.reddit.com/..
 * Last line of defence.
 */
// // Cannot use replace, owing to edge case of targeted word being in URL twice
// const currentLocation = window.location.href
// const locationSplit = currentLocation.split('/')
// // If we have navigated to the new reddit
// if (locationSplit[2] == "www.reddit.com") {
//   locationSplit[2] = "old.reddit.com"
//   const newlocation = locationSplit.join('/')
//   window.location.assign(newlocation)
// }