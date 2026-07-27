:root {
  --red: #a91825;
  --red-dark: #7e101b;
  --red-soft: #c93842;
  --ink: #171313;
  --muted: #6e6461;
  --paper: #f5f0e8;
  --paper-light: #fbf8f2;
  --cream: #e8dccb;
  --gold: #b69664;
  --line: rgba(23, 19, 19, 0.14);
  --shadow: 0 26px 70px rgba(69, 21, 24, 0.13);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 92px;
}

body {
  margin: 0;
  background: var(--paper-light);
  color: var(--ink);
  font-family:
    "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body::selection {
  background: var(--red);
  color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  font: inherit;
}

:focus-visible {
  outline: 3px solid rgba(169, 24, 37, 0.3);
  outline-offset: 4px;
}

.site-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 82px;
  display: flex;
  align-items: center;
  gap: 42px;
  padding: 0 clamp(24px, 5vw, 76px);
  background: rgba(251, 248, 242, 0.88);
  border-bottom: 1px solid rgba(23, 19, 19, 0.08);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  min-width: max-content;
}

.brand-mark {
  display: inline-grid;
  width: 42px;
  height: 42px;
  place-items: center;
  color: #fff;
  background: var(--red);
  border-radius: 11px 11px 11px 4px;
  font-family: "Songti SC", "STSong", serif;
  font-size: 23px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(169, 24, 37, 0.18);
}

.brand-copy {
  display: grid;
  gap: 1px;
}

.brand-copy strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 20px;
  letter-spacing: 0.06em;
}

.brand-copy small {
  color: var(--red);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
}

.desktop-nav a {
  position: relative;
  color: #4f4644;
  font-size: 14px;
}

.desktop-nav a::after {
  position: absolute;
  right: 0;
  bottom: -8px;
  left: 0;
  height: 1px;
  background: var(--red);
  content: "";
  transform: scaleX(0);
  transition: transform 180ms ease;
}

.desktop-nav a:hover::after {
  transform: scaleX(1);
}

.header-cta,
.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  background: var(--red);
  color: #fff;
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.header-cta {
  min-width: 132px;
  height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  font-size: 14px;
}

.header-cta:hover,
.primary-button:hover {
  background: var(--red-dark);
  transform: translateY(-2px);
}

main {
  overflow: hidden;
}

.hero {
  position: relative;
  min-height: 850px;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(420px, 0.88fr);
  gap: clamp(42px, 7vw, 110px);
  align-items: center;
  padding: 150px clamp(24px, 7.5vw, 128px) 86px;
  background:
    linear-gradient(112deg, rgba(251, 248, 242, 0.96) 0 53%, transparent 53%),
    linear-gradient(135deg, #f2e9dc, #ead9c5);
}

.hero::before {
  position: absolute;
  top: 82px;
  right: 0;
  bottom: 0;
  width: 43%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    var(--red);
  background-size: 40px 40px;
  content: "";
}

.hero::after {
  position: absolute;
  top: 126px;
  right: 37%;
  width: 170px;
  height: 1px;
  background: var(--red);
  box-shadow: 0 9px 0 rgba(169, 24, 37, 0.3);
  content: "";
  transform: rotate(-34deg);
  transform-origin: right;
}

.hero-orbit {
  position: absolute;
  z-index: 1;
  right: -110px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
}

.orbit-one {
  top: 160px;
  width: 520px;
  height: 520px;
}

.orbit-two {
  top: 90px;
  width: 700px;
  height: 700px;
}

.hero-copy,
.hero-course-card {
  position: relative;
  z-index: 2;
}

.hero-copy {
  max-width: 740px;
}

.eyebrow,
.section-index {
  margin: 0 0 24px;
  color: var(--red);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 18px;
}

.eyebrow span + span {
  padding-left: 18px;
  border-left: 1px solid rgba(169, 24, 37, 0.28);
}

.hero h1,
.section-heading h2,
.course-panel-intro h2,
.audience-card h2,
.teaching-copy h2,
.faq-title h2,
.contact-copy h2 {
  margin: 0;
  font-family: "Songti SC", "STSong", "Noto Serif CJK SC", serif;
  font-weight: 700;
  letter-spacing: -0.045em;
}

.hero h1 {
  font-size: clamp(49px, 5vw, 80px);
  line-height: 1.12;
}

.hero h1 em,
.section-heading h2 em,
.faq-title h2 em {
  position: relative;
  color: var(--red);
  font-style: normal;
}

.hero h1 em::after {
  position: absolute;
  right: -2px;
  bottom: -9px;
  left: 2px;
  height: 7px;
  background: var(--red);
  border-radius: 99px;
  content: "";
  opacity: 0.14;
}

.hero-lead {
  max-width: 620px;
  margin: 32px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
}

.primary-button {
  min-height: 56px;
  padding: 0 27px;
  border-radius: 5px;
  box-shadow: 0 16px 40px rgba(169, 24, 37, 0.18);
  font-size: 15px;
  font-weight: 700;
}

.text-link {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  color: #504644;
  font-size: 14px;
}

.hero-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 670px;
  margin: 64px 0 0;
  border-top: 1px solid var(--line);
}

.hero-facts div {
  padding: 23px 22px 0 0;
}

.hero-facts div + div {
  padding-left: 26px;
  border-left: 1px solid var(--line);
}

.hero-facts dt {
  font-family: Georgia, serif;
  font-size: 27px;
  font-weight: 700;
}

.hero-facts dd {
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 12px;
}

