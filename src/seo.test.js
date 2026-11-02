import fs from "fs";
import path from "path";

const readProjectFile = (...segments) =>
  fs.readFileSync(path.join(__dirname, "..", ...segments), "utf8");

describe("local SEO", () => {
  test("uses yikamahizmetleri.com as the canonical production domain", () => {
    const packageJson = JSON.parse(readProjectFile("package.json"));
    const indexHtml = readProjectFile("public", "index.html");
    const sitemap = readProjectFile("public", "sitemap.xml");
    const robots = readProjectFile("public", "robots.txt");

    expect(packageJson.homepage).toBe("https://yikamahizmetleri.com");
    expect(indexHtml).toContain(
      '<link rel="canonical" href="https://yikamahizmetleri.com/" />'
    );
    expect(sitemap).toContain("<loc>https://yikamahizmetleri.com/</loc>");
    expect(robots).toContain(
      "Sitemap: https://yikamahizmetleri.com/sitemap.xml"
    );
  });

  test("publishes local service metadata and visible service-area copy", () => {
    const indexHtml = readProjectFile("public", "index.html");
    const data = JSON.parse(readProjectFile("src", "data", "data.json"));

    expect(indexHtml).toContain(
      "Tuzla, Gebze, Pendik, Kartal, Maltepe, Bostancı, Kadıköy ve Ümraniye"
    );
    expect(indexHtml).toContain('"@type": "LocalBusiness"');
    expect(indexHtml).toContain("+90 543 854 3357");
    expect(data.Contact.serviceAreaText).toContain("Tuzla");
    expect(data.Contact.serviceAreaText).toContain("Ümraniye");
  });

  test("keeps broader service and district keywords in the page metadata", () => {
    const indexHtml = readProjectFile("public", "index.html");

    [
      "koltuk temizleme",
      "buharlı koltuk yıkama",
      "yatak yıkama",
      "sandalye yıkama",
      "stor perde yıkama",
      "leke çıkarma",
      "koku giderme",
      "Gebze halı yıkama",
      "Tuzla halı yıkama",
      "Kadıköy halı yıkama",
      "Ümraniye halı yıkama",
      "Bostancı koltuk temizleme"
    ].forEach((keyword) => {
      expect(indexHtml).toContain(keyword);
    });
  });
});

describe("crawlable content", () => {
  test("ships readable content and icons without JavaScript", () => {
    const indexHtml = readProjectFile("public", "index.html");

    expect(indexHtml).not.toContain('<div id="root"></div>');
    expect(indexHtml).toContain("<h1>Tuzla Halı ve Koltuk Yıkama Hizmetleri</h1>");
    expect(indexHtml).toContain('href="/img/favicon-48.png"');
    expect(indexHtml).toContain('"@type": "WebSite"');
    expect(
      fs.existsSync(path.join(__dirname, "..", "public", "img", "favicon-48.png"))
    ).toBe(true);
    expect(
      fs.existsSync(path.join(__dirname, "..", "public", "404.html"))
    ).toBe(true);
  });
});

describe("service landing pages", () => {
  const slugs = [
    "koltuk-yikama",
    "hali-yikama",
    "arac-koltugu-yikama",
    "yatak-temizligi",
    "ofis-koltugu-temizligi",
  ];

  test.each(slugs)("%s has its own page, canonical and sitemap entry", (slug) => {
    const page = readProjectFile("public", slug, "index.html");
    const sitemap = readProjectFile("public", "sitemap.xml");
    const indexHtml = readProjectFile("public", "index.html");

    expect(page).toContain(
      `<link rel="canonical" href="https://yikamahizmetleri.com/${slug}/" />`
    );
    expect(page).toContain("<h1>");
    expect(sitemap).toContain(`<loc>https://yikamahizmetleri.com/${slug}/</loc>`);
    expect(indexHtml).toContain(`href="/${slug}/"`);
  });
});
