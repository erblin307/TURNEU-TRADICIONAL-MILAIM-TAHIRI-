:root {
  --black: #020204;
  --black-2: #08090d;
  --panel: rgba(8, 9, 13, 0.78);
  --panel-solid: rgba(13, 15, 20, 0.94);
  --white: #f7f7f7;
  --muted: #a8a9ad;
  --red: #ff252b;
  --red-hot: #ff464b;
  --red-deep: #97070d;
  --gold: #d7b462;
  --line: rgba(255, 255, 255, 0.13);
  --glow: 0 0 30px rgba(255, 37, 43, 0.44);
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--black);
}

body {
  margin: 0;
  min-width: 320px;
  overflow-x: hidden;
  color: var(--white);
  background:
    radial-gradient(circle at center 16rem, rgba(255, 37, 43, 0.18), transparent 34rem),
    linear-gradient(180deg, #030305 0%, #090a0e 46%, #020203 100%);
  font-family: "Segoe UI", Arial, sans-serif;
  letter-spacing: 0;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -4;
  background-image: url("assets/stadium-bg.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  filter: saturate(1.14) contrast(1.08);
  opacity: 0.54;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  background:
    radial-gradient(ellipse at center 35%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.86) 72%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.82), transparent 22%, transparent 78%, rgba(0, 0, 0, 0.82)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.18), #020204 92%);
}

a {
  color: inherit;
  text-decoration: none;
}