.hero-course-card {
  width: min(100%, 520px);
  margin-left: auto;
  padding: 36px 40px 30px;
  background: rgba(255, 253, 248, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 4px 4px 42px 4px;
  box-shadow: var(--shadow);
}

.course-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-tag {
  padding: 8px 12px;
  background: var(--red);
  color: #fff;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.course-location,
.course-kicker {
  color: #8a7e78;
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.18em;
}

.course-kicker {
  margin: 42px 0 10px;
}

.hero-course-card h2 {
  margin: 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(35px, 4vw, 49px);
  letter-spacing: -0.04em;
}

.price-row {
  display: flex;
  align-items: baseline;
  margin-top: 24px;
  color: var(--red);
}

.price-row strong {
  font-family: Georgia, serif;
  font-size: clamp(56px, 6vw, 76px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.price-symbol {
  margin-right: 7px;
  font-family: Georgia, serif;
  font-size: 25px;
}

.price-unit {
  margin-left: 9px;
  color: var(--muted);
  font-size: 13px;
}

.price-note {
  margin: 12px 0 0;
  color: #8a7e78;
  font-size: 11px;
}

.course-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 34px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.course-metrics div {
  display: grid;
  gap: 5px;
  padding: 18px 8px 17px;
}

.course-metrics div + div {
  border-left: 1px solid var(--line);
}

.course-metrics span {
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 700;
}

.course-metrics small {
  color: var(--muted);
  font-size: 11px;
}

.course-schedule {
  display: grid;
  gap: 7px;
  margin-top: 24px;
}

.course-schedule span {
  color: var(--muted);
  font-size: 11px;
}

.course-schedule strong {
  font-size: 15px;
}

.card-footnote {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 34px;
  color: #8b7f7a;
  font-size: 10px;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #4e8a67;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(78, 138, 103, 0.12);
}

.teacher-hero {
  min-height: 850px;
  grid-template-columns:
    minmax(360px, 0.88fr)
    minmax(350px, 0.84fr)
    minmax(320px, 0.7fr);
  gap: 0;
  align-items: stretch;
  padding: 82px 0 0;
  isolation: isolate;
  background: var(--ink);
  color: #fff;
}

.teacher-hero::before {
  z-index: -1;
  top: 82px;
  width: 34%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    var(--red-dark);
  background-size: 34px 34px;
}

.teacher-hero::after {
  display: none;
}

.teacher-hero-copy {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(58px, 5.4vw, 92px) clamp(34px, 5.5vw, 88px);
}

.teacher-hero .eyebrow {
  color: #e7a5a8;
}

.teacher-hero .eyebrow span + span {
  border-color: rgba(231, 165, 168, 0.3);
}

.teacher-hero h1 {
  max-width: 590px;
  color: #fff;
  font-size: clamp(48px, 4.5vw, 70px);
}

.teacher-hero h1 em {
  display: inline-block;
  color: #f0b5b3;
}

.teacher-hero h1 em::after {
  background: #fff;
  opacity: 0.11;
}

.teacher-hero .hero-lead {
  max-width: 540px;
  color: #c9beba;
  font-size: 15px;
}

.teacher-hero .text-link {
  color: #d7cbc7;
}

.teacher-offer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 54px;
  padding: 22px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.teacher-offer > div {
  display: grid;
  gap: 7px;
}

.teacher-offer > div span {
  color: #a99b97;
  font-size: 9px;
  letter-spacing: 0.12em;
}

.teacher-offer > div strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 19px;
}

.teacher-offer > p {
  margin: 0;
  color: #fff;
  font-family: Georgia, serif;
  font-size: clamp(30px, 3vw, 42px);
  font-weight: 700;
  letter-spacing: -0.04em;
}

.teacher-offer > p small {
  margin-right: 4px;
  color: #dfaaa9;
  font-size: 16px;
}

.teacher-offer > p em {
  margin-left: 6px;
  color: #a99b97;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
}

.teacher-stage {
  position: relative;
  z-index: 2;
  min-height: 768px;
  overflow: hidden;
  background: #7c5544;
}

.teacher-stage::after {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 12, 12, 0.04) 52%, rgba(15, 12, 12, 0.75)),
    linear-gradient(90deg, rgba(15, 12, 12, 0.2), transparent 20% 80%, rgba(15, 12, 12, 0.14));
  content: "";
  pointer-events: none;
}

.teacher-stage-visual,
.teacher-thumbnail {
  background-image: url("/teacher-triptych-v1.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.teacher-stage-visual {
  position: absolute;
  inset: 0;
  animation: teacher-portrait-in 440ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.teacher-stage-number {
  position: absolute;
  z-index: 2;
  top: 34px;
  right: 31px;
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: 50%;
  font-family: Georgia, serif;
  font-size: 12px;
}

.teacher-stage-caption {
  position: absolute;
  z-index: 2;
  right: 34px;
  bottom: 34px;
  left: 34px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding-top: 18px;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.42);
}

.teacher-stage-caption span {
  font-family: Georgia, serif;
  font-size: 8px;
  letter-spacing: 0.16em;
}

.teacher-stage-caption strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 17px;
}

.teacher-profile-panel {
  position: relative;
  z-index: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: clamp(52px, 4.2vw, 72px) clamp(30px, 3.4vw, 52px) 34px;
  background: #eee3d6;
  color: var(--ink);
}

.teacher-profile-copy {
  min-height: 392px;
  animation: teacher-copy-in 360ms ease both;
}

.teacher-profile-index {
  margin: 0 0 56px;
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.14em;
}

.teacher-profile-copy > span {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.15em;
}

.teacher-profile-copy h2 {
  margin: 14px 0 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(31px, 3vw, 45px);
  line-height: 1.25;
  letter-spacing: -0.04em;
}

.teacher-profile-copy > p:last-of-type {
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.teacher-profile-copy dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 35px 0 0;
  border-top: 1px solid rgba(23, 19, 19, 0.15);
}

.teacher-profile-copy dl > div {
  display: grid;
  gap: 8px;
  padding: 18px 12px 0 0;
}

.teacher-profile-copy dl > div + div {
  padding-left: 17px;
  border-left: 1px solid rgba(23, 19, 19, 0.15);
}

.teacher-profile-copy dt {
  color: var(--muted);
  font-size: 9px;
}

.teacher-profile-copy dd {
  margin: 0;
  font-size: 11px;
  line-height: 1.55;
}

.teacher-selector {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
  margin-top: auto;
}

.teacher-selector button {
  min-width: 0;
  padding: 0;
  overflow: hidden;
  background: #e1d4c4;
  color: var(--ink);
  border: 1px solid transparent;
  cursor: pointer;
  text-align: left;
  transition:
    border-color 180ms ease,
    transform 180ms ease,
    background 180ms ease;
}

.teacher-selector button:hover {
  transform: translateY(-3px);
}

.teacher-selector button.active {
  background: #fff8ef;
  border-color: var(--red);
}

.teacher-thumbnail {
  height: 112px;
  display: block;
}

.teacher-selector-meta {
  display: grid;
  gap: 7px;
  padding: 11px 9px 12px;
}

.teacher-selector-meta small {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 8px;
}

.teacher-selector-meta strong {
  overflow: hidden;
  font-family: "Songti SC", "STSong", serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.teacher-visual-note {
  margin: 18px 0 0;
  color: #968985;
  font-size: 8px;
  line-height: 1.6;
}

@keyframes teacher-portrait-in {
  from {
    opacity: 0.55;
    transform: scale(1.045) translateX(8px);
  }
}

@keyframes teacher-copy-in {
  from {
    opacity: 0;
    transform: translateY(13px);
  }
}

.faculty-hero {
  position: relative;
  min-height: 870px;
  overflow: hidden;
  padding-top: 82px;
  isolation: isolate;
  background:
    linear-gradient(rgba(23, 19, 19, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 19, 19, 0.035) 1px, transparent 1px),
    #e9e8e4;
  background-size: 46px 46px;
  color: #11100f;
}

.faculty-hero::before {
  position: absolute;
  z-index: -1;
  top: 82px;
  right: 0;
  width: 34%;
  height: 48%;
  background: rgba(255, 255, 255, 0.42);
  border-left: 1px solid rgba(23, 19, 19, 0.08);
  border-bottom: 1px solid rgba(23, 19, 19, 0.08);
  content: "";
}

.faculty-background-word {
  position: absolute;
  z-index: -1;
  right: -2vw;
  bottom: 20px;
  color: rgba(255, 255, 255, 0.66);
  font-family: Arial, sans-serif;
  font-size: clamp(110px, 17vw, 270px);
  font-weight: 900;
  line-height: 0.72;
  letter-spacing: -0.09em;
  pointer-events: none;
  user-select: none;
}

.faculty-copy {
  position: absolute;
  z-index: 4;
  top: 146px;
  left: clamp(24px, 5vw, 76px);
  width: min(42vw, 640px);
  animation: faculty-copy-enter 460ms ease both;
}

.faculty-kicker {
  margin: 0 0 24px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.faculty-copy h1 {
  margin: 0;
  font-family:
    Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: clamp(49px, 4.8vw, 78px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.faculty-copy h1 span,
.faculty-copy h1 em {
  display: block;
}

.faculty-copy h1 em {
  color: var(--red);
  font-style: normal;
}

.faculty-name-line {
  display: flex;
  align-items: baseline;
  gap: 17px;
  margin-top: 28px;
}

.faculty-name-line strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(31px, 2.6vw, 40px);
  line-height: 1;
}

.faculty-name-line span {
  color: #6f6864;
  font-size: 11px;
}

.faculty-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
}

.faculty-primary-action,
.faculty-secondary-action {
  min-height: 47px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 11px;
  transition:
    transform 180ms ease,
    background 180ms ease;
}

.faculty-primary-action {
  min-width: 144px;
  gap: 28px;
  padding: 0 20px;
  background: #525252;
  color: #fff;
  border-radius: 20px;
}

.faculty-secondary-action {
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(23, 19, 19, 0.13);
}

.faculty-primary-action:hover,
.faculty-secondary-action:hover {
  transform: translateY(-2px);
}

.faculty-primary-action:hover {
  background: #525252;
}

.specular-button {
  --specular-x: 50%;
  --specular-y: 50%;
  --specular-opacity: 0;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 10px 26px rgba(22, 20, 19, 0.12);
}

.specular-button::before {
  position: absolute;
  z-index: 2;
  inset: 0;
  padding: 1.5px;
  background: radial-gradient(
    78px circle at var(--specular-x) var(--specular-y),
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 0.88) 20px,
    rgba(255, 255, 255, 0.24) 40px,
    transparent 72px
  );
  border-radius: inherit;
  content: "";
  opacity: calc(var(--specular-opacity) * 1.15);
  pointer-events: none;
  transition: opacity 350ms ease;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.specular-button::after {
  position: absolute;
  z-index: 0;
  inset: 0;
  background: radial-gradient(
    62px circle at var(--specular-x) var(--specular-y),
    rgba(255, 255, 255, 0.15),
    transparent 68%
  );
  content: "";
  filter: blur(1px);
  opacity: var(--specular-opacity);
  pointer-events: none;
  transition: opacity 350ms ease;
}

.specular-button-content {
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.specular-button:focus-visible {
  outline-color: rgba(255, 255, 255, 0.95);
  box-shadow:
    inset 0 0 0 1.5px #fff,
    0 0 0 4px rgba(82, 82, 82, 0.22);
}

.faculty-portrait-stage {
  position: absolute;
  z-index: 2;
  top: 104px;
  bottom: 59px;
  left: 27%;
  width: 45%;
  overflow: visible;
  isolation: isolate;
  pointer-events: none;
  animation: faculty-stage-enter 540ms cubic-bezier(0.2, 0.82, 0.2, 1) both;
}

.faculty-portrait-halo {
  position: absolute;
  z-index: -2;
  top: 20%;
  left: 50%;
  width: min(64vw, 960px);
  height: min(64vw, 960px);
  background: rgba(169, 24, 37, 0.075);
  border: 1px solid rgba(169, 24, 37, 0.15);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow:
    0 0 0 42px rgba(255, 255, 255, 0.18),
    0 0 0 86px rgba(255, 255, 255, 0.1);
}

.faculty-portrait {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center bottom;
  mix-blend-mode: normal;
  filter: saturate(0.86) contrast(1.02);
  animation: faculty-portrait-enter 620ms cubic-bezier(0.2, 0.82, 0.2, 1) both;
}

.faculty-portrait.portrait-lai,
.faculty-portrait.portrait-zhang {
  bottom: -4%;
  height: 108%;
}

.faculty-profile-card {
  position: absolute;
  z-index: 5;
  top: 134px;
  right: clamp(24px, 4vw, 64px);
  width: min(29vw, 430px);
  padding: 27px 28px 25px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(23, 19, 19, 0.11);
  border-radius: 22px 22px 6px 22px;
  box-shadow: 0 24px 64px rgba(37, 26, 21, 0.08);
  backdrop-filter: blur(16px);
  animation: faculty-profile-enter 430ms ease both;
}

.faculty-profile-topline,
.faculty-profile-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.faculty-profile-topline {
  padding-bottom: 17px;
  border-bottom: 1px solid rgba(23, 19, 19, 0.13);
}

.faculty-profile-topline span,
.faculty-profile-topline small {
  font-family: Georgia, serif;
  font-size: 8px;
  letter-spacing: 0.14em;
}

.faculty-profile-topline span {
  color: var(--red);
}

.faculty-profile-heading {
  align-items: flex-end;
  margin-top: 21px;
}

.faculty-profile-heading > div {
  display: grid;
  gap: 5px;
}

.faculty-profile-heading span {
  color: #756c68;
  font-size: 9px;
}

.faculty-profile-heading h2 {
  margin: 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: 33px;
  line-height: 1;
}

.faculty-profile-heading > strong {
  color: var(--red);
  font-family: "Songti SC", "STSong", serif;
  font-size: 15px;
}

.faculty-biography {
  margin: 21px 0 0;
  color: #5f5855;
  font-size: 10.5px;
  line-height: 1.82;
  text-align: justify;
}

.faculty-facts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  margin: 18px 0 0;
  padding: 0;
  border-top: 1px solid rgba(23, 19, 19, 0.12);
  list-style: none;
}

.faculty-facts li {
  position: relative;
  padding: 10px 0 10px 17px;
  border-bottom: 1px solid rgba(23, 19, 19, 0.1);
  font-size: 9px;
}

.faculty-facts li::before {
  position: absolute;
  top: 14px;
  left: 2px;
  width: 5px;
  height: 5px;
  background: var(--red);
  border-radius: 50%;
  content: "";
}

.faculty-profile-card blockquote {
  margin: 18px 0 0;
  color: var(--red-dark);
  font-family: "Songti SC", "STSong", serif;
  font-size: 12px;
  line-height: 1.7;
}

.faculty-switcher {
  position: absolute;
  z-index: 6;
  right: clamp(24px, 4vw, 64px);
  bottom: 82px;
  width: min(31vw, 460px);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.faculty-switcher button {
  min-width: 0;
  height: 92px;
  display: grid;
  grid-template-columns: 43px 1fr;
  gap: 8px;
  align-items: center;
  padding: 7px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.68);
  color: var(--ink);
  border: 1px solid rgba(23, 19, 19, 0.12);
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  backdrop-filter: blur(12px);
  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.faculty-switcher button:hover {
  transform: translateY(-3px);
}

.faculty-switcher button.active {
  background: var(--ink);
  color: #fff;
  border-color: var(--ink);
}

.faculty-switcher img {
  width: 43px;
  height: 72px;
  display: block;
  object-fit: cover;
  object-position: center top;
  background: #f5f3ef;
  border-radius: 7px;
}

.faculty-switcher button > span {
  min-width: 0;
  display: grid;
  gap: 4px;
}

.faculty-switcher small {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 8px;
}

.faculty-switcher button.active small {
  color: #efb3b1;
}

.faculty-switcher strong,
.faculty-switcher em {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.faculty-switcher strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 13px;
}

.faculty-switcher em {
  color: #756c68;
  font-size: 8px;
  font-style: normal;
}

.faculty-switcher button.active em {
  color: #b9aaa5;
}

.faculty-status-bar {
  position: absolute;
  z-index: 8;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 59px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  align-items: center;
  padding: 0 clamp(24px, 5vw, 76px);
  background: rgba(15, 12, 12, 0.93);
  color: #fff;
  backdrop-filter: blur(12px);
}

.faculty-status-bar > span,
.faculty-status-bar > strong,
.faculty-auto-status > span {
  font-size: 8px;
  letter-spacing: 0.1em;
}

.faculty-status-bar > strong {
  text-align: center;
}

.faculty-auto-status {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
}

.faculty-auto-status i {
  position: relative;
  width: 92px;
  height: 2px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.22);
}

.faculty-auto-status i::after {
  position: absolute;
  inset: 0;
  background: #fff;
  content: "";
  transform-origin: left;
  animation: faculty-progress 5s linear both;
}

@keyframes faculty-copy-enter {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}

@keyframes faculty-stage-enter {
  from {
    opacity: 0.6;
  }
}

@keyframes faculty-portrait-enter {
  from {
    opacity: 0;
    transform: translateY(26px) scale(1.025);
  }
}

@keyframes faculty-profile-enter {
  from {
    opacity: 0;
    transform: translateX(15px);
  }
}

@keyframes faculty-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.laser-flow-layer {
  --laser-x: 58vw;
  --laser-y: 35vh;
  position: fixed;
  z-index: 85;
  inset: 0;
  overflow: hidden;
  opacity: 0.16;
  pointer-events: none;
  mix-blend-mode: soft-light;
}

.laser-flow-layer::before,
.laser-flow-layer::after {
  position: absolute;
  content: "";
  pointer-events: none;
}

.laser-flow-layer::before {
  top: -20%;
  bottom: -20%;
  left: var(--laser-x);
  width: 3px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(224, 212, 237, 0.15) 18%,
    rgba(255, 255, 255, 0.82) 50%,
    rgba(169, 24, 37, 0.2) 76%,
    transparent
  );
  box-shadow:
    0 0 12px rgba(255, 255, 255, 0.5),
    0 0 42px rgba(169, 24, 37, 0.2);
  filter: blur(0.45px);
  transform: translateX(-50%) rotate(6deg);
  transform-origin: 50% var(--laser-y);
}

.laser-flow-layer::after {
  top: var(--laser-y);
  right: -16%;
  left: -16%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(182, 150, 100, 0.1) 22%,
    rgba(255, 255, 255, 0.64) 50%,
    rgba(169, 24, 37, 0.14) 74%,
    transparent
  );
  box-shadow: 0 0 24px rgba(224, 212, 237, 0.32);
  filter: blur(0.55px);
  transform: translateY(-50%) rotate(-1.5deg);
}

.laser-flow-glow {
  position: absolute;
  top: calc(var(--laser-y) - 220px);
  left: calc(var(--laser-x) - 220px);
  width: 440px;
  height: 440px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.28),
    rgba(169, 24, 37, 0.09) 28%,
    transparent 68%
  );
  border-radius: 50%;
  filter: blur(22px);
}

