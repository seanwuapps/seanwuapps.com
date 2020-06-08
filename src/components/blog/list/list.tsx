import { Component, Host, h, State } from "@stencil/core";
import { contentClient } from "../../../helpers/contentful";

@Component({
  tag: "blog-list",
  styleUrl: "list.scss",
})
export class List {
  @State() posts = [];
  async componentWillLoad() {
    const response: any = await contentClient.getEntries({
      content_type: "blogPost",
      order: "sys.updatedAt",
    });
    this.posts = response.items.map((item) => {
      const imgId = item.fields.heroImage.sys.id;
      const heroImage = response.includes.Asset.find(
        (asset) => asset.sys.id === imgId
      );

      return {
        ...item,
        heroImage,
      };
    });
  }
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Thoughts | Sean Wu" />
        <page-title>
          <h1>My thoughts</h1>
        </page-title>
        <div class="container">
          <div class="blog-list-grid">
            {this.posts.length > 0 ? (
              this.posts.map((post) => (
                <div class="blog-list-item">
                  <sc-card>
                    <h2>{post.fields.title}</h2>

                    <p>{post.fields.description}</p>
                    {post?.heroImage?.fields?.file?.url ? (
                      <img
                        class="blog-list-item__hero"
                        src={post?.heroImage?.fields?.file?.url}
                      />
                    ) : null}
                  </sc-card>
                </div>
              ))
            ) : (
              <page-loading></page-loading>
            )}
          </div>
          <div class="spacer-4"></div>
        </div>
        <div class="spacer-6"></div>
      </Host>
    );
  }
}
