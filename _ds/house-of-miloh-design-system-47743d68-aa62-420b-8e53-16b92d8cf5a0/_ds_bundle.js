/* @ds-bundle: {"format":4,"namespace":"HouseOfMilohDesignSystem_47743d","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"NavLink","sourcePath":"components/core/NavLink.jsx"},{"name":"SocialIconButton","sourcePath":"components/core/SocialIconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PortfolioCard","sourcePath":"components/media/PortfolioCard.jsx"},{"name":"ServiceTile","sourcePath":"components/media/ServiceTile.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/core/Button.jsx":"96a335ec722a","components/core/Eyebrow.jsx":"5e733ec94b46","components/core/NavLink.jsx":"541cd90e2462","components/core/SocialIconButton.jsx":"f067a9fd296d","components/forms/Input.jsx":"c5e3e34e1376","components/media/PortfolioCard.jsx":"4bb4fdaaee5d","components/media/ServiceTile.jsx":"10957757de9f","components/navigation/SiteFooter.jsx":"81de81a4e45c","components/navigation/SiteHeader.jsx":"7f310ef6c4f9","ui_kits/website/About.jsx":"4d9e7d25d9d4","ui_kits/website/Contact.jsx":"6f2793a09868","ui_kits/website/Home.jsx":"636a1b241520","ui_kits/website/Portfolio.jsx":"1cb0a1dfbce5","ui_kits/website/Services.jsx":"6891886a2abb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HouseOfMilohDesignSystem_47743d = window.HouseOfMilohDesignSystem_47743d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Miloh's only two button treatments: a solid maroon fill and a hairline
 * outline (inset 1px border, no fill). Square corners always — the brand
 * never rounds buttons. Sizing/padding are verbatim from source (36px nav
 * button, 54px hero button).
 */