.laser-wisp {
  position: absolute;
  width: 38vw;
  height: 8px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(224, 212, 237, 0.3),
    transparent
  );
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0.6;
  transform: rotate(-8deg);
  animation: laser-wisp-flow 11s ease-in-out infinite alternate;
}

.wisp-one {
  top: 22%;
  left: -8%;
}

.wisp-two {
  top: 56%;
  right: -5%;
  animation-delay: -4s;
  animation-duration: 15s;
}

.wisp-three {
  bottom: 13%;
  left: 28%;
  animation-delay: -8s;
  animation-duration: 18s;
}

@keyframes laser-wisp-flow {
  from {
    opacity: 0.22;
    transform: translate3d(-8%, -8px, 0) rotate(-8deg) scaleX(0.82);
  }
  to {
    opacity: 0.68;
    transform: translate3d(18%, 12px, 0) rotate(-3deg) scaleX(1.12);
  }
}

.gooey-effect-layer {
  position: fixed;
  z-index: 9999;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.gooey-particle-burst {
  position: absolute;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.gooey-particle-core,
.gooey-particle {
  position: absolute;
  display: block;
  border-radius: 50%;
  pointer-events: none;
}

.gooey-particle-core {
  top: -8px;
  left: -8px;
  width: 16px;
  height: 16px;
  background: rgba(169, 24, 37, 0.3);
  box-shadow:
    0 0 0 5px rgba(169, 24, 37, 0.08),
    0 0 18px rgba(169, 24, 37, 0.22);
  animation: gooey-core-pop 520ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.gooey-particle {
  --particle-x: 0px;
  --particle-y: 0px;
  --particle-size: 7px;
  --particle-color: var(--red);
  --particle-duration: 600ms;
  --particle-delay: 0ms;
  --particle-scale: 1;
  top: calc(var(--particle-size) / -2);
  left: calc(var(--particle-size) / -2);
  width: var(--particle-size);
  height: var(--particle-size);
  background: var(--particle-color);
  box-shadow: 0 0 10px color-mix(in srgb, var(--particle-color) 48%, transparent);
  filter: blur(0.15px);
  opacity: 0;
  animation: gooey-particle-fly var(--particle-duration)
    cubic-bezier(0.14, 0.76, 0.24, 1) var(--particle-delay) both;
}

@keyframes gooey-core-pop {
  0% {
    opacity: 0;
    transform: scale(0.25);
  }
  24% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.85);
  }
}

@keyframes gooey-particle-fly {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.2);
  }
  13% {
    opacity: 1;
    transform: translate(
        calc(var(--particle-x) * 0.12),
        calc(var(--particle-y) * 0.12)
      )
      scale(var(--particle-scale));
  }
  72% {
    opacity: 0.88;
  }
  100% {
    opacity: 0;
    transform: translate(var(--particle-x), var(--particle-y)) scale(0.05);
    filter: blur(1.2px);
  }
}

.trust-strip {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  min-height: 86px;
  padding: 18px clamp(24px, 7.5vw, 128px);
  background: var(--ink);
  color: #fff;
}

.trust-strip p {
  margin: 0;
  color: #d9d0cc;
  font-family: "Songti SC", "STSong", serif;
  font-size: 14px;
}

.trust-items {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 12px;
}

.trust-items i {
  width: 4px;
  height: 4px;
  background: var(--red-soft);
  border-radius: 50%;
}

.section {
  padding: 120px clamp(24px, 7.5vw, 128px);
}

.section-heading h2,
.teaching-copy h2,
.faq-title h2 {
  font-size: clamp(40px, 4.7vw, 68px);
  line-height: 1.18;
}

.split-heading {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: clamp(50px, 8vw, 140px);
  align-items: end;
}

.split-heading > p {
  max-width: 430px;
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
}

.learning-system {
  background: var(--paper-light);
}

.step-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 78px;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.step-card {
  position: relative;
  min-height: 232px;
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 25px;
  padding: 34px 30px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.step-card:hover {
  z-index: 2;
  background: #fff;
  box-shadow: 0 20px 55px rgba(48, 28, 24, 0.08);
  transform: translateY(-4px);
}

.step-number {
  padding-top: 3px;
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 13px;
  letter-spacing: 0.1em;
}

.step-card h3 {
  margin: 0 0 18px;
  font-family: "Songti SC", "STSong", serif;
  font-size: 24px;
}

.step-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.85;
}

.course-section {
  padding-top: 0;
  background: var(--paper-light);
}

.course-panel {
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  min-height: 720px;
  background: var(--red);
  color: #fff;
  box-shadow: var(--shadow);
}

.course-panel-intro {
  position: relative;
  overflow: hidden;
  padding: clamp(52px, 6vw, 92px);
  border-right: 1px solid rgba(255, 255, 255, 0.18);
}

.course-panel-intro::before {
  position: absolute;
  right: -180px;
  bottom: -210px;
  width: 520px;
  height: 520px;
  border: 80px solid rgba(255, 255, 255, 0.04);
  border-radius: 50%;
  content: "";
}

.section-index.light {
  color: #e6c8bf;
}

.outline-label {
  display: inline-block;
  margin-top: 50px;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35);
  font-family: Georgia, serif;
  font-size: clamp(54px, 7vw, 100px);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.05em;
}

.course-panel-intro h2 {
  margin-top: 35px;
  font-size: clamp(52px, 5vw, 76px);
  line-height: 1.08;
}

.course-panel-intro .course-program-title {
  font-size: clamp(48px, 4.05vw, 64px);
  letter-spacing: -0.06em;
  white-space: nowrap;
}

.course-panel-intro > p:not(.section-index) {
  max-width: 370px;
  margin: 30px 0 0;
  color: #ead8d2;
  font-size: 14px;
  line-height: 1.9;
}

.course-panel-intro > a {
  position: absolute;
  right: clamp(52px, 6vw, 92px);
  bottom: 72px;
  left: clamp(52px, 6vw, 92px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  font-size: 14px;
}

.course-panel-details {
  padding: clamp(52px, 6vw, 88px);
  background: #f7f0e7;
  color: var(--ink);
}

.detail-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 42px;
  border-bottom: 1px solid rgba(23, 19, 19, 0.2);
}

.detail-header > div {
  display: grid;
  gap: 12px;
  align-content: start;
}

.detail-header > div + div {
  padding-left: 30px;
  border-left: 1px solid var(--line);
}

.detail-header span {
  color: var(--muted);
  font-size: 11px;
}

.detail-header strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 20px;
}

.detail-header > div:first-child strong {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 43px;
  line-height: 1;
}

.detail-header small {
  font-size: 19px;
}

.daily-study {
  display: grid;
  grid-template-columns: 0.55fr 1.45fr;
  gap: 55px;
  margin-top: 58px;
}

.daily-title span {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 10px;
  letter-spacing: 0.14em;
}

.daily-title h3 {
  margin: 13px 0 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: 31px;
}

.daily-study ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

.daily-study li {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 22px;
  padding: 19px 0;
  border-top: 1px solid var(--line);
}

.daily-study li:last-child {
  border-bottom: 1px solid var(--line);
}

.daily-study li > span {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 12px;
}

.daily-study li div {
  display: grid;
  gap: 6px;
}

.daily-study strong {
  font-size: 15px;
}

.daily-study small {
  color: var(--muted);
  font-size: 11px;
}

.course-disclaimer {
  margin: 36px 0 0;
  padding-left: 14px;
  border-left: 2px solid var(--red);
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.advantages-section {
  background: #efe6d9;
}

.advantages-section .section-heading {
  max-width: 950px;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin-top: 72px;
  background: rgba(23, 19, 19, 0.13);
  border: 1px solid rgba(23, 19, 19, 0.13);
}

.advantage-card {
  min-height: 310px;
  padding: 33px 28px;
  background: #f5eee4;
  transition:
    color 220ms ease,
    background 220ms ease;
}

.advantage-card:hover {
  background: var(--red);
  color: #fff;
}

.advantage-top {
  display: flex;
  justify-content: space-between;
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 10px;
  letter-spacing: 0.12em;
}

.advantage-card:hover .advantage-top {
  color: #f1cbc8;
}

.advantage-card h3 {
  margin: 98px 0 18px;
  font-family: "Songti SC", "STSong", serif;
  font-size: 25px;
}

.advantage-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.advantage-card:hover p {
  color: #f0d9d4;
}

.audience-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 0;
  padding-bottom: 0;
  background: #efe6d9;
}

.audience-card {
  min-height: 630px;
  padding: clamp(58px, 7vw, 100px);
}

.student-card {
  background: var(--ink);
  color: #fff;
}

.parent-card {
  background: var(--paper-light);
}

