import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-projects",
  styleUrl: "projects.scss",
})
export class Projects {
  private projects: {
    title: string;
    subtitle: string;
    description: string;
    url?: string;
  }[] = [
    {
      title: "WePet",
      subtitle: "Social network for dogs.",
      description: `
      <p>A social network for dog lovers to connect and share their pet memories.</p>
      <p></p>
        <ul>
        <li>Built on Laravel</li>
        <li>Inspired by Instagram</li>
        </ul>`,
      url: "https://wepet.net",
    },
    {
      title: "NFC Time Tracker",
      subtitle: "Don't waste your time on time management",
      description: `
      <p>Combined NFC technology with web technology.</p>
      <p>Out comes a fun way to manage your time more easily and efficiently.</p>
      `,
      url: "https://nfc-time-tracker.web.app/",
    },
  ];
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="My projects | Sean Wu" />
        <div class="spacer-4"></div>
        <fade-in left withScroll revert>
          <div class="row">
            <div class="col-10 offset-1 col-md-8 offset-md-3 col-lg-7 offset-lg-4">
              <h1>Stuff I built</h1>
            </div>
          </div>
        </fade-in>
        <div class="container">
          <fade-in withScroll up revert>
            <h2>Learning new technology by doing it.</h2>
            <p>
              It's a known fact that developers don't finish their side
              projects, so don't judge.
            </p>
          </fade-in>

          {this.projects.map((item) => (
            <fade-in up withScroll class="project">
              <div class="card">
                <sc-card>
                  <h2>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                </sc-card>
              </div>
              <div class="text">
                <div class="description" innerHTML={item.description}></div>

                {item.url && (
                  <div class="link">
                    <sc-button href={item.url} target="_blank" rel="noreferrer">
                      See it in action
                    </sc-button>
                  </div>
                )}
              </div>
            </fade-in>
          ))}
        </div>
      </Host>
    );
  }
}
