import fs from "fs";
import path from "path";

const css = fs.readFileSync(
  path.join(__dirname, "..", "public", "css", "style.css"),
  "utf8"
);
const servicesComponent = fs.readFileSync(
  path.join(__dirname, "components", "services.jsx"),
  "utf8"
);
const headerComponent = fs.readFileSync(
  path.join(__dirname, "components", "header.jsx"),
  "utf8"
);
const appCss = fs.readFileSync(path.join(__dirname, "App.css"), "utf8");

const blockFor = (selector) => {
  const start = css.indexOf(`${selector} {`);
  if (start === -1) {
    return "";
  }

  const end = css.indexOf("\n}", start);
  return css.slice(start, end + 2);
};

describe("responsive stylesheet", () => {
  test("defines mobile rules for hero and navigation", () => {
    expect(css).toContain("@media (max-width: 767px)");
    expect(css).toContain(".intro h1");
    expect(css).toContain("font-size: 28px");
    expect(css).toContain("header .intro-text");
    expect(css).toContain("padding: 0");
    expect(css).toContain("padding: 30px 16px");
    expect(css).toContain("padding: 30px 24px");
    expect(css).toContain("min-height: 34vh");
    expect(css).not.toContain("padding-bottom: 64px");
    expect(css).toContain("#menu a.navbar-brand");
    expect(css).toContain("font-size: 17px");
  });

  test("keeps the mobile hero compact and removes the learn more action", () => {
    expect(headerComponent).not.toContain("Learn More");
    expect(headerComponent).not.toContain('href="#features"');
    expect(css).toContain("max-width: 680px");
    expect(css).toContain("max-width: 92%");
    expect(css).toContain("text-wrap: balance");
    expect(css).toContain("min-height: 68vh");
    expect(css).toContain("margin-bottom: 0");
    expect(css).toContain(".intro .overlay");
    expect(css).toContain("align-items: flex-end");
    expect(css).toContain("background-position: center bottom");
    expect(headerComponent).toContain('className="intro-content"');
    expect(blockFor(".intro .overlay")).toContain(
      "min-height: calc(100vh - 82px)"
    );
    expect(blockFor(".intro .overlay")).toContain("display: flex");
    expect(blockFor(".intro .overlay")).toContain("align-items: flex-end");
    expect(blockFor(".intro .overlay")).not.toContain("backdrop-filter");
    expect(blockFor(".intro .container")).toContain("width: 100%");
    expect(blockFor(".intro .container")).toContain("padding-left: 0");
    expect(blockFor(".intro .container")).toContain("padding-right: 0");
    expect(blockFor(".intro .row")).toContain("margin-left: 0");
    expect(blockFor(".intro .row")).toContain("margin-right: 0");
    expect(blockFor("header .intro-text")).not.toContain("backdrop-filter");
    expect(blockFor("header .intro-text")).toContain("width: 100%");
    expect(blockFor("header .intro-text")).toContain("float: none");
    expect(blockFor("header .intro-text")).toContain("margin-left: 0");
    expect(blockFor("header .intro-text")).toContain("padding: 0");
    expect(blockFor("header .intro-text")).toContain("display: flex");
    expect(blockFor("header .intro-text")).toContain("justify-content: center");
    expect(blockFor(".intro-content")).toContain("backdrop-filter: blur(3px)");
    expect(blockFor(".intro-content")).toContain(
      "-webkit-backdrop-filter: blur(3px)"
    );
    expect(blockFor(".intro-content")).toContain(
      "background: rgba(0, 0, 0, 0.22)"
    );
    expect(blockFor(".intro-content")).toContain("display: flex");
    expect(blockFor(".intro-content")).toContain("align-items: center");
    expect(blockFor(".intro-content")).toContain("justify-content: center");
    expect(blockFor(".intro-content")).toContain("flex-direction: column");
    expect(blockFor(".intro-content")).toContain("text-align: center");
    expect(blockFor(".intro h1")).toContain("font-size: 54px");
    expect(blockFor(".intro p")).toContain("font-size: 18px");
    expect(blockFor(".intro-content")).toContain("width: 100%");
    expect(blockFor(".intro-content")).toContain("border-radius: 0");
    expect(blockFor(".intro-content")).toContain(
      "min-height: calc((100vh - 82px) / 2)"
    );
    expect(blockFor(".intro-content")).toContain("padding: 36px 34px 38px");
    expect(blockFor(".intro-content p")).toContain("margin-bottom: 0");
  });

  test("uses compact wrapping service area badges instead of oversized gaps", () => {
    expect(css).toContain("gap: 12px");
    expect(css).toContain("font-size: 18px");
    expect(css).toContain("flex: 1 1 140px");
    expect(css).not.toContain("font-size: 18x");
    expect(css).not.toContain("gap: 95px");
  });

  test("keeps images and sections stable on small screens", () => {
    expect(css).toContain(".portfolio-item img");
    expect(css).toContain("width: 100%");
    expect(css).toContain("@media (min-width: 768px) and (max-width: 991px)");
    expect(css).toContain("#features,");
    expect(css).toContain("#portfolio");
  });

  test("lays out service cards responsively across mobile, tablet, and desktop", () => {
    expect(servicesComponent).toContain(
      'className="col-xs-12 col-sm-6 col-md-4 service-card"'
    );
    expect(css).toContain("#services .row");
    expect(css).toContain("display: flex");
    expect(css).toContain("#services .service-card");
    expect(css).toContain("float: none");
    expect(css).toContain("#services .service-card-inner");
    expect(css).toContain("min-height: 100%");
    expect(css).toContain("#services .service-desc p");
    expect(css).toContain("overflow-wrap: anywhere");
  });

  test("prevents horizontal overflow on current iPhone viewport widths", () => {
    expect(appCss).toContain("@media screen and (max-width: 430px)");
    expect(appCss).toContain("width: 100%");
    expect(appCss).toContain("max-width: 100%");
    expect(appCss).not.toContain("width: 110%");
    expect(appCss).not.toContain("width: 111%");
  });
});
