// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';
import { WithRouterProps } from '../../common/Router';

interface ILinkProps extends WithRouterProps {
  to: string;
}

export class Link extends Block<ILinkProps> {
  constructor({ to, router }: ILinkProps) {
    super({
      to,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          router.go(to);
        },
      },
    });
  }

  protected render() {
    // language=hbs
    return '<a class="base-link" href="{{ to }}"></a>';
  }
}