.page-noise {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.16;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 44px 44px;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 16%, #000 82%, transparent);
  mask-image: linear-gradient(180deg, transparent, #000 16%, #000 82%, transparent);
}

.spark-field {
  position: fixed;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  overflow: hidden;
}

.spark {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
  border-radius: 999px;
  background: linear-gradient(180deg, #fff2d6, var(--red) 42%, transparent);
  filter: drop-shadow(0 0 7px rgba(255, 37, 43, 0.95));
  opacity: 0;
  transform: rotate(var(--r));
  animation: spark-drift var(--d) linear infinite;
  animation-delay: var(--delay);
}

.topbar {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 30;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  width: min(var(--max), calc(100% - 2rem));
  padding: 0.85rem 0;
  transform: translateX(-50%);
  transition: padding 180ms ease;
}

.topbar.is-scrolled {
  padding-top: 0.5rem;
}

.brand,
.nav-links,
.top-call {
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: rgba(0, 0, 0, 0.56);
  backdrop-filter: blur(16px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.brand {
  display: inline-grid;
  grid-template-columns: auto minmax(0, auto);
  align-items: center;
  gap: 0.62rem;
  min-height: 52px;
  padding: 0.45rem 0.9rem 0.45rem 0.48rem;
  border-radius: 8px;
  border-color: rgba(255, 37, 43, 0.26);
  background:
    linear-gradient(110deg, rgba(255, 37, 43, 0.1), transparent 42%),
    rgba(0, 0, 0, 0.64);
}

.brand span {
  display: grid;
  gap: 0.04rem;
  min-width: 0;
}

.brand b,
.brand small {
  display: block;
  line-height: 1;
  text-transform: uppercase;
}

.brand b {
  color: #fff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 1.08rem;
  font-weight: 900;
  text-shadow: 0 0 8px rgba(255, 37, 43, 0.18);
}

.brand small {
  color: var(--muted);
  font-size: 0.62rem;
  font-weight: 900;
}

.brand strong {
  position: relative;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 7px;
  background:
    radial-gradient(circle at 35% 20%, rgba(255, 255, 255, 0.34), transparent 30%),
    linear-gradient(180deg, var(--red-hot), var(--red-deep));
  color: #fff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 1.08rem;
  box-shadow: 0 0 12px rgba(255, 37, 43, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.nav-links {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 48px;
  padding: 0.3rem;
  border-radius: 8px;
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 0.78rem;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.88rem;
  font-weight: 850;
  text-transform: uppercase;
  transition: background 180ms ease, color 180ms ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: #fff;
  background: rgba(255, 37, 43, 0.18);
  outline: none;
}

.top-call {
  display: inline-grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  gap: 0.12rem;
  padding: 0.42rem 0.9rem;
  border-radius: 8px;
  color: #fff;
  font-weight: 900;
}

.top-call a {
  display: block;
  color: #fff;
  font-size: 0.92rem;
  line-height: 1.05;
  white-space: nowrap;
  transition: color 180ms ease;
}

.top-call a:hover,
.top-call a:focus-visible {
  color: var(--red-hot);
  outline: none;
}

.hero {
  position: relative;
  min-height: 94svh;
  padding: 7.2rem 1rem 3.2rem;
  overflow: hidden;
}

.hero-bg,
.hero-lights,
.hero-smoke {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-bg {
  z-index: -2;
  background:
    radial-gradient(circle at calc(18% + var(--mx, 0px)) 19%, rgba(255, 255, 255, 0.25), transparent 8.8rem),
    radial-gradient(circle at calc(82% - var(--mx, 0px)) 19%, rgba(255, 255, 255, 0.24), transparent 8.8rem),
    linear-gradient(180deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.58) 70%, #030305);
}

.hero-lights {
  z-index: -1;
  background:
    conic-gradient(from 214deg at 17% 21%, rgba(255, 255, 255, 0.22), transparent 13deg 360deg),
    conic-gradient(from 326deg at 83% 21%, rgba(255, 255, 255, 0.22), transparent 13deg 360deg),
    radial-gradient(circle at 50% 56%, rgba(255, 37, 43, 0.16), transparent 27rem);
  mix-blend-mode: screen;
  opacity: 0.85;
}

.hero-smoke {
  z-index: 0;
  background:
    radial-gradient(ellipse at 16% 86%, rgba(255, 37, 43, 0.34), transparent 24rem),
    radial-gradient(ellipse at 84% 86%, rgba(255, 37, 43, 0.34), transparent 24rem),
    radial-gradient(ellipse at 50% 92%, rgba(255, 37, 43, 0.28), transparent 28rem);
  filter: blur(2px);
}

.hero-inner {
  position: relative;
  z-index: 5;
  display: grid;
  justify-items: center;
  width: min(var(--max), 100%);
  margin: 0 auto;
  text-align: center;
}

.official-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin: 0;
  padding: 0.55rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 7px;
  background:
    linear-gradient(180deg, rgba(255, 82, 86, 0.98), rgba(151, 7, 13, 0.98)),
    var(--red);
  box-shadow: var(--glow), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  color: #fff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 1.35rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
}

.official-pill.small {
  min-height: 34px;
  padding: 0.42rem 0.85rem;
  font-size: 0.9rem;
}

.kicker {
  margin: 1.65rem 0 0.2rem;
  color: rgba(255, 255, 255, 0.58);
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 3rem;
  line-height: 1;
  text-transform: uppercase;
}

.hero-title {
  margin: 0;
  color: #fff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 8.8rem;
  line-height: 0.78;
  text-transform: uppercase;
  text-shadow:
    0 3px 0 var(--red-deep),
    0 9px 0 #290103,
    0 0 26px rgba(255, 37, 43, 0.45),
    0 22px 34px rgba(0, 0, 0, 0.86);
  -webkit-text-stroke: 2px var(--red-deep);
  paint-order: stroke fill;
}

.script-subtitle {
  position: relative;
  z-index: 2;
  margin: -0.35rem 0 1.15rem;
  color: var(--red);
  font-family: "Brush Script MT", "Segoe Script", cursive;
  font-size: 4.6rem;
  line-height: 0.9;
  text-shadow: 0 0 18px rgba(255, 37, 43, 0.62), 0 5px 14px rgba(0, 0, 0, 0.8);
}

.headline-stack {
  margin: 0;
}

.slogan,
.teaser {
  margin: 0;
  font-family: Impact, "Arial Black", sans-serif;
  text-transform: uppercase;
}

.slogan {
  font-size: 3.75rem;
  line-height: 1;
  text-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
}

.teaser {
  margin-top: 0.15rem;
  color: var(--red);
  font-size: 2rem;
  font-style: italic;
  text-shadow: 0 0 16px rgba(255, 37, 43, 0.5);
}

.hero-stage {
  position: relative;
  display: grid;
  place-items: center;
  width: min(650px, 96%);
  min-height: 330px;
  margin-top: 0.2rem;
}

.hero-stage::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 7%;
  width: min(760px, 115%);
  height: 150px;
  border-radius: 50%;
  transform: translateX(-50%);
  background:
    radial-gradient(ellipse at 50% 65%, rgba(255, 37, 43, 0.62), transparent 64%),
    radial-gradient(ellipse at 25% 75%, rgba(255, 37, 43, 0.42), transparent 58%),
    radial-gradient(ellipse at 78% 74%, rgba(255, 37, 43, 0.42), transparent 58%);
  filter: blur(18px);
  opacity: 0.9;
  animation: smoke-breathe 7s ease-in-out infinite;
}

.ball-orbit {
  position: relative;
  display: grid;
  place-items: center;
  width: 390px;
  aspect-ratio: 1;
}

.ball-orbit::before {
  content: "";
  position: absolute;
  inset: 5%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 37, 43, 0.24), transparent 66%);
  box-shadow: 0 0 80px rgba(255, 37, 43, 0.28), inset 0 0 42px rgba(255, 255, 255, 0.04);
}

.football-img {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 390px;
  height: auto;
  filter: drop-shadow(0 28px 34px rgba(0, 0, 0, 0.82)) drop-shadow(0 0 28px rgba(255, 37, 43, 0.36));
  -webkit-mask-image: radial-gradient(ellipse at 50% 57%, #000 0 60%, rgba(0, 0, 0, 0.82) 66%, transparent 76%);
  mask-image: radial-gradient(ellipse at 50% 57%, #000 0 60%, rgba(0, 0, 0, 0.82) 66%, transparent 76%);
  animation: ball-float 5.6s ease-in-out infinite;
}

.match-badge {
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  z-index: 7;
  display: grid;
  place-items: center;
  width: 134px;
  aspect-ratio: 1;
  border: 3px solid var(--red);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 35%, #22252a, #07080b 68%);
  box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.46), var(--glow);
  transform: rotate(7deg);
}

.match-badge span,
.match-badge strong {
  display: block;
  font-family: Impact, "Arial Black", sans-serif;
}

.match-badge span {
  font-size: 1.02rem;
}

.match-badge strong {
  margin-top: -0.12rem;
  color: var(--red);
  font-size: 3.4rem;
  line-height: 0.86;
}

.hero-bottom {
  width: min(960px, 100%);
}

.location-strip {
  display: grid;
  grid-template-columns: minmax(48px, 1fr) auto minmax(48px, 1fr);
  align-items: center;
  gap: 1.15rem;
  margin: -0.55rem auto 1rem;
}

.location-strip span {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--red));
  box-shadow: 0 0 16px rgba(255, 37, 43, 0.78);
}

.location-strip span:last-child {
  background: linear-gradient(90deg, var(--red), transparent);
}

.location-strip p {
  margin: 0;
  color: #fff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 3rem;
  line-height: 1;
  text-transform: uppercase;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.88);
}

.location-strip small {
  display: block;
  margin-bottom: 0.1rem;
  color: rgba(255, 255, 255, 0.58);
  font-size: 1.18rem;
}

.countdown-panel {
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  align-items: center;
  gap: 1rem;
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 0.9rem;
  border: 1px solid rgba(255, 37, 43, 0.52);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 37, 43, 0.12), transparent 46%),
    rgba(0, 0, 0, 0.56);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 34px rgba(255, 37, 43, 0.2);
  backdrop-filter: blur(14px);
}