.audience-label {
  display: inline-block;
  padding-bottom: 9px;
  color: var(--red-soft);
  border-bottom: 1px solid currentColor;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.parent-card .audience-label {
  color: var(--red);
}

.audience-card h2 {
  margin-top: 52px;
  font-size: clamp(40px, 4.2vw, 62px);
  line-height: 1.2;
}

.audience-card ul {
  display: grid;
  gap: 0;
  margin: 70px 0 0;
  padding: 0;
  list-style: none;
}

.audience-card li {
  position: relative;
  padding: 18px 0 18px 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  color: #d8cecb;
  font-size: 13px;
}

.parent-card li {
  border-color: var(--line);
  color: var(--muted);
}

.audience-card li::before {
  position: absolute;
  top: 23px;
  left: 3px;
  width: 7px;
  height: 7px;
  background: var(--red-soft);
  border-radius: 50%;
  content: "";
}

.teaching-section {
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  gap: clamp(60px, 10vw, 160px);
  align-items: center;
  background: var(--paper-light);
}

.teaching-copy > p:last-child {
  max-width: 460px;
  margin: 35px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.teaching-board {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  border: 1px solid var(--line);
}

.board-main {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
  grid-row: span 3;
  overflow: hidden;
  background: var(--red);
  color: #fff;
}

.board-main::before,
.board-main::after {
  position: absolute;
  width: 320px;
  height: 320px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  content: "";
}

.board-main::after {
  width: 430px;
  height: 430px;
}

.board-main > span {
  position: absolute;
  top: 30px;
  left: 30px;
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

.loop-center {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 126px;
  height: 126px;
  background: #fff9f0;
  color: var(--red);
  border-radius: 50%;
  box-shadow: 0 0 0 22px rgba(255, 255, 255, 0.07);
}

.loop-center strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 46px;
  line-height: 1;
}

.loop-center small {
  font-family: Georgia, serif;
  font-size: 8px;
  letter-spacing: 0.18em;
}

.loop-item {
  position: absolute;
  z-index: 2;
  display: grid;
  width: 78px;
  height: 36px;
  place-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 99px;
  font-size: 12px;
}

.loop-a {
  top: 88px;
}

.loop-b {
  right: 36px;
}

.loop-c {
  bottom: 88px;
}

.loop-d {
  left: 36px;
}

.board-note {
  min-height: 173px;
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 12px;
  align-content: center;
  padding: 30px;
  background: #f7f0e7;
  border-left: 1px solid var(--line);
}

.board-note + .board-note {
  border-top: 1px solid var(--line);
}

.board-note span {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 11px;
}

.board-note p {
  margin: 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: 15px;
  line-height: 1.6;
}

.faq-section {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: clamp(60px, 11vw, 170px);
  background: #efe6d9;
}

.faq-list {
  border-top: 1px solid rgba(23, 19, 19, 0.23);
}

.faq-list details {
  border-bottom: 1px solid rgba(23, 19, 19, 0.23);
}

.faq-list summary {
  position: relative;
  display: grid;
  grid-template-columns: 42px 1fr 22px;
  gap: 20px;
  align-items: center;
  padding: 28px 0;
  cursor: pointer;
  list-style: none;
  font-family: "Songti SC", "STSong", serif;
  font-size: 19px;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary > span {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 11px;
}

.faq-list summary i {
  position: relative;
  width: 18px;
  height: 18px;
}

.faq-list summary i::before,
.faq-list summary i::after {
  position: absolute;
  top: 8px;
  right: 0;
  left: 0;
  height: 1px;
  background: var(--ink);
  content: "";
  transition: transform 180ms ease;
}

.faq-list summary i::after {
  transform: rotate(90deg);
}

.faq-list details[open] summary i::after {
  transform: rotate(0);
}

.faq-list details p {
  margin: -6px 38px 26px 62px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.contact-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 0.9fr;
  gap: 1px;
  padding: 0;
  background: rgba(255, 255, 255, 0.17);
  color: #fff;
}

.contact-copy,
.wechat-card,
.address-card {
  min-height: 520px;
  padding: clamp(52px, 6vw, 84px);
  background: var(--red);
}

.contact-copy h2 {
  margin-top: 50px;
  font-size: clamp(40px, 4.2vw, 62px);
  line-height: 1.2;
}

.contact-copy > p:last-child {
  max-width: 430px;
  margin: 35px 0 0;
  color: #ead6d1;
  font-size: 13px;
  line-height: 1.9;
}

.wechat-card,
.address-card {
  background: var(--red-dark);
}

.wechat-card {
  display: flex;
  flex-direction: column;
}

.wechat-label,
.address-card > span {
  color: #dcbab4;
  font-size: 11px;
  letter-spacing: 0.14em;
}

.wechat-prompt {
  margin-top: 84px;
}

.wechat-prompt > span {
  color: #dcbab4;
  font-size: 10px;
}

.wechat-prompt h3 {
  margin: 13px 0 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(29px, 2.7vw, 40px);
  line-height: 1.35;
}

.wechat-prompt p {
  margin: 20px 0 0;
  color: #dcbab4;
  font-size: 11px;
  line-height: 1.8;
}

.wechat-prompt p strong {
  color: #fff;
  font-family: Georgia, serif;
  font-size: 13px;
}

.open-wechat-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 18px 0;
  background: transparent;
  color: #fff;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.36);
  border-bottom: 1px solid rgba(255, 255, 255, 0.36);
  cursor: pointer;
}

.open-wechat-button:hover {
  color: #f3d6d1;
}

.wechat-modal-backdrop {
  --wechat-origin-x: 50vw;
  --wechat-origin-y: 50vh;
  position: fixed;
  z-index: 500;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  padding: 34px;
  background: rgba(13, 9, 9, 0.76);
  backdrop-filter: blur(14px);
  clip-path: circle(
    150vmax at var(--wechat-origin-x) var(--wechat-origin-y)
  );
  animation: wechat-backdrop-expand 520ms
    cubic-bezier(0.22, 0.78, 0.2, 1) both;
}

.wechat-modal-backdrop.is-closing {
  pointer-events: none;
  animation: wechat-backdrop-collapse 440ms
    cubic-bezier(0.65, 0, 0.78, 0.22) both;
}

.wechat-modal {
  position: relative;
  isolation: isolate;
  width: min(900px, 100%);
  max-height: calc(100vh - 68px);
  overflow-y: auto;
  padding: 38px;
  background: #f6efe5;
  color: var(--ink);
  border-radius: 4px 4px 30px 4px;
  box-shadow: 0 35px 100px rgba(0, 0, 0, 0.32);
  transform-origin: center;
  animation: wechat-modal-expand 560ms
    cubic-bezier(0.16, 0.86, 0.24, 1) both;
}

.wechat-modal::before {
  position: absolute;
  z-index: -1;
  inset: -32%;
  background:
    radial-gradient(
      circle at 18% 24%,
      rgba(169, 24, 37, 0.14),
      transparent 28%
    ),
    radial-gradient(
      circle at 84% 82%,
      rgba(182, 150, 100, 0.13),
      transparent 30%
    );
  content: "";
  pointer-events: none;
  animation: wechat-modal-ambient 9s ease-in-out infinite alternate;
}

.wechat-modal-backdrop.is-closing .wechat-modal {
  animation: wechat-modal-collapse 390ms
    cubic-bezier(0.55, 0, 0.78, 0.22) both;
}

.wechat-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(23, 19, 19, 0.16);
  animation: wechat-content-in 620ms 150ms
    cubic-bezier(0.2, 0.78, 0.22, 1) both;
}

.wechat-modal-header > div {
  flex: 1;
}

.wechat-modal-header span {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.15em;
}

.wechat-modal-header h2 {
  margin: 9px 0 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(29px, 3vw, 42px);
  line-height: 1.2;
}

.wechat-modal-header p {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.wechat-remark {
  width: min(100%, 510px);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
  padding: 11px 13px;
  background: rgba(169, 24, 37, 0.075);
  border-left: 3px solid var(--red);
  border-radius: 2px;
}

.wechat-remark > span {
  color: var(--muted);
  font-size: 9px;
  white-space: nowrap;
}

.wechat-remark > strong {
  color: var(--red);
  font-family: "Songti SC", "STSong", serif;
  font-size: 15px;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.wechat-remark > button {
  min-width: 78px;
  margin-left: auto;
  padding: 7px 10px;
  background: var(--red);
  color: #fff;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  font-size: 9px;
}

.wechat-modal-close {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  padding: 0 0 4px;
  background: transparent;
  color: var(--ink);
  border: 1px solid rgba(23, 19, 19, 0.2);
  border-radius: 50%;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 27px;
  line-height: 1;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.wechat-modal-close:hover {
  background: var(--red);
  color: #fff;
  border-color: var(--red);
  transform: rotate(8deg);
}

.wechat-option-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 26px;
  animation: wechat-content-in 650ms 240ms
    cubic-bezier(0.2, 0.78, 0.22, 1) both;
}

.contact-option {
  padding: 20px;
  background: #fffaf4;
  border: 1px solid rgba(23, 19, 19, 0.12);
  border-radius: 3px;
}

.contact-option.featured {
  border-color: rgba(169, 24, 37, 0.52);
  box-shadow: inset 0 3px 0 var(--red);
}

.contact-option-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.contact-option-heading > span {
  padding: 6px 9px;
  background: #efe3d6;
  color: var(--red);
  border-radius: 2px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.featured .contact-option-heading > span {
  background: var(--red);
  color: #fff;
}

.contact-option-heading small {
  color: var(--muted);
  font-size: 10px;
}

.contact-qr-link {
  display: block;
  margin-top: 16px;
  text-align: center;
}

.contact-qr-image {
  width: 100%;
  height: min(38vh, 360px);
  display: block;
  object-fit: contain;
  background: #fff;
}

.contact-qr-link > small {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-size: 9px;
}

.contact-id-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(23, 19, 19, 0.12);
}

.contact-id-row > div {
  display: grid;
  gap: 5px;
}

.contact-id-row span {
  color: var(--muted);
  font-size: 9px;
}

.contact-id-row strong {
  font-family: Georgia, serif;
  font-size: 20px;
}

.contact-id-row button {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 10px 13px;
  background: transparent;
  color: var(--red);
  border: 1px solid rgba(169, 24, 37, 0.42);
  border-radius: 2px;
  cursor: pointer;
  font-size: 10px;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.34),
    0 0 14px rgba(169, 24, 37, 0.045);
  animation: copy-button-breathe 4.6s ease-in-out infinite;
}

.contact-id-row button:hover {
  background: var(--red);
  color: #fff;
}

.contact-id-row button::before {
  position: absolute;
  z-index: -1;
  top: -70%;
  bottom: -70%;
  left: -65%;
  width: 34%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.34),
    transparent
  );
  content: "";
  opacity: 0.5;
  pointer-events: none;
  transform: rotate(14deg) translateX(-220%);
  animation: copy-button-shine 4.2s ease-in-out infinite;
}

@keyframes copy-button-breathe {
  50% {
    border-color: rgba(169, 24, 37, 0.7);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.38),
      0 0 18px rgba(169, 24, 37, 0.085);
  }
}

@keyframes copy-button-shine {
  0%,
  58% {
    transform: rotate(14deg) translateX(-220%);
  }
  82%,
  100% {
    transform: rotate(14deg) translateX(540%);
  }
}

.wechat-modal-note {
  min-height: 17px;
  margin: 20px 0 0;
  color: var(--muted);
  font-size: 10px;
  text-align: center;
  animation: wechat-content-in 600ms 330ms
    cubic-bezier(0.2, 0.78, 0.22, 1) both;
}

@keyframes wechat-backdrop-expand {
  from {
    background: rgba(13, 9, 9, 0);
    backdrop-filter: blur(0);
    clip-path: circle(
      28px at var(--wechat-origin-x) var(--wechat-origin-y)
    );
  }
}

@keyframes wechat-backdrop-collapse {
  from {
    background: rgba(13, 9, 9, 0.76);
    backdrop-filter: blur(14px);
    clip-path: circle(
      150vmax at var(--wechat-origin-x) var(--wechat-origin-y)
    );
  }

  to {
    background: rgba(13, 9, 9, 0);
    backdrop-filter: blur(0);
    clip-path: circle(
      28px at var(--wechat-origin-x) var(--wechat-origin-y)
    );
  }
}

