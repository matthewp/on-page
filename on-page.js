(function(){

class OnPage extends HTMLElement {
  static defineRoute(route, onPage) {
    var routes = this.routes;
    if(!routes) {
      routes = this.routes = {};
    }
    var handlers = routes[route];
    if(!handlers) {
      handlers = routes[route] = [];
      page(route, ctx => this.handleRoute(route, ctx));
      page();
    }
    handlers.push(onPage);

    if(onPage.default) {
      page.show(route);
    }
  }

  static handleRoute(route, ctx) {
    var handlers = this.routes[this.currentRoute] || [];
    handlers.forEach(onPage => onPage.onExit());

    handlers = this.routes[route];
    this.currentRoute = route;
    handlers.forEach(onPage => onPage.onEnter(ctx));
  }

  get default() {
    return this.getAttribute('default') != null;
  }

  set default(v) {
    this.setAttribute('default', '');
  }

  get route() {
    return this.getAttribute('route');
  }

  set route(val) {
    this.setAttribute('route', val);
  }

  connectedCallback() {
    Bram.onChildren(this, () => this.setupRoute());
  }

  setupRoute() {
    if(!this.routesDefined) {
      this.routesDefined = true;
      OnPage.defineRoute(this.route, this);
    }
  }

  onEnter(ctx) {
    this.templateChildren = [].slice.call(this.childNodes);

    var template = this.querySelector('template');
    var hydrate = Bram.template(template);
    var model = Bram.model(ctx);
    var tree = hydrate(model);
    this.appendChild(tree);
  }

  onExit() {
    this.clearChildren();
  }

  clearChildren() {
    var child = this.firstChild, cur;
    while(child) {
      cur = child;
      child = cur.nextSibling;
      if(this.templateChildren.indexOf(cur) === -1) {
        this.removeChild(cur);
      }
    }
  }
}

customElements.define('on-page', OnPage);

})();