.countdown-heading {
  text-align: left;
  padding-left: 0.25rem;
}

.countdown-heading p,
.countdown-heading strong,
.countdown-grid strong,
.countdown-grid span {
  margin: 0;
}

.countdown-heading p {
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 900;
  text-transform: uppercase;
}

.countdown-heading strong {
  display: block;
  color: var(--red);
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2.2rem;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;
}

.countdown-grid article {
  min-width: 0;
  padding: 0.7rem 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.045);
  box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.025);
}

.countdown-grid strong {
  display: block;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2.35rem;
  line-height: 1;
}

.countdown-grid span {
  display: block;
  margin-top: 0.18rem;
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 900;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
}

.btn {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.75rem 1.15rem;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 7px;
  font-weight: 950;
  text-transform: uppercase;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.btn::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(110deg, transparent 0 30%, rgba(255, 255, 255, 0.24) 45%, transparent 60%);
  transform: translateX(-120%);
  transition: transform 420ms ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
  outline: none;
}

.btn:hover::before,
.btn:focus-visible::before {
  transform: translateX(120%);
}

.btn-primary {
  background: linear-gradient(180deg, var(--red-hot), var(--red-deep));
  color: #fff;
  box-shadow: var(--glow);
}

.btn-secondary {
  border-color: rgba(255, 37, 43, 0.56);
  background: rgba(0, 0, 0, 0.48);
  color: #fff;
}

