/**
 * This module goes through the DOM while it loads and removes the 
 * `GET NEW REDDIT` button before it renders.
 * 
 * Taken from https://stackoverflow.com/questions/32533580/deleting-dom-elements-before-the-page-is-displayed-to-the-screen-in-a-chrome-ex
 */

const DEL_SELECTOR = '#redesign-beta-optin-btn';

const observer = new MutationObserver(onMutation);
// in case the content script was injected after the page is partially loaded
onMutation([{addedNodes: [document.documentElement]}]);
observe();

function onMutation(mutations) {
  const toRemove = [];
  for (const {addedNodes} of mutations) {
    for (const n of addedNodes) {
      if (n.tagName) {
        if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {
          toRemove.push(...n.querySelectorAll(DEL_SELECTOR));
        }
      }
    }
  }
  if (toRemove.length) {
    observer.disconnect();
    for (const el of toRemove) el.remove();
    observe();
  }
}

function observe() {
  observer.observe(document, {
    subtree: true,
    childList: true,
  });
}
