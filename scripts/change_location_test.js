// get all data-type="link"
const dataType = document.querySelectorAll('*[data-type="link"]')
const filteredLinks = []
const filteredTitles = []

dataType.forEach(link => {
  // then filter by data-url
  if (link.attributes.getNamedItem('data-url').value.includes('https://v.redd.it/')) {
    // Get the old URL
    const permalinkURL = link.attributes.getNamedItem('data-permalink').value
    const oldRedditURL = `https://old.reddit.com${permalinkURL}`
    
    // Replace all thumbnail hrefs
    const thumbnail = link.childNodes.item(3)
    thumbnail.href = oldRedditURL
    console.log({thumbnail})
    
    // TASK3 - FIND ALL HREFS FOR TITLE
    // TASK4 - IF THERE IS A RAW HYPERLINK ANYWHERE IN TEXT ON THE PAGE, MAKE SURE TO REPLACE IT (MIGHT NEED REGEX)
    
    const output = { tag: link, combinedURL}
    filteredLinks.push(output)
  }
})
console.log({ filteredLinks })
