import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Listen,
} from "@stencil/core";

@Component({
  tag: "fade-in",
  styleUrl: "fade-in.scss",
  shadow: true,
})
export class FadeIn {
  @Prop() up?: boolean = false;
  @Prop() left?: boolean = false;
  @Prop() right?: boolean = false;
  @Prop() down?: boolean = false;
  @Prop() delay?: string = "";
  @Prop() withScroll?: boolean = false; // trigger when scroll in view
  // withScroll  friends
  @Prop() offsetPx?: number = 0; // number of pixels
  @Prop() offsetVh?: number = 0; // number of vh
  @Prop() revert?: boolean = false;

  @State() animated: boolean = false;
  @State() loaded: boolean = false;

  @Element() el: HTMLElement;

  @Listen("scroll", { target: "window" })
  handleScroll() {
    this.animateIfIn();
  }

  componentWillLoad() {
    setTimeout(() => {
      this.animateIfIn();
      this.loaded = true;
    }, 100);
  }

  animateIfIn() {
    if (!this.el) {
      return;
    }
    if (this.animated && !this.revert) {
      return;
    }
    const { top, bottom } = this.el.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    let offset = 0;
    if (this.offsetPx !== 0) {
      offset = this.offsetPx;
    }
    const isIn = (top > 0 || bottom > 0) && top + offset < vHeight;
    if (isIn || !this.withScroll) {
      this.animated = true;
    } else {
      if (this.revert) {
        this.animated = false;
      }
    }
  }
  render() {
    const { up, left, right, animated, delay } = this;
    const styles = delay
      ? {
          transitionDelay: delay,
        }
      : null;
    return (
      <Host class={{ inner: true, up, left, right, animated }} style={styles}>
        <slot></slot>
      </Host>
    );
  }
}
