import fs from "fs";
import path from "path";

const css = fs.readFileSync(
  path.join(__dirname, "..", "public", "css", "style.css"),
  "utf8"
);
const readComponent = (name) =>
  fs.readFileSync(path.join(__dirname, "components", name), "utf8");
const appCss = fs.readFileSync(path.join(__dirname, "App.css"), "utf8");

const blockFor = (selector) => {
  const start = css.indexOf(`${selector} {`);
  if (start === -1) {
    return "";
  }

  const end = css.indexOf("\n}", start);
  return css.slice(start, end + 2);
};

const mobileCss = css.slice(css.indexOf("@media (max-width: 767px)"));

describe("responsive stylesheet", () => {
  test("defines tablet and mobile breakpoints", () => {
    expect(css).toContain("@media (min-width: 768px) and (max-width: 991px)");
    expect(css).toContain("@media (max-width: 767px)");
  });

  test("hero shows text and photo side by side, stacked on mobile", () => {
    const header = readComponent("header.jsx");

    expect(header).toContain('className="container intro-grid"');
    expect(header).toContain('href="tel:+905438543357"');
    expect(header).toContain('href="https://wa.me/905438543357"');
    expect(blockFor(".intro-grid")).toContain("grid-template-columns: 1fr 1fr");
    expect(blockFor(".intro-media img")).toContain("height: auto");
    expect(blockFor(".intro-media img")).toContain("object-fit: cover");
    expect(mobileCss).toContain("grid-template-columns: 1fr;");
    expect(mobileCss).toContain("font-size: 32px");
  });

  test("card grids collapse on smaller screens", () => {
    expect(blockFor(".feature-grid")).toContain("repeat(4, 1fr)");
    expect(blockFor(".service-grid")).toContain("repeat(3, 1fr)");
    expect(blockFor(".portfolio-items")).toContain("repeat(4, 1fr)");
    expect(mobileCss).toContain(".service-grid,\n  .testimonial-list {\n    grid-template-columns: 1fr;");
    expect(mobileCss).toContain(".portfolio-items {\n    grid-template-columns: 1fr 1fr;");
  });

  test("service cards link to their landing pages", () => {
    const services = readComponent("services.jsx");

    expect(services).toContain('className="service-card"');
    expect(services).toContain("d.link");
    expect(blockFor(".service-card p")).toContain("overflow-wrap: anywhere");
  });

  test("gallery uses browser-renderable images with fixed ratio", () => {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "data.json"), "utf8")
    );

    data.Gallery.forEach((item) => {
      expect(item.smallImage).toMatch(/\.jpg$/);
      expect(
        fs.existsSync(path.join(__dirname, "..", "public", item.smallImage))
      ).toBe(true);
    });
    expect(blockFor(".portfolio-item img")).toContain("aspect-ratio: 3 / 4");
  });

  test("keeps service area chips wrapping", () => {
    expect(blockFor(".service-areas")).toContain("flex-wrap: wrap");
    expect(blockFor(".service-areas")).toContain("gap: 12px");
  });

  test("shows a floating WhatsApp button", () => {
    expect(readComponent("contact.jsx")).toContain('className="whatsapp-float"');
    expect(blockFor(".whatsapp-float")).toContain("position: fixed");
  });

  test("prevents horizontal overflow on current iPhone viewport widths", () => {
    expect(appCss).toContain("@media screen and (max-width: 430px)");
    expect(appCss).toContain("max-width: 100%");
    expect(appCss).not.toContain("width: 110%");
  });
});
