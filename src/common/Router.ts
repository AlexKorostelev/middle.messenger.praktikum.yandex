import Block from './Block';
import { ILinkProps } from '../components/Link/link';

function isEqual(lhs: any, rhs: any) {
  return lhs === rhs;
}

function render(query: any, block: any) {
  const root = document.querySelector(query);
  root.append(block.getContent());

  return root;
}

class Route {
  private _pathname: string;

  private _blockClass: typeof Block;

  private _block: Block | null;

  private _props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);

      return;
    }

    this._block.show();
  }
}

class Router {
  private routes: Route[] = [];

  private history: any = window.history;

  private _currentRoute: Route | null = null;

  private static __instance: Router;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: '#app' });

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      // (this._currentRoute)
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default Router;

export interface WithRouterProps {
  router: Router;
}

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component<ILinkProps> {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: new Router() });
    }
  };
}
