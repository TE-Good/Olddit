/**
 * This module will filter the DOM articles for links which will redirect you to v.redd.it, 
 * and overwrite them with an old versioned link.
 */

// Ensure script doesn't runs if in thread
if (!window.location.href.match('/comments/')) {

  // Get all articles
  const dataType = document.querySelectorAll('*[data-type="link"]')

  dataType.forEach(link => {
    // Filter by minified video links
    if (link.attributes.getNamedItem('data-url').value.includes('https://v.redd.it/')) {
      // Get the old URL
      const permalinkURL = link.attributes.getNamedItem('data-permalink').value
      const oldRedditURL = `https://old.reddit.com${permalinkURL}`
      
      // Replace all thumbnail hrefs
      const thumbnail = link.childNodes.item(3)
      thumbnail.href = oldRedditURL
      
      // Replace all title hrefs
      const title = link.childNodes.item(4).childNodes.item(0).childNodes.item(0).childNodes.item(0)
      title.href = oldRedditURL
    }
  })
}
