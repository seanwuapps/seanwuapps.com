import { Component, Host, h } from "@stencil/core";
import cdLogo from "../../../assets/img/cd-logo.svg";
@Component({
  tag: "page-home",
  styleUrl: "home.scss",
})
export class Home {
  private convo: { side: "left" | "right"; html: string }[] = [
    {
      side: "right",
      html: `<h4>🚪Knock knock!</h4>`,
    },
    {
      side: "left",
      html: `<p>Who dis?!</p>`,
    },
    {
      side: "right",
      html: `<p>💻 I'm a web developer in <a href="https://brandinsider.straitstimes.com/visitcanberra/8-interesting-facts-about-australias-capital-city/" target="_blank" rel="nofollow">🗺️Canberra, Australia</a>.</p>`,
    },
    {
      side: "right",
      html: `<p>🏢 I facilitate a development team here...</p>`,
    },
    {
      side: "right",
      html: `<p class="text-center"><a href="https://cordelta.digital" target="_blank" rel="nofollow"><img class="cd-logo" src="${cdLogo}" alt="Cordelta Digital"></a></p>`,
    },
    {
      side: "right",
      html: `<p>😅 Oh! Did I mention I'm not good at knock knock jokes?</p>`,
    },
  ];

  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Home" />

        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              {this.convo.map((item, i) => (
                <fade-in
                  left={item.side === "left"}
                  right={item.side === "right"}
                  delay={(i + 1) * 0.8 + "s"}
                >
                  <div class="row">
                    <sc-card
                      class={`speech-bubble ${item.side}`}
                      innerHTML={item.html}
                    ></sc-card>
                  </div>
                </fade-in>
              ))}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
