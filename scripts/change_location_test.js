// get all data-type="link"
const dataType = document.querySelectorAll('*[data-type="link"]')
const filteredLinks = []

dataType.forEach(link => {
  // then filter by data-url
  if (link.attributes.getNamedItem('data-url').value.includes('https://v.redd.it/')) {
    
    const currentUrl = link.attributes.getNamedItem('data-url').value
    const prefixURL = 'https://old.reddit.com'
    const permaURL = link.attributes.getNamedItem('data-permalink').value
    const combinedURL = `${prefixUrl}${permaUrl}`
    const output = { tag: link, currentUrl, prefixURL, permaURL, combinedURL}
    
    // if class includes title
    // if class is thumbnail
    // can use data-permalink for the suffix on URL

    filteredLinks.push(output)
  }
})
console.log({ filteredLinks })
