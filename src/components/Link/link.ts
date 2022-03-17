// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';
import { WithRouterProps } from '../../common/Router';

export interface ILinkProps extends WithRouterProps {
  to: string;
  text: string;
  linkHandler: Function;
}

export class Link extends Block<ILinkProps> {
  constructor({
    to, text, linkHandler, router,
  }: ILinkProps) {
    super({
      to,
      text,
      linkHandler,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          if (linkHandler) {
            linkHandler();
          }
          router.go(to);
        },
      },
    });
  }

  protected render() {
    // language=hbs
    return '<a class="base-link" href="{{ to }}">{{ text }}</a>';
  }
}
