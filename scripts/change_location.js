// Cannot use replace, owing to edge case of targeted word being in URL twice
const currentLocation = window.location.href
const locationSplit = currentLocation.split('/')
locationSplit[2] = "old.reddit.com"
const newlocation = locationSplit.join('/')
window.location.assign(newlocation)