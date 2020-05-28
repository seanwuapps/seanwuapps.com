import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-about",
  styleUrl: "about.scss",
})
export class About {
  render() {
    return (
      <Host>
        <div class="container text-center">
          <div class="row">
            <div class="col-12 col-md-6 offset-md-3">
              <sc-card bordered>
                <h2>Hi</h2>
                <p>I'm a lazy web developer living in Canberra, Australia.</p>
                <p>I love using technology to simplify life</p>
              </sc-card>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
