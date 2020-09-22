const currentLocation = window.location.href
const newlocation = currentLocation.replace('https://www.reddit.com', 'https://old.reddit.com')
window.location.assign(newlocation)