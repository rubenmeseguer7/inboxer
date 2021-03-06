function $(selector, context = document) {
  return context.querySelector(selector);
}

function $$(selector, context = document) {
  return context.querySelectorAll(selector);
}

function createEvent(type) {
  return new MouseEvent(type, {
    view: window,
    bubbles: true,
    cancelable: true,
  });
}

function sendClick(el) {
  el.dispatchEvent(createEvent('mousedown'));
  el.dispatchEvent(createEvent('click'));
}

function sendNotification(notification) {
  const { title, body, icon } = notification;
  return new Notification(title, { body, icon });
}

function ancestor(el, selector) {
  if (el.webkitMatchesSelector(selector)) {
    return el;
  }
  return ancestor(el.parentNode, selector);
}

module.exports = {
  $,
  $$,
  createEvent,
  sendClick,
  sendNotification,
  ancestor,
};