.btn-secondary:hover,
.btn-secondary:focus-visible {
  background: rgba(255, 37, 43, 0.14);
}

.info-section,
.rules-section,
.cta-section {
  position: relative;
  z-index: 6;
  width: min(var(--max), calc(100% - 2rem));
  margin: 0 auto;
  padding: 4.5rem 0;
}

.section-heading {
  margin-bottom: 1.35rem;
  text-align: center;
}

.section-heading p {
  margin: 0 0 0.35rem;
  color: var(--red);
  font-weight: 950;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 4rem;
  line-height: 0.96;
  text-transform: uppercase;
  text-shadow: 0 0 22px rgba(255, 37, 43, 0.24);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.info-card,
.rules-list,
.cta-panel {
  border: 1px solid rgba(255, 37, 43, 0.58);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 37, 43, 0.14), rgba(255, 37, 43, 0.02) 44%, transparent),
    var(--panel);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.09),
    0 20px 56px rgba(0, 0, 0, 0.55),
    0 0 26px rgba(255, 37, 43, 0.14);
  backdrop-filter: blur(14px);
}

.info-card {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  min-height: 162px;
  padding: 1.2rem;
  overflow: hidden;
  transition: transform 190ms ease, border-color 190ms ease, box-shadow 190ms ease, background 190ms ease;
}

.info-card::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--red), transparent);
  opacity: 0.7;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.35);
  background:
    linear-gradient(180deg, rgba(255, 37, 43, 0.22), rgba(255, 37, 43, 0.04) 48%, transparent),
    var(--panel-solid);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.13),
    0 26px 64px rgba(0, 0, 0, 0.6),
    0 0 42px rgba(255, 37, 43, 0.25);
}

.wide {
  grid-column: span 2;
}

.card-icon {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border: 1px solid rgba(255, 37, 43, 0.38);
  border-radius: 8px;
  color: var(--gold);
  background: rgba(0, 0, 0, 0.26);
  box-shadow: inset 0 0 22px rgba(215, 180, 98, 0.12), 0 0 20px rgba(255, 37, 43, 0.12);
}

.card-icon svg {
  width: 36px;
  height: 36px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.card-label {
  margin: 0 0 0.35rem;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
  font-weight: 950;
  text-transform: uppercase;
}

.info-card h3 {
  margin: 0.12rem 0;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 2rem;
  line-height: 1.05;
  text-transform: uppercase;
}

.info-card h3 span,
.info-card .giant {
  color: var(--red);
  text-shadow: 0 0 18px rgba(255, 37, 43, 0.28);
}

.info-card .giant {
  font-size: 4.1rem;
  line-height: 0.92;
}

.info-card p {
  margin: 0.25rem 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 830;
}

.rules-section,
.cta-section {
  padding-top: 2.2rem;
}

.rules-list {
  display: grid;
  gap: 0.8rem;
  width: min(940px, 100%);
  margin: 0 auto;
  padding: 1.55rem;
  text-align: center;
}

.rules-list p {
  margin: 0;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 1.5rem;
  line-height: 1.15;
  text-transform: uppercase;
}

.rules-list p::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 0.45rem;
  border-radius: 999px;
  background: var(--red);
  box-shadow: 0 0 12px var(--red);
  vertical-align: middle;
}