@keyframes wechat-modal-expand {
  from {
    opacity: 0;
    transform: translateY(34px) scale(0.78);
  }

  62% {
    opacity: 1;
    transform: translateY(-4px) scale(1.012);
  }
}

@keyframes wechat-modal-collapse {
  to {
    opacity: 0;
    transform: translateY(24px) scale(0.82);
  }
}

@keyframes wechat-content-in {
  from {
    opacity: 0;
    translate: 0 22px;
    filter: blur(7px);
  }

  to {
    opacity: 1;
    translate: 0 0;
    filter: blur(0);
  }
}

@keyframes wechat-modal-ambient {
  from {
    transform: translate3d(-2%, -1%, 0) rotate(-2deg);
  }

  to {
    transform: translate3d(3%, 2%, 0) rotate(2deg);
  }
}

.address-card {
  position: relative;
  background: var(--ink);
}

.address-card strong {
  display: block;
  margin-top: 92px;
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(22px, 2.1vw, 31px);
  line-height: 1.58;
}

.address-card a {
  position: absolute;
  right: clamp(52px, 6vw, 84px);
  bottom: 84px;
  left: clamp(52px, 6vw, 84px);
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.23);
  border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  font-size: 13px;
}

footer {
  min-height: 180px;
  display: grid;
  grid-template-columns: 0.8fr 1.4fr 0.6fr;
  gap: 50px;
  align-items: center;
  padding: 38px clamp(24px, 7.5vw, 128px);
  background: #0f0c0c;
  color: #fff;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark.small {
  width: 38px;
  height: 38px;
  font-size: 20px;
}

.footer-brand div {
  display: grid;
  gap: 5px;
}

.footer-brand strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 17px;
}

.footer-brand small,
footer p,
footer > span {
  color: #a69b98;
  font-size: 10px;
  line-height: 1.7;
}

footer p {
  margin: 0;
}

footer > span {
  text-align: right;
}

.mobile-contact {
  display: none;
}

.scroll-reveal-ready .reveal-item {
  opacity: 0;
  translate: 0 34px;
  filter: blur(7px);
  transition:
    opacity 1.05s cubic-bezier(0.2, 0.7, 0.2, 1),
    translate 1.05s cubic-bezier(0.2, 0.7, 0.2, 1),
    filter 1.2s ease;
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, translate, filter;
}

.scroll-reveal-ready .reveal-item.is-visible {
  opacity: 1;
  translate: 0 0;
  filter: blur(0);
}

@media (max-width: 1180px) {
  .hero {
    grid-template-columns: 1fr 430px;
    gap: 42px;
    padding-right: 55px;
    padding-left: 55px;
  }

  .hero h1 {
    font-size: 57px;
  }

  .section {
    padding-right: 55px;
    padding-left: 55px;
  }

  .course-panel-intro,
  .course-panel-details {
    padding: 60px 46px;
  }

  .contact-copy,
  .wechat-card,
  .address-card {
    padding: 60px 40px;
  }

  .advantage-card {
    padding-right: 22px;
    padding-left: 22px;
  }

  .teacher-hero {
    grid-template-columns:
      minmax(330px, 0.85fr)
      minmax(320px, 0.8fr)
      minmax(290px, 0.7fr);
    padding-right: 0;
    padding-left: 0;
  }

  .teacher-hero-copy {
    padding-right: 42px;
    padding-left: 42px;
  }

  .teacher-profile-panel {
    padding-right: 30px;
    padding-left: 30px;
  }

  .faculty-copy {
    left: 36px;
    width: 45vw;
  }

  .faculty-copy h1 {
    font-size: clamp(50px, 5.3vw, 68px);
  }

  .faculty-portrait-stage {
    left: 23%;
    width: 50%;
  }

  .faculty-profile-card,
  .faculty-switcher {
    right: 30px;
  }

  .faculty-profile-card {
    width: 33vw;
    padding-right: 22px;
    padding-left: 22px;
  }

  .faculty-switcher {
    width: 36vw;
  }
}

