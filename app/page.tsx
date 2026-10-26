import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Contributions from "./components/Contributions";
import Mascot from "./components/Mascot";
import ThemeToggle from "./components/ThemeToggle";
import {
  intro,
  navLinks,
  profile,
  projects,
  resumeHref,
  socials,
  work,
} from "./data";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Mascot />
        <div className="header-content">
          <Link className="header-name" href="/">
            {profile.name}
          </Link>
          <nav className="header-links" aria-label="Site">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={i === 0 ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="main-content" className="home">
        <h1 className="sr-only">{profile.name}</h1>

        <div className="intro">
          <ul className="build-list">
            {intro.map((item, i) => (
              <li key={i}>
                <span className="build-arrow" aria-hidden="true">
                  →
                </span>
                <span>
                  {item.text}{" "}
                  {item.entity && (
                    <a className="build-entity" href={item.entity.href}>
                      {item.entity.label}
                      {item.entity.logo && (
                        <Image
                          src={item.entity.logo}
                          alt=""
                          width={20}
                          height={20}
                        />
                      )}
                    </a>
                  )}
                  {item.after && ` ${item.after}`}
                  {item.keywords?.map((k) => (
                    <span key={k} className="build-keyword">
                      {" "}
                      {k}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <nav className="social-links" aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">work</h2>
            <a
              href={
                "https://crimson-actual-kingfisher-355.mypinata.cloud/ipfs/bafkreigd22m6ujoaettsko4cibxypzydogwget7bp27pmehcj3mvghmnnu"
              }
            >
              résumé
            </a>
          </div>
          <ul className="work-list">
            {work.map((w) => (
              <li key={w.org} className="work-entry">
                <a className="work-logo" href={w.href} aria-label={w.org}>
                  {w.logo ? (
                    <Image src={w.logo} alt="" width={56} height={56} />
                  ) : (
                    <span aria-hidden="true">{w.org[0]}</span>
                  )}
                </a>
                <div className="work-content">
                  <div className="work-heading">
                    <h3>
                      <a href={w.href}>{w.org}</a>
                    </h3>
                    {w.current && <span className="work-current">current</span>}
                  </div>
                  <ul className="work-positions">
                    {w.positions.map((p) => (
                      <li key={p.title + p.dates}>
                        <span>
                          <span className="work-title">{p.title}</span>
                          <span className="work-place"> · {p.place}</span>
                        </span>
                        <span className="work-dates">{p.dates}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projects"
          className="section project-gallery"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title">projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <a
                  className="project-image"
                  href={p.links[0]?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${p.name}`}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.name} interface`}
                      width={960}
                      height={540}
                    />
                  ) : (
                    <span className="project-image-placeholder">{p.name}</span>
                  )}
                </a>
                <div className="project-heading">
                  <h3>{p.name}</h3>
                  <span>{p.year}</span>
                </div>
                <p className="project-description">{p.description}</p>
                {p.stat && <p className="project-stat">{p.stat}</p>}
                <nav className="project-links" aria-label={`${p.name} links`}>
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contributions-bottom"
          aria-label="GitHub contributions"
        >
          <Suspense
            fallback={
              <p className="contributions-loading">loading contributions…</p>
            }
          >
            <Contributions username={profile.githubUsername} />
          </Suspense>
        </section>
      </main>

      <footer className="site-footer">© {profile.name} 2026</footer>
    </>
  );
}
