import { Component, Host, h, Prop, State } from "@stencil/core";
import { contentClient } from "../../../helpers/contentful";
import marked from "marked";

@Component({
  tag: "blog-single",
  styleUrl: "single.scss",
})
export class Single {
  @Prop() match: any;

  @State() post: any;
  @State() loading: boolean = true;

  async componentWillLoad() {
    contentClient
      .getPostBySlug(this.match.params.slug)
      .then(({ items }) => {
        if (!items.length) {
          return;
        }
        this.post = items[0];
        this.post.renderedBody = marked(this.post.fields.body);
        console.log({ post: this.post });
      })
      .then(() => {
        this.loading = false;
      });
  }

  render() {
    if (this.loading) {
      return <page-loading></page-loading>;
    }
    if (!this.post) {
      return <page-notfound></page-notfound>;
    }
    return (
      <Host>
        <div class="container">
          <page-title>
            <h1>{this.post.fields.title}</h1>
          </page-title>
          <div innerHTML={this.post.renderedBody}></div>
        </div>
      </Host>
    );
  }
}