function Button({
  variant = "solid",
  size = "default",
  as = "button",
  href,
  children,
  style,
  ...rest
}) {
  const Tag = href ? "a" : as;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    padding: size === "large" ? "16px 32px" : "8px 24px",
    transition: "background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease"
  };
  const variants = {
    solid: {
      background: "var(--miloh-maroon)",
      color: "var(--text-on-inverse)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-heading-alt)",
      boxShadow: "inset 0 0 0 1px var(--border-ink)"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (variant === "solid") e.currentTarget.style.opacity = "0.85";else e.currentTarget.style.backgroundColor = "var(--miloh-maroon)", e.currentTarget.style.color = "var(--text-on-inverse)";
    },
    onMouseLeave: e => {
      if (variant === "solid") e.currentTarget.style.opacity = "1";else e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = "var(--text-heading-alt)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Small uppercase bold-italic serif label used above section headings and hotel/project names. */
function Eyebrow({
  children,
  color = "var(--text-heading-alt)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-eyebrow)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase, wide-tracked nav link. Brown by default, maroon/black on hover, optional active underline. */
function NavLink({
  children,
  active = false,
  href = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: active ? "var(--text-heading)" : "var(--text-body)",
      borderBottom: active ? "1px solid var(--border-ink)" : "1px solid transparent",
      paddingBottom: 4,
      transition: "color 0.2s ease",
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--text-heading)",
    onMouseLeave: e => e.currentTarget.style.color = active ? "var(--text-heading)" : "var(--text-body)"
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialIconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular outline icon button (social links, footer). 64px, 1px inset maroon border. */
function SocialIconButton({
  icon,
  href = "#",
  size = 64,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      boxShadow: "inset 0 0 0 1px var(--border-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--miloh-maroon)",
      transition: "background-color 0.2s ease, color 0.2s ease",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.backgroundColor = "var(--miloh-maroon)";
      e.currentTarget.style.color = "var(--miloh-cream)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.color = "var(--miloh-maroon)";
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { SocialIconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialIconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-border text field with a label above, matching the enquiry form. Textarea via multiline. */
function Input({
  label,
  multiline = false,
  rows = 5,
  style,
  ...rest
}) {
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: "100%",
      letterSpacing: "0.6px",
      fontWeight: 500,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    rows: multiline ? rows : undefined,
    style: {
      border: "1px solid var(--border-ink)",
      background: "transparent",
      padding: "12px 0 8px",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-heading-alt)",
      outline: "none",
      resize: multiline ? "vertical" : "none",
      height: multiline ? "auto" : 48,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/media/PortfolioCard.jsx
try { (() => {
/** Image + uppercase title + italic tagline card, used for portfolio/press/hotel-style project rows. */
function PortfolioCard({
  image,
  title,
  tagline,
  aspect = "4/3",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: aspect,
      overflow: "hidden",
      background: "var(--surface-media-placeholder)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-heading-alt)"
    }
  }, title), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-eyebrow)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--text-body)"
    }
  }, tagline)));
}
Object.assign(__ds_scope, { PortfolioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PortfolioCard.jsx", error: String((e && e.message) || e) }); }

// components/media/ServiceTile.jsx
try { (() => {
/** Tall image tile with an uppercase label overlay bottom-left — used for the "Transforming Experiences" service grid. */
function ServiceTile({
  image,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1/1.1",
      overflow: "hidden",
      background: "var(--surface-media-placeholder)",
      display: "flex",
      alignItems: "flex-end",
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: label,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      padding: 24,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--miloh-cream)",
      textShadow: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Footer with 3 link columns, a centered mark, and a newsletter signup, matching source exactly. */
function FooterLink({
  href,
  children
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-heading)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--miloh-brown)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-heading)"
  }, children);
}
function SiteFooter({
  exploreLinks = [],
  connectLinks = [],
  contactLinks = [],
  onNewsletterSubmit
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer",
    style: {
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-page)",
      padding: "64px 40px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-top",
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 40,
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-left",
    style: {
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-col",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, exploreLinks.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l.label,
    href: l.href
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-col",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, connectLinks.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l.label,
    href: l.href
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-col",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, contactLinks.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l.label,
    href: l.href
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-mark",
    style: {
      position: "absolute",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/miloh_icon.png",
    alt: "House of Miloh",
    style: {
      width: 64,
      height: 64,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ftr-news",
    style: {
      width: 320,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ftr-news-label",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, "Subscribe to the newsletter"), /*#__PURE__*/React.createElement("form", {
    className: "ftr-news-form",
    onSubmit: onNewsletterSubmit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--miloh-brown)"
    }
  }, "Your Email:", /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    style: {
      border: "none",
      borderBottom: "1px solid var(--border-ink)",
      background: "transparent",
      padding: "0 0 6px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-heading)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      border: "1px solid var(--border-ink)",
      background: "transparent",
      color: "var(--text-heading)",
      textTransform: "uppercase",
      letterSpacing: 1.2,
      fontSize: 13,
      padding: 14,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      lineHeight: 1
    }
  }, "Submit")))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-bottom",
    style: {
      maxWidth: "var(--content-max)",
      margin: "40px auto 0",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: 1.25,
      letterSpacing: 0.4,
      color: "var(--miloh-brown)"
    }
  }, "\xA9 2026 HOUSE OF MILOH.", /*#__PURE__*/React.createElement("br", null), "ALL RIGHTS RESERVED."));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/** Fixed, blurred-glass nav header: 3 left links, centered serif wordmark, right links + CTA. */
function SiteHeader({
  leftLinks = [],
  logoText = "House of Miloh",
  rightLinks = [],
  ctaLabel = "Enquire",
  ctaHref = "#",
  active
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      width: "100%",
      height: "var(--nav-height)",
      background: "rgba(255,253,242,0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px var(--gutter)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "center",
      flex: 1
    }
  }, leftLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: active === l.label ? "var(--text-heading)" : "var(--text-body)",
      borderBottom: active === l.label ? "1px solid var(--border-ink)" : "1px solid transparent",
      paddingBottom: 4
    }
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 32,
      lineHeight: "40px",
      letterSpacing: "var(--tracking-tightest)",
      color: "var(--text-heading)",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, logoText.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center",
      flex: 1,
      justifyContent: "flex-end"
    }
  }, rightLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      background: "var(--miloh-maroon)",
      color: "var(--text-on-inverse)",
      padding: "8px 24px",
      whiteSpace: "nowrap"
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About() {
  const {
    SiteHeader,
    SiteFooter,
    Eyebrow
  } = window.HouseOfMilohDesignSystem_47743d;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    leftLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Services",
      href: "#"
    }, {
      label: "About",
      href: "#"
    }],
    rightLinks: [{
      label: "Journal",
      href: "#"
    }],
    ctaLabel: "Enquire",
    ctaHref: "#",
    active: "About"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "240px 64px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "the story so far"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 64,
      lineHeight: "72px",
      letterSpacing: "-1.5px",
      color: "var(--text-heading)",
      margin: 0,
      maxWidth: 800
    }
  }, "A studio built on a decade of design, and a deep love for the sun-drenched Mediterranean.")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 24,
      padding: "0 64px 160px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/about-founder.jpg",
    alt: "Founder portrait",
    style: {
      width: "100%",
      height: 586,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "0 48px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--text-body)",
      margin: 0
    }
  }, "After a decade navigating fast-paced agencies, dreamy wedding and event branding, and digital marketing, I wanted to build a studio that felt like a total breath of fresh air."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--text-body)",
      margin: 0
    }
  }, "What started as a passion for the sun-drenched world around us has grown into a design agency crafting brand identities for conscious spaces, hospitality concepts, and lifestyle brands globally."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section-alt)",
      padding: "160px 64px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      textAlign: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "what we care about"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 32,
      lineHeight: "40px",
      fontStyle: "italic",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "Beautiful design is a given. What we truly care about is clarity, real connection, and making the whole journey feel like a total dream."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "160px 64px",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "based by the mediterranean, working globally"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-body)",
      maxWidth: 560,
      margin: 0
    }
  }, "Different places, different projects \u2014 but always the same shared goal: to design brands that feel like home, with a tactile warmth you won't forget.")), /*#__PURE__*/React.createElement(SiteFooter, {
    exploreLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Book a Call",
      href: "#"
    }],
    connectLinks: [{
      label: "Instagram",
      href: "#"
    }, {
      label: "Journal",
      href: "#"
    }],
    socialIcon: "IG"
  }));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact() {
  const {
    SiteHeader,
    SiteFooter,
    Input,
    Button
  } = window.HouseOfMilohDesignSystem_47743d;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    leftLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Services",
      href: "#"
    }, {
      label: "About",
      href: "#"
    }],
    rightLinks: [{
      label: "Journal",
      href: "#"
    }],
    ctaLabel: "Enquire",
    ctaHref: "#",
    active: "Contact"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 480,
      background: "var(--surface-media-placeholder)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/contact-hero.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 64px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 64,
      lineHeight: "72px",
      letterSpacing: "-1.5px",
      color: "var(--text-heading)",
      textAlign: "center"
    }
  }, "Begin the Conversation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-body)"
    }
  }, "We take on a limited number of bespoke projects each season."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-body)"
    }
  }, "We'd love to hear about yours."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 64px 160px",
      display: "flex",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("form", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 40
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Project Type",
    placeholder: "Brand identity, hospitality concept\u2026"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    rows: 6
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "large",
    as: "button",
    type: "submit",
    style: {
      width: 217
    }
  }, sent ? "Sent ✓" : "Send Enquiry")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 18,
      color: "var(--text-heading)"
    }
  }, "hello@houseofmiloh.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 18,
      color: "var(--text-heading)"
    }
  }, "@houseofmiloh"))), /*#__PURE__*/React.createElement(SiteFooter, {
    exploreLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Book a Call",
      href: "#"
    }],
    connectLinks: [{
      label: "Instagram",
      href: "#"
    }, {
      label: "Journal",
      href: "#"
    }],
    socialIcon: "IG"
  }));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home() {
  const {
    SiteHeader,
    SiteFooter,
    Button,
    Eyebrow,
    ServiceTile,
    PortfolioCard
  } = window.HouseOfMilohDesignSystem_47743d;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    leftLinks: [{
      label: "Portfolio",
      href: "#portfolio"
    }, {
      label: "Services",
      href: "#services"
    }, {
      label: "About",
      href: "#about"
    }],
    rightLinks: [{
      label: "Journal",
      href: "#"
    }],
    ctaLabel: "Enquire",
    ctaHref: "#contact"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 640,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/hero-mediterranean-sea.jpg",
    alt: "Mediterranean coastline",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 64,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 24,
      color: "#fff"
    }
  }, "a creative studio by the Mediterranean"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 64px",
      background: "var(--surface-page)",
      display: "flex",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 48,
      lineHeight: "56px",
      color: "var(--text-heading)",
      letterSpacing: "-1px",
      margin: 0
    }
  }, "Brand identities for conscious spaces, hospitality concepts, and lifestyle brands."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-body)",
      maxWidth: 460
    }
  }, "House of Miloh is a design studio crafting brands that feel like home \u2014 with the tactile warmth of the Mediterranean and a completely seamless creative process."), /*#__PURE__*/React.createElement(Eyebrow, null, "let us design your dream")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ServiceTile, {
    image: "../../assets/imagery/project-mexico.jpg",
    label: "Brand Identity"
  }), /*#__PURE__*/React.createElement(ServiceTile, {
    image: "../../assets/imagery/project-paris.jpg",
    label: "Hospitality Concepts"
  }), /*#__PURE__*/React.createElement(ServiceTile, {
    image: "../../assets/imagery/project-dolomites.jpg",
    label: "Art Direction"
  }))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: "160px 0",
      background: "var(--surface-section-alt)",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 24,
      padding: "0 64px",
      boxSizing: "border-box",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/about-founder.jpg",
    alt: "Studio founder",
    style: {
      width: "100%",
      height: 586,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 26,
      bottom: 26,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 18,
      color: "#fff"
    }
  }, "Studio Founder, House of Miloh")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 31,
      padding: "0 48px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "a little bit about us"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      lineHeight: "32px",
      fontStyle: "italic",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "I design brands people stop scrolling for \u2014 and spaces people remember long after they've left.")))), /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      padding: "160px 64px",
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 448
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 48,
      lineHeight: "56px",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "Beyond the Studio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-body)",
      margin: 0
    }
  }, "A selection of the brands, spaces, and stories we've had the privilege to shape.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "large",
    href: "#portfolio"
  }, "View Full Portfolio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PortfolioCard, {
    image: "../../assets/imagery/project-dolomites.jpg",
    title: "CASA LUNA, AMALFI COAST",
    tagline: "Quiet coastal minimalism"
  }), /*#__PURE__*/React.createElement(PortfolioCard, {
    image: "../../assets/imagery/project-mexico.jpg",
    title: "TERRA STUDIO, MEXICO CITY",
    tagline: "Earthy, artisanal warmth"
  }), /*#__PURE__*/React.createElement(PortfolioCard, {
    image: "../../assets/imagery/project-paris.jpg",
    title: "MAISON VERT, PARIS",
    tagline: "Classic, quietly romantic"
  }), /*#__PURE__*/React.createElement(PortfolioCard, {
    image: "../../assets/imagery/project-kauai.jpg",
    title: "HALE NALU, KAUAI",
    tagline: "Sustainable island living"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 450,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/beach-umbrellas-full-bleed.png",
    alt: "Sun-drenched coastline",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-serif)",
      fontSize: 72,
      letterSpacing: "-1.4px",
      color: "#fff"
    }
  }, "VIEW OUR WORK")), /*#__PURE__*/React.createElement(SiteFooter, {
    exploreLinks: [{
      label: "Portfolio",
      href: "#portfolio"
    }, {
      label: "Book a Call",
      href: "#contact"
    }, {
      label: "Services",
      href: "#services"
    }],
    connectLinks: [{
      label: "Instagram",
      href: "#"
    }, {
      label: "Journal",
      href: "#"
    }],
    socialIcon: "IG"
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Portfolio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Portfolio() {
  const {
    SiteHeader,
    SiteFooter,
    PortfolioCard,
    Eyebrow
  } = window.HouseOfMilohDesignSystem_47743d;
  const projects = [{
    image: "assets/imagery/portfolio-hero-1.jpg",
    title: "CASA LUNA, AMALFI COAST",
    tagline: "Quiet coastal minimalism",
    aspect: "3/4"
  }, {
    image: "assets/imagery/project-mexico.jpg",
    title: "TERRA STUDIO, MEXICO CITY",
    tagline: "Earthy, artisanal warmth"
  }, {
    image: "assets/imagery/project-paris.jpg",
    title: "MAISON VERT, PARIS",
    tagline: "Classic, quietly romantic"
  }, {
    image: "assets/imagery/project-kauai.jpg",
    title: "HALE NALU, KAUAI",
    tagline: "Sustainable island living"
  }, {
    image: "assets/imagery/project-dolomites.jpg",
    title: "RIFUGIO ALTA, DOLOMITES",
    tagline: "Alpine wellness, reimagined"
  }, {
    image: "assets/imagery/portfolio-thumb-1.jpg",
    title: "OLIVA & CO.",
    tagline: "A lifestyle brand for slow living"
  }, {
    image: "assets/imagery/portfolio-thumb-2.jpg",
    title: "SALT HOUSE HOTEL",
    tagline: "Boutique hospitality identity"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    leftLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Services",
      href: "#"
    }, {
      label: "About",
      href: "#"
    }],
    rightLinks: [{
      label: "Journal",
      href: "#"
    }],
    ctaLabel: "Enquire",
    ctaHref: "#",
    active: "Portfolio"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "240px 64px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 72,
      lineHeight: 1,
      color: "var(--text-heading)"
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--text-body)"
  }, "selected brand & hospitality work")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 64px 160px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(PortfolioCard, _extends({
    key: p.title
  }, p)))), /*#__PURE__*/React.createElement(SiteFooter, {
    exploreLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Book a Call",
      href: "#"
    }],
    connectLinks: [{
      label: "Instagram",
      href: "#"
    }, {
      label: "Journal",
      href: "#"
    }],
    socialIcon: "IG"
  }));
}
window.Portfolio = Portfolio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function Services() {
  const {
    SiteHeader,
    SiteFooter,
    ServiceTile,
    Eyebrow
  } = window.HouseOfMilohDesignSystem_47743d;
  const services = [{
    image: "assets/imagery/project-mexico.jpg",
    label: "Brand Identity",
    copy: "Naming, logo systems, and visual identity for conscious spaces and lifestyle brands."
  }, {
    image: "assets/imagery/project-paris.jpg",
    label: "Hospitality Concepts",
    copy: "Brand strategy and art direction for hotels, restaurants, and boutique stays."
  }, {
    image: "assets/imagery/project-dolomites.jpg",
    label: "Art Direction",
    copy: "Photo direction and styling that captures a brand's true, tactile warmth."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    leftLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Services",
      href: "#"
    }, {
      label: "About",
      href: "#"
    }],
    rightLinks: [{
      label: "Journal",
      href: "#"
    }],
    ctaLabel: "Enquire",
    ctaHref: "#",
    active: "Services"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "240px 64px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 72,
      lineHeight: 1,
      color: "var(--text-heading)"
    }
  }, "Services"), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--text-body)"
  }, "a completely seamless, stress-free process")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 64px 160px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ServiceTile, {
    image: s.image,
    label: s.label
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-body)",
      margin: 0
    }
  }, s.copy)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section-alt)",
      padding: "160px 64px",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 32,
      lineHeight: "40px",
      color: "var(--text-heading)",
      textAlign: "center",
      maxWidth: 640
    }
  }, "We take on a limited number of bespoke projects each season \u2014 we'd love to hear about yours.")), /*#__PURE__*/React.createElement(SiteFooter, {
    exploreLinks: [{
      label: "Portfolio",
      href: "#"
    }, {
      label: "Book a Call",
      href: "#"
    }],
    connectLinks: [{
      label: "Instagram",
      href: "#"
    }, {
      label: "Journal",
      href: "#"
    }],
    socialIcon: "IG"
  }));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.SocialIconButton = __ds_scope.SocialIconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PortfolioCard = __ds_scope.PortfolioCard;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
