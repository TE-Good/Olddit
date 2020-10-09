/**
 * This module will filter the DOM articles for links which will redirect you to v.redd.it, 
 * and overwrite them with an old versioned link.
 */

// Ensure script doesn't runs if in thread
if (!window.location.href.match('/comments/')) {

  const dataTypeTitles = document.querySelectorAll('*[data-event-action="title"]')
  const dataTypeThumbnail = document.querySelectorAll('*[data-event-action="thumbnail"]')
  
  dataTypeTitles.forEach(title => replaceVReddItLinkHref(title))
  dataTypeThumbnail.forEach(thumbnail => replaceVReddItLinkHref(thumbnail))
}

/**
 * If the element.host is 'v.redd.it' then reassign the href
 * @param {object} element 
 */
function replaceVReddItLinkHref(element) {
  if (element.host === 'v.redd.it') element.href = findPermalink(element)
}

/**
 * Recursive function which searches up the DOM parent tree to retrieve the permalink URL
 * @param {object} element 
 */
function findPermalink(element) {
  const permalink = element.attributes.getNamedItem('data-permalink')
  if (permalink && permalink.value.includes('/comments/')) {
      return `https://old.reddit.com${permalink.value}`
  }
  return findPermalink(element.parentNode)
}
