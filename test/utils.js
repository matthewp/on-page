utils = {
  click(el) {
    var window = el.ownerDocument.defaultView;
    var event = new window.MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    el.dispatchEvent(event);
  }
};
