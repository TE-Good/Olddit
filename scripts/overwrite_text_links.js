/**
 * Module takes all anchor tags in thread comments section and overwrites
 * href to redirect to `old.reddit.com`.
 */

// Ensure script runs if in thread
if (window.location.href.match('/comments/')) {

  // Grab all anchor tags
  const aTags = document.querySelectorAll('a')

  aTags.forEach(tag => {
    // Filter tags by domain name, and not including wiki pages
    if (tag.href.includes('www.reddit.com') && !tag.href.includes('wiki')) {
      // Replace href with old domain name
      const link = tag.href.replace('www.reddit.com', 'old.reddit.com')
      tag.href = link
    }
  })
}
