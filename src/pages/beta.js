import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

function BetaHero() {
    return (
        <section className="beta-section">
            <div className="beta-inner">
                <span className="hero-badge">
                    <Translate id="beta.badge">✦ Early Access</Translate>
                </span>
                <h1 className="hero-title">
                    <Translate id="beta.title.line1">Be the first to</Translate>
                    <br />
                    <span className="accent">
                        <Translate id="beta.title.accent">experience it</Translate>
                    </span>
                </h1>
                <p className="hero-subtitle">
                    <Translate id="beta.subtitle">
                        Playgrounds.dev is launching soon. Subscribe to get notified when
                        we go live, or reach out directly for early beta access.
                    </Translate>
                </p>

                <div className="beta-cards">
                    <div className="beta-card">
                        <div className="beta-card-icon">📬</div>
                        <h2 className="beta-card-title">
                            <Translate id="beta.subscribe.title">Stay in the loop</Translate>
                        </h2>
                        <p className="beta-card-desc">
                            <Translate id="beta.subscribe.desc">
                                Get a one-time email when we launch. No spam, ever.
                            </Translate>
                        </p>
                        <form
                            action="https://buttondown.com/api/emails/embed-subscribe/playgrounds.dev"
                            method="post"
                            className="beta-form"
                            referrerPolicy="unsafe-url"
                        >
                            <input
                                type="email"
                                name="email"
                                id="bd-email"
                                placeholder={translate({ id: 'beta.email.placeholder', message: 'your@email.com' })}
                                className="beta-input"
                                required
                            />
                            <button type="submit" className="beta-submit">
                                <Translate id="beta.email.submit">Subscribe</Translate>
                            </button>
                        </form>
                    </div>

                    <div className="beta-divider">
                        <span className="beta-divider-text">
                            <Translate id="beta.divider">or</Translate>
                        </span>
                    </div>

                    <div className="beta-card">
                        <div className="beta-card-icon">🔑</div>
                        <h2 className="beta-card-title">
                            <Translate id="beta.access.title">Request beta access</Translate>
                        </h2>
                        <p className="beta-card-desc">
                            <Translate id="beta.access.desc">
                                Want to start building now? Drop us a line and tell us about
                                your use case.
                            </Translate>
                        </p>
                        <a href="mailto:beta@playgrounds.dev" className="hero-cta beta-email-cta">
                            beta@playgrounds.dev <span className="beta-arrow">→</span>
                        </a>
                    </div>
                </div>

                <p className="beta-footnote">
                    <a href="https://buttondown.com/refer/playgrounds.dev" target="_blank" rel="noopener noreferrer">
                        <Translate id="beta.powered">Powered by Buttondown</Translate>
                    </a>
                </p>
            </div>
        </section>
    );
}

export default function Beta() {
    return (
        <Layout
            title={translate({ id: 'beta.layout.title', message: 'Beta — Early Access' })}
            description={translate({ id: 'beta.layout.description', message: 'Subscribe for launch updates or request early beta access to Playgrounds.dev.' })}
        >
            <BetaHero />
        </Layout>
    );
}
