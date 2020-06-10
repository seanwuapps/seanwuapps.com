import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "page-title",
  styleUrl: "page-title.scss",
})
export class Title {
  @Prop() heroImage?: string;
  render() {
    const { heroImage } = this;
    return (
      <Host>
        {heroImage && (
          <img class="page-title-bg" src={heroImage} alt="Hero image" />
        )}

        <div class="spacer-4"></div>
        <fade-in left withScroll revert>
          <div class="row">
            <div class="col-10 offset-1 col-md-8 offset-md-3 col-lg-7 offset-lg-4">
              <slot></slot>
            </div>
          </div>
        </fade-in>
        <div class="spacer-6"></div>
      </Host>
    );
  }
}
