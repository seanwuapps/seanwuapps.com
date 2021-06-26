import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "home.scss",
})
export class Home {
  private convo: { side: "left" | "right"; html: string }[] = [
    {
      side: "right",
      html: `<p>🚪<strong>KNOCK KNOCK!</strong></p>`,
    },
    {
      side: "left",
      html: `<p>Who dis?!</p>`,
    },
    {
      side: "right",
      html: `<p>💻 I'm a <a href="/about">full-stack web developer</a> in 🗺️Canberra, Australia.</p>`,
    },
    {
      side: "right",
      html: `<p>🎥 I make YouTube videos about the web industry by interviewing the <a href="https://www.youtube.com/channel/UCPDcvDTJvV0DBRnUatHaOgA" target="_blank" rel="noreferrer">Stars Behind The Browser</a>.</p>`,
    },
    {
      side: "left",
      html: `<p>You're really not good at knock-knock jokes, y'know</p>`,
    },
    {
      side: "right",
      html: `<p>😅 Yeah, I know, sorry, I'm a dad.</p>`,
    },
  ];

  render() {
    return (
      <Host>
        <seo-tags
          pageTitle="Hi there! I'm Sean"
          description="Sean Wu, the web dev with coffee addiction"
        ></seo-tags>
        <stencil-route-title pageTitle="Hi there! I'm Sean" />

        <div class="container">
          <div class="row">
            <div class="col-10 offset-1 col-md-8 offset-md-2">
              {this.convo.map((item, i) => (
                <fade-in
                  left={item.side === "left"}
                  right={item.side === "right"}
                  delay={i * 1 + "s"}
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
