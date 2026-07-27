import type { Metadata } from "next";
import Galaxy from "./Galaxy";
import GooeyClickEffects from "./GooeyClickEffects";

export const metadata: Metadata = {
  title: "考啦教育｜为高职高考学子拨开升学迷雾",
  description:
    "考啦教育位于广东惠州，以语数英全科课程、线下面授、直播录播与课后答疑，陪伴高职高考学子看清方向、稳步提分。",
};

export default function GatewayHome() {
  return (
    <main className="gateway-page">
      <GooeyClickEffects />
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1.4}
        glowIntensity={0.34}
        saturation={1}
        hueShift={118}
        twinkleIntensity={0.32}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.4}
        speed={1}
      />

      <div className="gateway-noise" aria-hidden="true" />

      <header className="gateway-header">
        <a className="gateway-brand" href="/" aria-label="考啦教育入口首页">
          <span>考</span>
          <div>
            <strong>考啦教育</strong>
            <small>KAOLA EDUCATION</small>
          </div>
        </a>
        <nav aria-label="入口导航">
          <a href="/kaola#course">主推课程</a>
          <a href="/kaola#advantages">核心优势</a>
          <a href="/assessment">免费测评</a>
          <a className="gateway-nav-cta" href="/kaola#contact">
            微信咨询
          </a>
        </nav>
      </header>

      <section className="gateway-hero" aria-labelledby="gateway-title">
        <div className="gateway-badge">
          <span>惠州</span>
          广东高职高考全科备考
        </div>
        <p className="gateway-overline">A CLEARER WAY FORWARD</p>
        <h1 id="gateway-title">
          为高职高考学子
          <br />
          <em>拨开升学迷雾</em>
        </h1>
        <p className="gateway-description">
          从看清方向，到走稳每一步备考路。
          <br />
          以全科、全程、线上线下陪学，让努力有路径，让提分有方法。
        </p>
        <div className="gateway-actions">
          <a className="gateway-primary" href="/kaola">
            进入考啦教育
            <span aria-hidden="true">→</span>
          </a>
          <a className="gateway-secondary" href="/kaola#course">
            了解全科全程A班
          </a>
          <a className="gateway-test" href="/assessment">
            免费测评
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <aside className="gateway-proof" aria-label="课程核心信息">
        <div>
          <span>01</span>
          <strong>语数英全科</strong>
          <small>三科统一规划</small>
        </div>
        <div>
          <span>02</span>
          <strong>三种教学形式</strong>
          <small>线下 · 直播 · 录播</small>
        </div>
        <div>
          <span>03</span>
          <strong>全程陪学答疑</strong>
          <small>课后问题及时解决</small>
        </div>
      </aside>

      <div className="gateway-corner-note" aria-hidden="true">
        <span>KAOLA</span>
        <small>HUIZHOU · 2026</small>
      </div>
    </main>
  );
}