.rules-list strong {
  color: var(--red);
}

.cta-panel {
  width: min(860px, 100%);
  margin: 0 auto;
  padding: 2.2rem;
  text-align: center;
}

.cta-panel h2 {
  margin: 0.95rem 0 0.55rem;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 3.7rem;
  line-height: 0.98;
  text-transform: uppercase;
}

.cta-panel > p {
  max-width: 630px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.76);
  font-size: 1.05rem;
  line-height: 1.65;
}

.contact-line {
  display: inline-grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.75rem;
  margin: 1.1rem 0 0.15rem;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 37, 43, 0.44);
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.36);
}

.contact-line span {
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 950;
  text-transform: uppercase;
}

.contact-line a {
  color: #fff;
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 1.55rem;
}

.contact-numbers {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 0.75rem;
}

.contact-numbers a {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 0.65rem;
  border: 1px solid rgba(255, 37, 43, 0.38);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.035);
  transition: color 180ms ease, border-color 180ms ease, background 180ms ease;
}

.contact-numbers a:hover,
.contact-numbers a:focus-visible {
  color: var(--red-hot);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 37, 43, 0.12);
  outline: none;
}

.footer {
  position: relative;
  z-index: 6;
  display: grid;
  gap: 0.2rem;
  width: min(var(--max), calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 5rem;
  border-top: 1px solid var(--line);
  color: rgba(255, 255, 255, 0.72);
  text-align: center;
}

.footer p {
  margin: 0;
  font-weight: 850;
}

.footer a {
  color: #fff;
}

.footer-slogan {
  color: var(--red);
  font-family: "Brush Script MT", "Segoe Script", cursive;
  font-size: 3rem;
  text-shadow: 0 0 18px rgba(255, 37, 43, 0.46);
}

.sticky-contact {
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: max(1rem, env(safe-area-inset-bottom));
  z-index: 35;
  display: none;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: linear-gradient(180deg, var(--red-hot), var(--red-deep));
  box-shadow: var(--glow);
  color: #fff;
  font-weight: 950;
  text-transform: uppercase;
}

.reveal {
  opacity: 1;
  transform: none;
}

.js-ready .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 650ms ease, transform 650ms ease;
}

.js-ready .reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes spark-drift {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(var(--r)) scale(0.45);
  }

  12% {
    opacity: var(--o);
  }

  100% {
    opacity: 0;
    transform: translate3d(var(--dx), var(--dy), 0) rotate(var(--r)) scale(0.9);
  }
}

@keyframes ball-float {
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }

  50% {
    transform: translateY(-12px) rotate(1deg);
  }
}

@keyframes smoke-breathe {
  0%,
  100% {
    opacity: 0.68;
    transform: translateX(-50%) scaleX(0.94);
  }

  50% {
    opacity: 0.96;
    transform: translateX(-50%) scaleX(1.05);
  }
}

@media (max-width: 1180px) {
  .hero-title {
    font-size: 7.3rem;
  }

  .script-subtitle {
    font-size: 4rem;
  }

  .slogan {
    font-size: 3.2rem;
  }

  .teaser {
    font-size: 1.75rem;
  }
}

@media (max-width: 920px) {
  .topbar {
    grid-template-columns: auto 1fr;
  }

  .top-call {
    display: none;
  }

  .nav-links {
    justify-self: end;
  }

  .hero {
    padding-top: 6.5rem;
  }

  .hero-title {
    font-size: 5.7rem;
  }

  .kicker {
    font-size: 2.25rem;
  }

  .script-subtitle {
    font-size: 3.35rem;
  }

  .slogan {
    font-size: 2.55rem;
  }

  .hero-stage {
    min-height: 292px;
  }

  .ball-orbit {
    width: 330px;
  }

  .match-badge {
    right: 0.5rem;
    top: 0.6rem;
    width: 112px;
  }

  .match-badge strong {
    font-size: 2.8rem;
  }

  .countdown-panel {
    grid-template-columns: 1fr;
  }

  .countdown-heading {
    text-align: center;
    padding-left: 0;
  }

  .info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wide {
    grid-column: span 2;
  }
}

