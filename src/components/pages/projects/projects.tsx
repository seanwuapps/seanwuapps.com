import { Component, Host, h } from "@stencil/core";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  url?: string;
}
@Component({
  tag: "page-projects",
  styleUrl: "projects.scss",
})
export class Projects {
  private projects: Project[] = [
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
    {
      title: "Soft Components",
      subtitle: "Neumorphism web components",
      description: `
      <p>A set of common components based on neumorphic design.</p>
      `,
      url: "https://soft-components-docs.web.app/",
    },
  ];

  projectCardContent(item: Project) {
    return (
      <div>
        <h2>{item.title}</h2>
      </div>
    );
  }

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
        <div class="spacer-6"></div>
        <div class="container">
          <fade-in withScroll up revert>
            <h2>I believe in learning a technology by doing it.</h2>
            <p>
              I like the feeling of making things work, so instead of thinking
              about what should I learn first, I encourage people to think bout
              what they want to build first.
            </p>
            <p>
              Once you have a goal, the tech (the language of choice, the
              framework, the ecosystem, etc etc) is just the tool to help you
              reach that goal.
            </p>

            <p>
              In the process of making a thing, always keep an eye out for the
              latest tech out there that might solve the problem you're having
              now. If there's a tool, learn to use it.
            </p>

            <p>That's the most effective way of learning in my opinion.</p>
            <p>
              <em>
                It's a known fact that developers don't finish their side
                projects, so don't judge.
              </em>
            </p>
          </fade-in>
          <div class="spacer-8"></div>
          {this.projects.map((item, i) => (
            <div class="project">
              <fade-in offsetPx={240} revert withScroll class="bg">
                {item.title}
              </fade-in>
              <fade-in offsetPx={240} revert withScroll class="card">
                {item.url ? (
                  <sc-button href={item.url} target="_blank" rel="noreferrer">
                    {this.projectCardContent(item)}
                  </sc-button>
                ) : (
                  <sc-card>{this.projectCardContent(item)}</sc-card>
                )}
              </fade-in>
              <fade-in
                offsetPx={240}
                revert
                withScroll
                left={i % 2 === 0}
                right={i % 2 !== 0}
                class="text"
              >
                <h3>{item.subtitle}</h3>
                <div class="description" innerHTML={item.description}></div>
              </fade-in>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