@media (max-width: 960px) {
  .desktop-nav {
    display: none;
  }

  .header-cta {
    margin-left: auto;
  }

  .hero {
    grid-template-columns: 1fr;
    padding-top: 140px;
    padding-bottom: 80px;
  }

  .hero::before {
    top: auto;
    width: 100%;
    height: 38%;
  }

  .hero::after {
    display: none;
  }

  .hero-copy {
    max-width: 790px;
  }

  .hero h1 {
    font-size: clamp(49px, 8vw, 72px);
  }

  .hero-course-card {
    width: min(100%, 620px);
    margin-top: 42px;
    margin-right: auto;
  }

  .teacher-hero {
    grid-template-columns: 1fr 1fr;
    padding: 82px 0 0;
  }

  .teacher-hero::before {
    width: 50%;
    height: auto;
  }

  .teacher-hero-copy {
    grid-column: 1 / -1;
    min-height: 660px;
    padding: 90px 64px 72px;
  }

  .teacher-hero h1 {
    max-width: 720px;
  }

  .teacher-hero .hero-lead {
    max-width: 620px;
  }

  .teacher-offer {
    max-width: 620px;
  }

  .teacher-stage {
    min-height: 720px;
  }

  .teacher-stage-visual {
    background-size: 300% auto;
  }

  .teacher-profile-panel {
    min-height: 720px;
  }

  .faculty-hero {
    min-height: 1220px;
  }

  .faculty-hero::before {
    width: 48%;
    height: 55%;
  }

  .faculty-copy {
    top: 142px;
    left: 44px;
    width: min(78vw, 700px);
  }

  .faculty-copy h1 {
    font-size: clamp(56px, 7.4vw, 70px);
  }

  .faculty-portrait-stage {
    top: 410px;
    bottom: 59px;
    left: -2%;
    width: 61%;
  }

  .faculty-profile-card {
    top: 485px;
    right: 32px;
    width: 47vw;
  }

  .faculty-switcher {
    right: 32px;
    bottom: 86px;
    width: 48vw;
  }

  .faculty-switcher button {
    grid-template-columns: 1fr;
    height: 112px;
  }

  .faculty-switcher img {
    width: 100%;
    height: 57px;
  }

  .faculty-switcher button > span {
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .faculty-switcher em {
    display: none;
  }

  .trust-strip {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .split-heading,
  .teaching-section,
  .faq-section {
    grid-template-columns: 1fr;
  }

  .split-heading {
    gap: 35px;
  }

  .step-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .course-panel {
    grid-template-columns: 1fr;
  }

  .course-panel-intro {
    min-height: 610px;
  }

  .advantage-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .teaching-copy > p:last-child {
    max-width: 650px;
  }

  .contact-section {
    grid-template-columns: 1fr 1fr;
  }

  .contact-copy {
    grid-column: 1 / -1;
    min-height: 430px;
  }

  footer {
    grid-template-columns: 1fr 1.5fr;
  }

  footer > span {
    display: none;
  }
}

@media (max-width: 720px) {
  html {
    scroll-padding-top: 72px;
  }

  body {
    padding-bottom: 64px;
  }

  .site-header {
    height: 70px;
    padding: 0 18px;
  }

  .brand-mark {
    width: 37px;
    height: 37px;
    font-size: 20px;
  }

  .brand-copy strong {
    font-size: 17px;
  }

  .header-cta {
    display: none;
  }

  .hero {
    min-height: auto;
    gap: 26px;
    padding: 112px 20px 58px;
  }

  .teacher-hero {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 70px 0 0;
  }

  .teacher-hero-copy {
    min-height: auto;
    padding: 78px 20px 64px;
  }

  .teacher-hero h1 {
    font-size: clamp(40px, 12vw, 54px);
  }

  .teacher-hero .hero-actions {
    align-items: stretch;
  }

  .teacher-offer {
    margin-top: 42px;
  }

  .teacher-offer > p {
    font-size: 31px;
  }

  .teacher-stage {
    min-height: 560px;
  }

  .teacher-stage-visual {
    background-size: 300% auto;
  }

  .teacher-profile-panel {
    min-height: 710px;
    padding: 54px 20px 28px;
  }

  .teacher-profile-copy {
    min-height: 390px;
  }

  .teacher-profile-index {
    margin-bottom: 42px;
  }

  .teacher-profile-copy h2 {
    font-size: 37px;
  }

  .teacher-thumbnail {
    height: 128px;
    background-size: 300% auto;
  }

  .faculty-hero {
    min-height: auto;
    padding-top: 70px;
  }

  .faculty-hero::before {
    display: none;
  }

  .faculty-background-word {
    right: -9vw;
    bottom: 520px;
    font-size: 31vw;
  }

  .faculty-copy {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    padding: 62px 20px 18px;
  }

  .faculty-kicker {
    margin-bottom: 20px;
  }

  .faculty-copy h1 {
    font-size: clamp(45px, 14vw, 64px);
    line-height: 0.94;
  }

  .faculty-name-line {
    flex-direction: column;
    gap: 6px;
    margin-top: 24px;
  }

  .faculty-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .faculty-primary-action,
  .faculty-secondary-action {
    justify-content: space-between;
  }

  .faculty-portrait-stage {
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    width: 100%;
    height: 540px;
    margin-top: -12px;
  }

  .faculty-portrait-halo {
    top: 26%;
    width: 145vw;
    height: 145vw;
  }

  .faculty-profile-card {
    position: relative;
    top: auto;
    right: auto;
    width: auto;
    margin: -12px 18px 0;
    padding: 25px 22px;
  }

  .faculty-profile-heading h2 {
    font-size: 31px;
  }

  .faculty-biography {
    font-size: 11px;
  }

  .faculty-switcher {
    position: relative;
    right: auto;
    bottom: auto;
    width: auto;
    margin: 18px;
  }

  .faculty-switcher button {
    height: 104px;
    display: block;
    padding: 6px;
  }

  .faculty-switcher img {
    width: 100%;
    height: 62px;
  }

  .faculty-switcher button > span {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    padding: 8px 2px 0;
  }

  .faculty-switcher strong {
    font-size: 11px;
  }

  .faculty-status-bar {
    position: relative;
    min-height: 60px;
    grid-template-columns: 1fr auto;
    padding: 0 18px;
  }

  .faculty-status-bar > strong {
    display: none;
  }

  .faculty-auto-status > span {
    display: none;
  }

  .hero::before {
    height: 34%;
  }

  .hero h1 {
    font-size: clamp(40px, 12.3vw, 55px);
    line-height: 1.18;
  }

  .eyebrow {
    flex-wrap: wrap;
    gap: 11px;
    margin-bottom: 19px;
    font-size: 10px;
  }

  .hero-lead {
    margin-top: 24px;
    font-size: 15px;
    line-height: 1.85;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }

  .primary-button {
    justify-content: space-between;
  }

  .hero-facts {
    margin-top: 46px;
  }

  .hero-facts div {
    padding-right: 9px;
  }

  .hero-facts div + div {
    padding-left: 12px;
  }

  .hero-facts dt {
    font-size: 21px;
  }

  .hero-facts dd {
    font-size: 9px;
    line-height: 1.5;
  }

  .hero-course-card {
    padding: 27px 23px 24px;
    border-radius: 3px 3px 29px 3px;
  }

  .course-kicker {
    margin-top: 30px;
  }

  .hero-course-card h2 {
    font-size: 34px;
  }

  .price-row strong {
    font-size: 58px;
  }

  .course-metrics span {
    font-size: 14px;
  }

  .course-metrics small {
    font-size: 9px;
  }

  .trust-strip {
    padding: 25px 20px;
  }

  .trust-strip p {
    font-size: 12px;
    line-height: 1.7;
  }

  .trust-items {
    flex-wrap: wrap;
    gap: 11px;
    font-size: 10px;
  }

  .section {
    padding: 82px 20px;
  }

  .section-heading h2,
  .teaching-copy h2,
  .faq-title h2 {
    font-size: 39px;
  }

  .split-heading > p {
    font-size: 13px;
  }

  .step-grid {
    grid-template-columns: 1fr;
    margin-top: 45px;
  }

  .step-card {
    min-height: auto;
    padding: 28px 22px;
  }

  .course-section {
    padding-top: 0;
  }

  .course-panel-intro {
    min-height: 560px;
    padding: 46px 28px;
  }

  .outline-label {
    margin-top: 35px;
    font-size: 65px;
  }

  .course-panel-intro h2 {
    font-size: 52px;
  }

  .course-panel-intro > a {
    right: 28px;
    bottom: 48px;
    left: 28px;
  }

  .course-panel-details {
    padding: 43px 25px;
  }

  .detail-header {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }

  .detail-header > div {
    padding-left: 0;
    border-left: 0;
  }

  .detail-header > div + div {
    padding-left: 20px;
  }

  .detail-header > div:nth-child(3) {
    grid-column: 1 / -1;
    padding-top: 24px;
    padding-left: 0;
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .daily-study {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 42px;
  }

  .advantage-grid {
    grid-template-columns: 1fr;
    margin-top: 48px;
  }

  .advantage-card {
    min-height: 250px;
  }

  .advantage-card h3 {
    margin-top: 68px;
  }

  .audience-section {
    grid-template-columns: 1fr;
    padding: 0;
  }

  .audience-card {
    min-height: auto;
    padding: 70px 26px;
  }

  .audience-card h2 {
    font-size: 39px;
  }

  .audience-card ul {
    margin-top: 46px;
  }

  .teaching-section {
    gap: 50px;
  }

  .teaching-board {
    grid-template-columns: 1fr;
  }

  .board-main {
    min-height: 440px;
    grid-row: auto;
  }

  .board-note {
    min-height: 120px;
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .faq-section {
    gap: 52px;
  }

  .faq-list summary {
    grid-template-columns: 29px 1fr 18px;
    gap: 11px;
    padding: 24px 0;
    font-size: 16px;
    line-height: 1.6;
  }

  .faq-list details p {
    margin: -3px 10px 24px 40px;
  }

  .contact-section {
    grid-template-columns: 1fr;
  }

  .contact-copy,
  .wechat-card,
  .address-card {
    min-height: 430px;
    padding: 58px 26px;
  }

  .contact-copy {
    grid-column: auto;
  }

  .contact-copy h2 {
    font-size: 39px;
  }

  .address-card strong {
    margin-top: 70px;
  }

  .wechat-prompt {
    margin-top: 65px;
  }

  .wechat-modal-backdrop {
    display: block;
    padding: 14px;
  }

  .wechat-modal {
    max-height: calc(100vh - 28px);
    padding: 25px 18px;
    border-radius: 3px 3px 22px 3px;
  }

  .wechat-modal-header {
    gap: 18px;
  }

  .wechat-remark {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .wechat-remark > button {
    margin-left: 0;
  }

  .wechat-modal-header h2 {
    font-size: 30px;
  }

  .wechat-modal-close {
    flex-basis: 38px;
    width: 38px;
    height: 38px;
  }

  .wechat-option-grid {
    grid-template-columns: 1fr;
  }

  .contact-option {
    padding: 16px;
  }

  .contact-qr-image {
    height: 370px;
  }

  .address-card a {
    right: 26px;
    bottom: 60px;
    left: 26px;
  }

  footer {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 45px 22px;
  }

  .mobile-contact {
    position: fixed;
    z-index: 120;
    right: 0;
    bottom: 0;
    left: 0;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    background: var(--red);
    color: #fff;
    box-shadow: 0 -10px 30px rgba(38, 18, 18, 0.15);
    font-size: 15px;
    font-weight: 700;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  .laser-flow-layer {
    display: none;
  }
}

/* Gateway home */

.gateway-page {
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 48%, rgba(66, 13, 42, 0.2), transparent 35%),
    #07060d;
  color: #fff;
}

.galaxy-canvas {
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  cursor: crosshair;
}

.gateway-noise {
  position: absolute;
  z-index: 1;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.016) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.016) 1px, transparent 1px),
    radial-gradient(circle at center, transparent 35%, rgba(2, 2, 8, 0.5) 100%);
  background-size:
    58px 58px,
    58px 58px,
    100% 100%;
  pointer-events: none;
}

.gateway-header {
  position: absolute;
  z-index: 5;
  top: 24px;
  right: clamp(18px, 4vw, 62px);
  left: clamp(18px, 4vw, 62px);
  width: min(1180px, calc(100% - 36px));
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 14px 0 18px;
  background: rgba(15, 13, 23, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  animation: gateway-header-in 900ms 120ms
    cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.gateway-brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
}

.gateway-brand > span {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #c62234, #78111d);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px 12px 12px 4px;
  box-shadow: 0 10px 28px rgba(169, 24, 37, 0.32);
  font-family: "Songti SC", "STSong", serif;
  font-size: 22px;
  font-weight: 700;
}

.gateway-brand > div {
  display: grid;
  gap: 2px;
}

.gateway-brand strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 18px;
  letter-spacing: 0.04em;
}

.gateway-brand small {
  color: rgba(255, 255, 255, 0.48);
  font-family: Georgia, serif;
  font-size: 7px;
  letter-spacing: 0.16em;
}

.gateway-header nav {
  display: flex;
  align-items: center;
  gap: 30px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
}

.gateway-header nav > a:not(.gateway-nav-cta) {
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.gateway-header nav > a:not(.gateway-nav-cta):hover {
  color: #fff;
  transform: translateY(-1px);
}

.gateway-nav-cta {
  padding: 13px 20px;
  background: #fff;
  color: #110e16;
  border-radius: 11px;
  box-shadow: 0 8px 28px rgba(255, 255, 255, 0.1);
  font-weight: 700;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.gateway-nav-cta:hover {
  background: #b71c2b;
  color: #fff;
  transform: translateY(-2px);
}

.gateway-hero {
  position: relative;
  z-index: 3;
  width: min(980px, calc(100% - 44px));
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 142px 0 210px;
  text-align: center;
  pointer-events: none;
}

.gateway-hero > * {
  pointer-events: auto;
}

.gateway-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 6px 13px 6px 6px;
  background: rgba(15, 13, 23, 0.62);
  color: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 99px;
  backdrop-filter: blur(12px);
  font-size: 10px;
  letter-spacing: 0.06em;
  animation: gateway-copy-in 900ms 220ms
    cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.gateway-badge span {
  padding: 5px 9px;
  background: #fff;
  color: #17121a;
  border-radius: 99px;
  font-size: 9px;
  font-weight: 700;
}

.gateway-overline {
  margin: 26px 0 0;
  color: rgba(255, 255, 255, 0.44);
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.28em;
  animation: gateway-copy-in 900ms 300ms
    cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.gateway-hero h1 {
  margin: 18px 0 0;
  font-family:
    "Songti SC", "STSong", "PingFang SC", "Microsoft YaHei", serif;
  font-size: clamp(48px, 6.4vw, 88px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.055em;
  text-wrap: balance;
  text-shadow: 0 12px 55px rgba(0, 0, 0, 0.52);
  animation: gateway-title-in 1.05s 340ms
    cubic-bezier(0.16, 0.78, 0.18, 1) both;
}

.gateway-hero h1 em {
  display: inline-block;
  background: linear-gradient(90deg, #f8f4ef 4%, #e35e6d 48%, #e8c08c 94%);
  background-clip: text;
  color: transparent;
  font-style: normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gateway-description {
  margin: 27px 0 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: clamp(12px, 1.2vw, 15px);
  line-height: 1.95;
  animation: gateway-copy-in 900ms 480ms
    cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.gateway-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 34px;
  animation: gateway-copy-in 900ms 570ms
    cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.gateway-primary,
.gateway-secondary {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  padding: 0 22px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  transition:
    transform 200ms ease,
    background 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;
}

.gateway-primary {
  background: #fff;
  color: #110e16;
  box-shadow: 0 14px 44px rgba(255, 255, 255, 0.12);
}

.gateway-primary:hover {
  background: #fff8f1;
  box-shadow:
    0 18px 50px rgba(255, 255, 255, 0.16),
    0 0 34px rgba(204, 36, 61, 0.16);
  transform: translateY(-3px);
}

.gateway-primary span {
  font-size: 16px;
}

.gateway-secondary {
  background: rgba(20, 16, 27, 0.58);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(12px);
}

.gateway-secondary:hover {
  background: rgba(169, 24, 37, 0.24);
  color: #fff;
  border-color: rgba(219, 73, 91, 0.38);
  transform: translateY(-3px);
}

.gateway-proof {
  position: absolute;
  z-index: 4;
  bottom: 25px;
  left: 50%;
  width: min(860px, calc(100% - 44px));
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 13px;
  background: rgba(12, 10, 18, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(18px);
  transform: translateX(-50%);
  animation: gateway-proof-in 1s 720ms
    cubic-bezier(0.2, 0.72, 0.2, 1) both;
}

.gateway-proof > div {
  position: relative;
  min-height: 66px;
  display: grid;
  grid-template-columns: 27px 1fr;
  align-content: center;
  gap: 3px 10px;
  padding: 8px 20px;
}

.gateway-proof > div + div {
  border-left: 1px solid rgba(255, 255, 255, 0.09);
}

.gateway-proof span {
  grid-row: span 2;
  color: #d24355;
  font-family: Georgia, serif;
  font-size: 9px;
  line-height: 1.8;
}

.gateway-proof strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 14px;
}

.gateway-proof small {
  color: rgba(255, 255, 255, 0.4);
  font-size: 9px;
}

.gateway-corner-note {
  position: absolute;
  z-index: 3;
  right: 28px;
  bottom: 27px;
  display: grid;
  gap: 4px;
  color: rgba(255, 255, 255, 0.22);
  text-align: right;
}

.gateway-corner-note span {
  font-family: Arial, sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.gateway-corner-note small {
  font-family: Georgia, serif;
  font-size: 7px;
  letter-spacing: 0.14em;
}

@keyframes gateway-header-in {
  from {
    opacity: 0;
    translate: 0 -22px;
  }
}

@keyframes gateway-copy-in {
  from {
    opacity: 0;
    translate: 0 18px;
    filter: blur(7px);
  }
}

@keyframes gateway-title-in {
  from {
    opacity: 0;
    scale: 0.94;
    translate: 0 25px;
    filter: blur(10px);
  }
}

@keyframes gateway-proof-in {
  from {
    opacity: 0;
    transform: translate(-50%, 24px);
    filter: blur(8px);
  }
}

@media (max-width: 900px) {
  .gateway-header nav > a:not(.gateway-nav-cta) {
    display: none;
  }

  .gateway-corner-note {
    display: none;
  }

  .gateway-hero {
    padding-bottom: 235px;
  }
}

@media (max-width: 640px) {
  .gateway-header {
    top: 14px;
    right: 12px;
    left: 12px;
    width: calc(100% - 24px);
    height: 64px;
    padding-left: 12px;
    border-radius: 15px;
  }

  .gateway-brand > span {
    width: 38px;
    height: 38px;
    font-size: 20px;
  }

  .gateway-brand strong {
    font-size: 16px;
  }

  .gateway-nav-cta {
    padding: 11px 14px;
    font-size: 11px;
  }

  .gateway-hero {
    width: calc(100% - 34px);
    justify-content: flex-start;
    padding: 150px 0 285px;
  }

  .gateway-badge {
    font-size: 9px;
  }

  .gateway-overline {
    margin-top: 20px;
  }

  .gateway-hero h1 {
    margin-top: 16px;
    font-size: clamp(42px, 13vw, 58px);
    line-height: 1.13;
  }

  .gateway-description {
    margin-top: 22px;
    font-size: 12px;
  }

  .gateway-actions {
    width: 100%;
    display: grid;
    margin-top: 26px;
  }

  .gateway-primary,
  .gateway-secondary {
    width: 100%;
  }

  .gateway-proof {
    bottom: 14px;
    width: calc(100% - 24px);
    grid-template-columns: 1fr;
    padding: 7px 14px;
    border-radius: 14px;
  }

  .gateway-proof > div {
    min-height: 48px;
    grid-template-columns: 24px 1fr;
    padding: 7px 6px;
  }

  .gateway-proof > div + div {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-left: 0;
  }

  .gateway-proof strong {
    font-size: 12px;
  }

  .galaxy-canvas {
    cursor: default;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gateway-header,
  .gateway-badge,
  .gateway-overline,
  .gateway-hero h1,
  .gateway-description,
  .gateway-actions,
  .gateway-proof {
    opacity: 1;
    translate: 0;
    transform: none;
    filter: none;
  }

  .gateway-proof {
    transform: translateX(-50%);
  }
}


/* --- Free assessment --- */
.gateway-test {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 0 22px;
  color: #f7d9bd;
  border: 1px solid rgba(219, 73, 91, 0.42);
  border-radius: 12px;
  background: rgba(169, 24, 37, 0.18);
  font-size: 12px;
  font-weight: 700;
  transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
}

.gateway-test:hover {
  color: #fff;
  background: rgba(169, 24, 37, 0.4);
  border-color: rgba(244, 114, 128, 0.58);
  transform: translateY(-3px);
}

.assessment-invite {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.75fr) auto;
  gap: clamp(30px, 5vw, 78px);
  align-items: center;
  padding: 64px clamp(24px, 7.5vw, 128px);
  color: #fff;
  background:
    radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.12), transparent 24%),
    linear-gradient(120deg, var(--red-dark), var(--red));
}

.assessment-invite > div > p,
.assessment-kicker {
  margin: 0 0 16px;
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.assessment-invite > div > p {
  color: rgba(255, 255, 255, 0.62);
}

.assessment-invite h2 {
  margin: 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: clamp(30px, 3.4vw, 52px);
  font-weight: 500;
  line-height: 1.15;
}

.assessment-invite > p {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  line-height: 1.9;
}

.assessment-invite > a {
  min-width: 170px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  color: var(--red-dark);
  background: #fff;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 18px 40px rgba(69, 12, 20, 0.2);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.assessment-invite > a:hover {
  box-shadow: 0 22px 50px rgba(69, 12, 20, 0.28);
  transform: translateY(-3px);
}

.assessment-page {
  min-height: 100vh;
  overflow: hidden;
  color: var(--ink);
  background:
    linear-gradient(rgba(169, 24, 37, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(169, 24, 37, 0.025) 1px, transparent 1px),
    var(--paper-light);
  background-size: 42px 42px;
}

.assessment-header {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(24px, 6vw, 92px);
  background: rgba(251, 248, 242, 0.92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(16px);
}

.assessment-header-meta {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-size: 12px;
}

.assessment-header-meta span {
  color: var(--red);
  font-weight: 700;
  letter-spacing: 0.12em;
}

.assessment-header-meta a {
  padding-bottom: 5px;
  border-bottom: 1px solid var(--line);
}

.assessment-intro {
  min-height: calc(100vh - 88px);
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(430px, 0.75fr);
  gap: clamp(46px, 7vw, 110px);
  align-items: center;
  padding: 70px clamp(24px, 8vw, 138px) 82px;
}

.assessment-intro-copy {
  max-width: 690px;
}

.assessment-intro-copy h1,
.assessment-stage-heading h1,
.quiz-card h1,
.result-heading h1 {
  font-family: "Songti SC", "STSong", serif;
  font-weight: 500;
}

.assessment-intro-copy h1 {
  margin: 0;
  font-size: clamp(52px, 6.7vw, 100px);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.assessment-intro-copy h1 em,
.result-heading h1 em {
  display: block;
  color: var(--red);
  font-style: normal;
}

.assessment-intro-copy > p:not(.assessment-kicker) {
  max-width: 560px;
  margin: 30px 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
}

.assessment-start-button,
.assessment-solid-button {
  border: 0;
  color: #fff;
  background: var(--red);
  cursor: pointer;
  transition: background 180ms ease, transform 180ms ease, opacity 180ms ease;
}

.assessment-start-button {
  min-width: 220px;
  height: 58px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
  padding: 0 28px;
  border-radius: 999px;
  box-shadow: 0 18px 44px rgba(169, 24, 37, 0.22);
  font-weight: 700;
}

.assessment-start-button:hover,
.assessment-solid-button:hover:not(:disabled) {
  background: var(--red-dark);
  transform: translateY(-2px);
}

.assessment-intro-copy > small {
  display: block;
  margin-top: 18px;
  color: #9a8e88;
  font-size: 11px;
}

.assessment-intro-board {
  position: relative;
  min-height: 600px;
  overflow: hidden;
  display: grid;
  align-content: end;
  padding: 42px;
  color: #fff;
  background:
    radial-gradient(circle at 75% 15%, rgba(255, 255, 255, 0.16), transparent 26%),
    linear-gradient(145deg, #bd2936, var(--red-dark));
  border-radius: 36px 36px 36px 8px;
  box-shadow: var(--shadow);
}

.assessment-intro-board::before,
.assessment-intro-board::after {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  content: "";
}

.assessment-intro-board::before {
  top: -120px;
  right: -100px;
  width: 420px;
  height: 420px;
}

.assessment-intro-board::after {
  top: -40px;
  right: -15px;
  width: 250px;
  height: 250px;
}

.assessment-board-number {
  position: absolute;
  top: 18px;
  left: 34px;
  color: rgba(255, 255, 255, 0.12);
  font-family: Georgia, serif;
  font-size: 220px;
  line-height: 1;
}

.assessment-board-grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0;
  background: rgba(104, 5, 18, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  backdrop-filter: blur(12px);
}

.assessment-board-grid article {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 5px 16px;
  padding: 22px;
}

.assessment-board-grid article + article {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.assessment-board-grid span {
  grid-row: span 2;
  color: #eeb5a4;
  font-family: Georgia, serif;
  font-size: 11px;
}

.assessment-board-grid strong {
  font-family: "Songti SC", "STSong", serif;
  font-size: 20px;
}

.assessment-board-grid small {
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
}

.assessment-profile,
.assessment-quiz,
.assessment-result {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 72px 0 96px;
}

.assessment-stage-heading {
  position: relative;
  padding-bottom: 34px;
  border-bottom: 1px solid var(--line);
}

.assessment-stage-heading > span {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--muted);
  font-size: 11px;
}

.assessment-stage-heading h1 {
  margin: 0;
  font-size: clamp(38px, 5vw, 68px);
}

.profile-question-list {
  display: grid;
  gap: 0;
}

.profile-question-list fieldset {
  display: grid;
  grid-template-columns: minmax(260px, 0.7fr) 1.3fr;
  gap: 42px;
  align-items: center;
  margin: 0;
  padding: 30px 0;
  border: 0;
  border-bottom: 1px solid var(--line);
}

.profile-question-list legend {
  display: contents;
  font-family: "Songti SC", "STSong", serif;
  font-size: 20px;
}

.profile-question-list legend span {
  margin-right: 14px;
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 11px;
}

.profile-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.profile-options button,
.assessment-stage-actions > button:first-child,
.quiz-navigation > button:first-child,
.result-actions button,
.result-footer button {
  border: 1px solid var(--line);
  color: var(--ink);
  background: rgba(255, 255, 255, 0.65);
  cursor: pointer;
}

.profile-options button {
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 12px;
}

.profile-options button:hover,
.profile-options button.is-selected {
  color: #fff;
  background: var(--red);
  border-color: var(--red);
}

.assessment-stage-actions,
.quiz-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
}

.assessment-stage-actions > button,
.quiz-navigation > button {
  min-width: 130px;
  height: 50px;
  padding: 0 22px;
  border-radius: 999px;
}

.assessment-solid-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
}

.assessment-solid-button:disabled,
.quiz-navigation button:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.quiz-progress {
  display: grid;
  grid-template-columns: 150px 1fr 44px;
  gap: 24px;
  align-items: center;
  margin-bottom: 42px;
}

.quiz-progress > div:first-child {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.quiz-progress span {
  color: var(--red);
  font-weight: 700;
}

.quiz-progress strong {
  font-family: Georgia, serif;
  font-size: 13px;
}

.quiz-progress small {
  color: var(--muted);
  font-family: Georgia, serif;
  text-align: right;
}

.quiz-progress-track,
.subject-score-track {
  overflow: hidden;
  background: rgba(169, 24, 37, 0.1);
  border-radius: 999px;
}

.quiz-progress-track {
  height: 4px;
}

.quiz-progress-track i,
.subject-score-track i {
  height: 100%;
  display: block;
  background: var(--red);
  border-radius: inherit;
  transition: width 300ms ease;
}

.quiz-card {
  padding: clamp(30px, 5vw, 68px);
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(169, 24, 37, 0.12);
  border-radius: 32px 32px 32px 8px;
  box-shadow: 0 26px 80px rgba(69, 21, 24, 0.1);
}

.quiz-card-meta {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.1em;
}

.quiz-card-meta span {
  color: var(--red);
  font-weight: 700;
}

.quiz-card h1 {
  max-width: 920px;
  margin: 38px 0 46px;
  font-size: clamp(27px, 3.3vw, 44px);
  line-height: 1.4;
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.quiz-options button {
  position: relative;
  min-height: 74px;
  display: grid;
  grid-template-columns: 34px 1fr 20px;
  gap: 14px;
  align-items: center;
  padding: 14px 18px;
  color: var(--ink);
  background: var(--paper-light);
  border: 1px solid var(--line);
  border-radius: 16px;
  text-align: left;
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.quiz-options button > span {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  color: var(--red);
  border: 1px solid rgba(169, 24, 37, 0.25);
  border-radius: 50%;
  font-family: Georgia, serif;
}

.quiz-options button i {
  width: 11px;
  height: 11px;
  border: 1px solid #b9aaa5;
  border-radius: 50%;
}

.quiz-options button:hover {
  border-color: rgba(169, 24, 37, 0.5);
  transform: translateY(-2px);
}

.quiz-options button.is-selected {
  background: rgba(169, 24, 37, 0.07);
  border-color: var(--red);
}

.quiz-options button.is-selected i {
  background: var(--red);
  border-color: var(--red);
  box-shadow: inset 0 0 0 3px #fff;
}

.result-heading {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: clamp(40px, 7vw, 90px);
  align-items: center;
  padding-bottom: 54px;
  border-bottom: 1px solid var(--line);
}

.match-ring {
  --match-angle: 0deg;
  width: 220px;
  height: 220px;
  display: grid;
  place-content: center;
  gap: 6px;
  background: radial-gradient(circle, var(--paper-light) 61%, transparent 62%), conic-gradient(var(--red) var(--match-angle), rgba(169, 24, 37, 0.12) 0);
  border-radius: 50%;
  text-align: center;
}

.match-ring strong {
  font-family: Georgia, serif;
  font-size: 42px;
}

.match-ring span {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 0.12em;
}

.result-label {
  display: inline-flex;
  padding: 7px 12px;
  color: var(--red);
  background: rgba(169, 24, 37, 0.08);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.result-heading h1 {
  margin: 18px 0;
  font-size: clamp(38px, 5vw, 68px);
  line-height: 1.1;
}

.result-heading h1 em {
  margin-top: 7px;
}

.result-heading > div:last-child > p:last-child {
  max-width: 700px;
  margin: 0;
  color: var(--muted);
  line-height: 1.9;
}

.result-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 22px;
  margin-top: 28px;
}

.score-panel,
.next-step-panel {
  padding: 34px;
  border-radius: 24px;
}

.score-panel {
  background: #fff;
  border: 1px solid var(--line);
}

.result-panel-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
}

.result-panel-title span {
  color: var(--muted);
  font-size: 12px;
}

.result-panel-title strong {
  color: var(--red);
  font-family: Georgia, serif;
  font-size: 24px;
}

.subject-score + .subject-score {
  margin-top: 24px;
}

.subject-score > div:first-child {
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  font-size: 13px;
}

.subject-score-track {
  height: 8px;
}

.next-step-panel {
  color: #fff;
  background: var(--ink);
}

.next-step-panel > span {
  color: #d99199;
  font-family: Georgia, serif;
  font-size: 10px;
  letter-spacing: 0.18em;
}

.next-step-panel h2 {
  margin: 16px 0;
  font-family: "Songti SC", "STSong", serif;
  font-size: 34px;
}

.next-step-panel > p {
  max-width: 620px;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.9;
}

.result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.result-actions a,
.result-actions button {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 12px;
}

.result-actions a {
  color: #fff;
  background: var(--red);
}

.result-actions button {
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
}

.wrong-answer-review {
  margin-top: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
  border-radius: 24px;
}

.wrong-answer-review summary {
  display: flex;
  justify-content: space-between;
  padding: 24px 28px;
  font-family: "Songti SC", "STSong", serif;
  font-size: 20px;
  cursor: pointer;
  list-style: none;
}

.wrong-answer-review summary::-webkit-details-marker {
  display: none;
}

.wrong-answer-review > div {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 0 24px 24px;
}

.wrong-answer-review article {
  padding: 22px;
  background: var(--paper-light);
  border-radius: 16px;
}

.wrong-answer-review article > span {
  color: var(--red);
  font-size: 10px;
  font-weight: 700;
}

.wrong-answer-review h3 {
  margin: 12px 0;
  font-size: 14px;
  line-height: 1.6;
}

.wrong-answer-review p,
.wrong-answer-review small {
  display: block;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.perfect-score {
  grid-column: 1 / -1;
  text-align: center;
}

.result-footer {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  margin-top: 26px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

.result-footer p {
  max-width: 760px;
}

.result-footer button {
  min-width: 110px;
  height: 42px;
  border-radius: 999px;
}

@media (max-width: 980px) {
  .assessment-invite {
    grid-template-columns: 1fr;
  }

  .assessment-invite > a {
    width: max-content;
  }

  .assessment-intro {
    grid-template-columns: 1fr;
  }

  .assessment-intro-board {
    min-height: 480px;
  }

  .profile-question-list fieldset,
  .result-heading,
  .result-grid {
    grid-template-columns: 1fr;
  }

  .profile-question-list fieldset {
    gap: 20px;
  }
}

@media (max-width: 680px) {
  .gateway-actions {
    flex-wrap: wrap;
  }

  .gateway-test {
    width: 100%;
  }

  .assessment-header {
    height: 72px;
    padding: 0 16px;
  }

  .assessment-header .brand-copy small,
  .assessment-header-meta > span {
    display: none;
  }

  .assessment-header-meta {
    font-size: 11px;
  }

  .assessment-intro {
    min-height: auto;
    padding: 64px 20px 70px;
  }

  .assessment-intro-copy h1 {
    font-size: clamp(48px, 15vw, 68px);
  }

  .assessment-intro-board {
    min-height: 430px;
    padding: 24px;
    border-radius: 26px 26px 26px 8px;
  }

  .assessment-board-number {
    font-size: 160px;
  }

  .assessment-profile,
  .assessment-quiz,
  .assessment-result {
    width: min(100% - 30px, 1120px);
    padding: 48px 0 74px;
  }

  .assessment-stage-heading > span {
    position: static;
    display: block;
    margin-bottom: 10px;
  }

  .profile-options {
    display: grid;
    grid-template-columns: 1fr;
  }

  .profile-options button {
    width: 100%;
  }

  .quiz-progress {
    grid-template-columns: 112px 1fr 36px;
    gap: 12px;
  }

  .quiz-card {
    padding: 26px 18px;
    border-radius: 22px 22px 22px 6px;
  }

  .quiz-card h1 {
    margin: 28px 0;
    font-size: 25px;
  }

  .quiz-options {
    grid-template-columns: 1fr;
  }

  .quiz-options button {
    min-height: 64px;
  }

  .quiz-navigation > button {
    min-width: 112px;
  }

  .match-ring {
    width: 180px;
    height: 180px;
  }

  .result-heading h1 {
    font-size: 42px;
  }

  .score-panel,
  .next-step-panel {
    padding: 24px 20px;
  }

  .wrong-answer-review > div {
    grid-template-columns: 1fr;
    padding-right: 14px;
    padding-left: 14px;
  }

  .result-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}


/* --- Premium assessment emphasis --- */
.desktop-nav .nav-assessment-link {
  position: relative;
  min-height: 38px;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  padding: 0 17px;
  color: #fff;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), transparent 42%),
    linear-gradient(135deg, #8d101b, #bd1c2c 58%, #9e1522);
  border: 1px solid rgba(177, 24, 38, 0.24);
  border-radius: 999px;
  box-shadow:
    0 8px 24px rgba(146, 16, 28, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
  font-weight: 700;
  isolation: isolate;
  animation: assessment-nav-breathe 3.4s ease-in-out infinite;
}

.desktop-nav .nav-assessment-link::after {
  display: none;
}

.desktop-nav .nav-assessment-link::before {
  position: absolute;
  top: -80%;
  bottom: -80%;
  left: -44%;
  width: 28%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.48), transparent);
  content: "";
  pointer-events: none;
  transform: rotate(18deg);
  animation: assessment-nav-sheen 4.6s ease-in-out infinite;
}

.desktop-nav .nav-assessment-link:hover {
  color: #fff;
  box-shadow:
    0 12px 30px rgba(146, 16, 28, 0.3),
    0 0 0 4px rgba(169, 24, 37, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.assessment-invite {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin: 30px clamp(24px, 4.2vw, 72px) 0;
  padding: 72px clamp(26px, 6.5vw, 104px);
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    radial-gradient(circle at 83% 5%, rgba(255, 220, 198, 0.24), transparent 24%),
    radial-gradient(circle at 8% 115%, rgba(239, 80, 96, 0.34), transparent 38%),
    linear-gradient(118deg, #5a0711 0%, #8e0e1a 48%, #ba1d2d 100%);
  background-size: 34px 34px, 34px 34px, auto, auto, auto;
  border: 1px solid rgba(255, 215, 183, 0.22);
  border-radius: 30px;
  box-shadow:
    0 34px 80px rgba(65, 8, 15, 0.22),
    0 8px 24px rgba(100, 11, 22, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.17);
}

.assessment-invite::before {
  position: absolute;
  top: -45%;
  right: -7%;
  z-index: -1;
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, rgba(255, 236, 217, 0.18), rgba(255, 255, 255, 0.025) 48%, transparent 68%);
  border: 1px solid rgba(255, 235, 218, 0.16);
  border-radius: 50%;
  content: "";
  animation: assessment-panel-glow 6s ease-in-out infinite;
}

.assessment-invite::after {
  position: absolute;
  top: 0;
  right: 9%;
  left: 9%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 232, 211, 0.72), transparent);
  content: "";
  opacity: 0.8;
}

.assessment-invite > div > p {
  color: rgba(255, 230, 211, 0.74);
}

.assessment-invite h2 {
  text-shadow: 0 10px 32px rgba(44, 0, 5, 0.24);
}

.assessment-invite > p {
  color: rgba(255, 245, 237, 0.76);
}

.assessment-invite > a {
  position: relative;
  isolation: isolate;
  min-width: 188px;
  height: 60px;
  overflow: hidden;
  gap: 18px;
  color: #6d0a14;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 226, 209, 0.94));
  border: 1px solid rgba(255, 255, 255, 0.72);
  letter-spacing: 0.02em;
  box-shadow:
    0 20px 44px rgba(45, 0, 7, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  transition: color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.assessment-invite > a::before {
  position: absolute;
  top: -120%;
  bottom: -120%;
  left: -45%;
  z-index: -1;
  width: 34%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
  content: "";
  pointer-events: none;
  transform: rotate(18deg);
  animation: assessment-cta-sheen 4.2s ease-in-out infinite;
}

.assessment-invite > a span {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #8d101b;
  border-radius: 50%;
  box-shadow: 0 7px 18px rgba(105, 9, 19, 0.24);
  transition: transform 180ms ease;
}

.assessment-invite > a:hover {
  color: #56060e;
  box-shadow:
    0 26px 58px rgba(45, 0, 7, 0.34),
    0 0 0 5px rgba(255, 235, 218, 0.11),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  transform: translateY(-4px);
}

.assessment-invite > a:hover span {
  transform: translateX(3px);
}

@keyframes assessment-nav-breathe {
  0%, 100% {
    box-shadow: 0 8px 24px rgba(146, 16, 28, 0.2), 0 0 0 0 rgba(169, 24, 37, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.28);
  }
  50% {
    box-shadow: 0 10px 28px rgba(146, 16, 28, 0.27), 0 0 0 5px rgba(169, 24, 37, 0), inset 0 1px 0 rgba(255, 255, 255, 0.28);
  }
}

@keyframes assessment-nav-sheen {
  0%, 62% { left: -44%; }
  86%, 100% { left: 122%; }
}

@keyframes assessment-panel-glow {
  0%, 100% { opacity: 0.68; transform: scale(0.96); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes assessment-cta-sheen {
  0%, 58% { left: -45%; }
  82%, 100% { left: 122%; }
}

@media (max-width: 980px) {
  .assessment-invite {
    margin-right: 24px;
    margin-left: 24px;
  }
}

@media (max-width: 680px) {
  .assessment-invite {
    margin: 18px 14px 0;
    padding: 44px 24px;
    border-radius: 22px;
  }

  .assessment-invite > a {
    width: 100%;
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .desktop-nav .nav-assessment-link,
  .desktop-nav .nav-assessment-link::before,
  .assessment-invite::before,
  .assessment-invite > a::before {
    animation: none;
  }
}