@media (max-width: 680px) {
  body::before {
    opacity: 0.6;
    background-position: center top;
  }

  .topbar {
    width: calc(100% - 1.2rem);
    gap: 0.6rem;
  }

  .brand {
    min-height: 44px;
    padding: 0.32rem;
  }

  .brand span {
    display: none;
  }

  .brand strong {
    width: 36px;
    height: 36px;
    font-size: 0.98rem;
  }

  .nav-links {
    max-width: 100%;
    min-height: 44px;
    overflow-x: auto;
  }

  .nav-links a {
    min-height: 34px;
    padding: 0 0.62rem;
    font-size: 0.78rem;
  }

  .hero {
    min-height: auto;
    padding: 6rem 0.75rem 3rem;
  }

  .official-pill {
    min-height: 38px;
    padding: 0.48rem 0.85rem;
    font-size: 1.05rem;
  }

  .kicker {
    margin-top: 1.25rem;
    font-size: 1.55rem;
  }

  .hero-title {
    font-size: 3.55rem;
    line-height: 0.86;
    -webkit-text-stroke-width: 1px;
    text-shadow:
      0 2px 0 var(--red-deep),
      0 5px 0 #290103,
      0 0 18px rgba(255, 37, 43, 0.45),
      0 14px 24px rgba(0, 0, 0, 0.86);
  }

  .script-subtitle {
    margin-top: 0.05rem;
    font-size: 2.45rem;
  }

  .slogan {
    font-size: 2rem;
  }

  .teaser {
    font-size: 1.12rem;
  }

  .hero-stage {
    width: 100%;
    min-height: 245px;
  }

  .ball-orbit {
    width: 260px;
  }

  .match-badge {
    position: relative;
    right: auto;
    top: auto;
    order: -1;
    width: 92px;
    margin: 0 auto -1rem;
  }

  .match-badge span {
    font-size: 0.78rem;
  }

  .match-badge strong {
    font-size: 2.25rem;
  }

  .location-strip {
    grid-template-columns: 1fr;
    gap: 0.45rem;
    margin-top: 0.2rem;
  }

  .location-strip span {
    display: none;
  }

  .location-strip p {
    font-size: 2.05rem;
  }

  .location-strip small {
    font-size: 0.9rem;
  }

  .countdown-panel {
    padding: 0.75rem;
  }

  .countdown-heading strong {
    font-size: 1.75rem;
  }

  .countdown-grid {
    gap: 0.4rem;
  }

  .countdown-grid article {
    padding: 0.58rem 0.25rem;
  }

  .countdown-grid strong {
    font-size: 1.58rem;
  }

  .countdown-grid span {
    font-size: 0.66rem;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }

  .info-section,
  .rules-section,
  .cta-section {
    width: calc(100% - 1.4rem);
    padding: 3.2rem 0;
  }

  .section-heading h2 {
    font-size: 2.45rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .wide {
    grid-column: auto;
  }

  .info-card {
    min-height: 132px;
    padding: 1rem;
  }

  .card-icon {
    width: 54px;
    height: 54px;
  }

  .card-icon svg {
    width: 30px;
    height: 30px;
  }

  .info-card h3 {
    font-size: 1.5rem;
  }

  .info-card .giant {
    font-size: 3rem;
  }

  .rules-list {
    padding: 1.1rem;
  }

  .rules-list p {
    font-size: 1.08rem;
  }

  .cta-panel {
    padding: 1.35rem;
  }

  .cta-panel h2 {
    font-size: 2.28rem;
  }

  .contact-line {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 0.2rem;
  }

  .contact-line a {
    font-size: 1.45rem;
  }

  .contact-numbers {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .contact-numbers a {
    justify-content: center;
    width: 100%;
  }

  .footer {
    padding-bottom: 5.4rem;
  }

  .footer-slogan {
    font-size: 2.3rem;
  }

  .sticky-contact {
    display: flex;
  }
}

@media (max-width: 380px) {
  .hero-title {
    font-size: 3.1rem;
  }

  .slogan {
    font-size: 1.75rem;
  }

  .ball-orbit {
    width: 230px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }

  .spark-field {
    display: none;
  }
}
