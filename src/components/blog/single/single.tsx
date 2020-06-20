import { Component, Host, h, Prop, State } from "@stencil/core";
import { contentClient } from "../../../helpers/contentful";
// import marked from "marked";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

@Component({
  tag: "blog-single",
  styleUrl: "single.scss",
})
export class Single {
  @Prop() match: any;

  @State() post: any;
  @State() loading: boolean = true;

  private includes: any;

  private options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (!this.includes) {
          return;
        }
        const imgId = node.data?.target?.sys?.id;
        if (!imgId) {
          return;
        }
        const image = this.includes.Asset.find(
          (asset) => asset.sys.id === node.data.target.sys.id
        );
        if (!image) {
          return;
        }
        return `<img
          src=${image?.fields?.file?.url}
          alt=${image?.fields?.title}
        />`;
      },
    },
  };

  async componentWillLoad() {
    await contentClient
      .getPostBySlug(this.match.params.slug)
      .then((response) => {
        if (!response.items.length) {
          return;
        }
        this.includes = response.includes;
        let post = response.items[0];
        const imgId = post.fields?.heroImage?.sys?.id;
        if (imgId) {
          const heroImage = response.includes.Asset.find(
            (asset) => asset.sys.id === imgId
          );
          post.heroImage = heroImage;
        }
        post.renderedBody = documentToHtmlString(
          post.fields.content,
          this.options
        );
        this.post = post;
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
        <seo-tags
          pageTitle={`${this.post.fields.title} | Thoughts | Sean Wu`}
          description={this.post.fields.description}
          image={
            this.post.heroImage
              ? this.post.heroImage.fields.file.url
              : "/assets/img/logo.png"
          }
        ></seo-tags>
        <page-title heroImage={this.post?.heroImage?.fields?.file?.url}>
          <h1>{this.post.fields.title}</h1>
        </page-title>
        <div class="container">
          <div class="blog-content" innerHTML={this.post.renderedBody}></div>
        </div>
      </Host>
    );
  }
}
