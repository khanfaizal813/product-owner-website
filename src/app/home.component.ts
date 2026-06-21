import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <!-- <section class="page-panel hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">{{ 'home.heroTitle' | translate }}</span>
        <h1>{{ 'home.heroTitle' | translate }}</h1>
        <p>{{ 'home.heroSubtitle' | translate }}</p>
        <div class="hero-actions">
          <a class="button button-primary" routerLink="/contact">{{ 'home.ctaPrimary' | translate }}</a>
          <a class="button button-secondary" href="#products">{{ 'home.ctaSecondary' | translate }}</a>
        </div>
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <h3>{{ 'home.metrics.projects' | translate }}</h3>
          <p>{{ 'home.aboutDesc' | translate }}</p>
        </div>
        <div class="metric-card">
          <h3>{{ 'home.metrics.clients' | translate }}</h3>
          <p>{{ 'home.productsTitle' | translate }}</p>
        </div>
        <div class="metric-card">
          <h3>{{ 'home.metrics.experience' | translate }}</h3>
          <p>{{ 'home.aboutTitle' | translate }}</p>
        </div>
      </div>
    </section> -->

    <section class="page-panel slider-panel">
      <div class="slider-container">
        <div class="slider-card">
          <div class="slide-image-wrap">
            <img
              [src]="slides[currentSlide].image"
              [alt]="slides[currentSlide].label"
            />
            <div class="slide-overlay">
              <div class="slide-label">{{ slides[currentSlide].label }}</div>
            </div>
          </div>

          <button type="button" class="slider-arrow prev" (click)="prevSlide()" aria-label="Previous slide">
            ‹
          </button>
          <button type="button" class="slider-arrow next" (click)="nextSlide()" aria-label="Next slide">
            ›
          </button>
        </div>

        <div class="dots-row">
          <button
            *ngFor="let slide of slides; let i = index"
            type="button"
            class="dot"
            [class.active]="i === currentSlide"
            (click)="goToSlide(i)"
            aria-label="Select slide {{ i + 1 }}"
          ></button>
        </div>
      </div>
    </section>

    <section class="page-panel slider-copy-panel">
      <div class="slider-copy">
        <h2>Bringing Nature’s Best to Global Markets</h2>
        <p>Your Trusted Export Partner from India</p>
      </div>
    </section>

    <section class="page-panel hero-bg-panel" [style.background-image]="'url(' + heroBgImage + ')'">
      <div class="hero-bg-overlay"></div>
      <div class="hero-bg-content">
        <div class="hero-copy-inner">
          <h2>Trusted global trade built on honesty and care</h2>
          <p>
            Al Noor is built on honesty, responsibility, and genuine trade values. With strong roots in domestic markets and deep understanding of sourcing, we focus on delivering pure and carefully selected products with reliable global supply and long-term partnership commitment.
          </p>
          <p>
            We export a diverse range of products including agricultural commodities, fresh fruits, tobacco, areca nuts, plastic and paper products, as well as selected meat products — ensuring quality, authenticity, and dependable international trade practices.
          </p>
        </div>
      </div>
    </section>

    <section class="page-panel categories-panel">
      <div class="categories-heading">
        <p class="eyebrow">Product Categories</p>
        <h2>Explore our export portfolio</h2>
      </div>

      <div class="categories-grid">
        <article *ngFor="let category of categories" class="category-card" routerLink="/products" role="link" tabindex="0">
          <div class="category-image" [style.background-image]="'url(' + category.image + ')'">
            <div class="category-tag">{{ category.tag }}</div>
          </div>
          <div class="category-copy">
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="page-panel choose-panel">
      <div class="choose-heading">
        <p class="eyebrow">Why Choose Us?</p>
        <h2>Why Global Buyers Work With Us</h2>
      </div>

      <div class="faq-list">
        <article *ngFor="let faq of faqs; let index = index" class="faq-item" [class.expanded]="expandedFaq === index">
          <button type="button" class="faq-question" (click)="toggleFaq(index)" [attr.aria-expanded]="expandedFaq === index">
            <span>{{ faq.question }}</span>
            <span class="faq-icon">{{ expandedFaq === index ? '−' : '+' }}</span>
          </button>
          <div class="faq-answer" *ngIf="expandedFaq === index">
            <p>{{ faq.answer }}</p>
          </div>
        </article>
      </div>

      <div class="choose-footer">
        <p class="choose-footer-text">
          Partner with <strong>Al Noor</strong> for a transparent, quality-first export experience backed by fast communication, flexible logistics, and long-term global growth.
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      .slider-panel {
        max-width: 1240px;
      }

      .slider-container {
        margin: 0 auto;
        max-width: 1080px;
        border-radius: 28px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 24px 70px rgba(32, 57, 84, 0.12);
        padding: 1.5rem;
      }

      .slider-card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .slide-image-wrap {
        width: 100%;
        border-radius: 22px;
        overflow: hidden;
        position: relative;
      }

      .slide-image-wrap img {
        width: 100%;
        display: block;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        min-height: 280px;
      }

      .slide-overlay {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1.25rem 1.5rem;
        background: linear-gradient(180deg, rgba(10, 24, 40, 0) 0%, rgba(10, 24, 40, 0.75) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .slide-label {
        color: #ffffff;
        text-align: center;
        font-size: clamp(1.15rem, 2vw, 1.55rem);
        font-weight: 700;
      }

      .slider-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 56px;
        height: 56px;
        min-width: 56px;
        padding: 0;
        border-radius: 999px;
        border: none;
        background: rgba(8, 20, 38, 0.92);
        color: #ffffff;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease, transform 0.2s ease;
        box-shadow: 0 16px 30px rgba(0, 0, 0, 0.2);
        z-index: 2;
        touch-action: manipulation;
      }

      .slider-arrow:hover,
      .slider-arrow:focus-visible {
        background: rgba(17, 35, 57, 0.9);
        outline: none;
      }

      .slider-arrow.prev {
        left: 0.75rem;
      }

      .slider-arrow.next {
        right: 0.75rem;
      }

      .dots-row {
        display: flex;
        justify-content: center;
        gap: 0.8rem;
        margin-top: 1.1rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 999px;
        border: none;
        background: rgba(30, 45, 65, 0.25);
        cursor: pointer;
        transition: transform 0.24s ease, background 0.24s ease;
      }

      .dot.active {
        background: #1e7a4c;
        transform: scale(1.2);
      }

      .slider-copy-panel {
        margin: 1.8rem auto 0;
        padding: 0 1rem;
        max-width: 920px;
        text-align: center;
      }

      .slider-copy h2 {
        margin: 0 0 1rem;
        font-size: clamp(2.5rem, 4vw, 3.6rem);
        line-height: 1.02;
      }

      .slider-copy p {
        margin: 0;
        font-size: 1.05rem;
        color: #5b6a7a;
      }

      .hero-bg-panel {
        position: relative;
        padding: 5rem 0;
        min-height: 560px;
        background-size: 115%;
        background-position: right 20%;
        background-repeat: no-repeat;
        color: #ffffff;
        overflow: hidden;
      }

      .hero-bg-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(12, 22, 44, 0.45));
      }

      .hero-bg-content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: flex-start;
        padding: 0 1rem;
      }

      .hero-copy-inner {
        max-width: 680px;
        width: 100%;
        margin-left: 2rem;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(20, 45, 75, 0.12);
        border-radius: 30px;
        padding: 2.5rem;
        box-shadow: 0 24px 60px rgba(16, 30, 55, 0.16);
        color: #10203b;
      }

      .hero-copy-inner h2 {
        margin: 0 0 1rem;
        font-size: clamp(2.1rem, 3.4vw, 2.8rem);
        line-height: 1.05;
        font-weight: 800;
        color: #10203b;
      }

      .hero-copy-inner p {
        margin: 0 0 1rem;
        font-size: clamp(1rem, 1.05vw, 1.15rem);
        line-height: 1.85;
        color: #33415d;
      }

      .hero-copy-inner p + p {
        margin-top: 1rem;
      }

      .categories-panel {
        margin-top: 3rem;
        padding: 4rem 1rem 1rem;
        background: #f9fbff;
      }

      .categories-heading {
        max-width: 960px;
        margin: 0 auto 2rem;
        text-align: center;
      }

      .categories-heading .eyebrow {
        display: inline-block;
        margin-bottom: 0.8rem;
        color: #1e7a4c;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-size: 0.85rem;
      }

      .categories-heading h2 {
        margin: 0;
        font-size: clamp(2rem, 2.8vw, 2.75rem);
        color: #10203b;
        line-height: 1.05;
      }

      .categories-grid {
        display: grid;
        gap: 1.75rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        max-width: 1240px;
        margin: 0 auto;
      }

      .category-card {
        display: flex;
        flex-direction: column;
        border-radius: 32px;
        overflow: hidden;
        background: #ffffff;
        border: 1px solid rgba(16, 30, 55, 0.14);
        box-shadow: 0 24px 40px rgba(16, 30, 55, 0.08);
        transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        transform-style: preserve-3d;
        min-height: 100%;
      }

      .category-card:hover {
        transform: translateY(-12px) rotateX(1deg) rotateY(-1deg);
        box-shadow: 0 32px 60px rgba(16, 30, 55, 0.16);
      }

      .category-image {
        position: relative;
        min-height: 260px;
        background-size: cover;
        background-position: center;
      }

      .category-tag {
        position: absolute;
        left: 1rem;
        top: 1rem;
        background: rgba(255, 255, 255, 0.88);
        color: #10203b;
        padding: 0.55rem 0.9rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        box-shadow: 0 12px 22px rgba(16, 30, 55, 0.12);
      }

      .category-copy {
        padding: 1.5rem 1.4rem 1.8rem;
      }

      .category-copy h3 {
        margin: 0 0 0.85rem;
        font-size: 1.45rem;
        color: #10203b;
        line-height: 1.1;
      }

      .category-copy p {
        margin: 0;
        color: #52607a;
        font-size: 1rem;
        line-height: 1.75;
      }

      .choose-panel {
        margin-top: 3.5rem;
        padding: 4rem 1rem 2rem;
        background: #ffffff;
      }

      .choose-heading {
        max-width: 960px;
        margin: 0 auto 2rem;
        text-align: center;
      }

      .choose-heading .eyebrow {
        display: inline-block;
        margin-bottom: 0.8rem;
        color: #1e7a4c;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-size: 0.85rem;
      }

      .choose-heading h2 {
        margin: 0;
        font-size: clamp(2.5rem, 3vw, 3.5rem);
        color: #10203b;
        line-height: 1.02;
      }

      .faq-list {
        max-width: 960px;
        margin: 0 auto 2rem;
        display: grid;
        gap: 1rem;
      }

      .faq-item {
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid rgba(30, 45, 65, 0.12);
        box-shadow: 0 18px 30px rgba(16, 30, 55, 0.06);
        transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
      }

      .faq-item.expanded {
        border-color: rgba(30, 45, 65, 0.24);
        box-shadow: 0 24px 40px rgba(16, 30, 55, 0.1);
      }

      .faq-question {
        width: 100%;
        padding: 1.4rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        color: #10203b;
        background: #f5f8ff;
        border: none;
        text-align: left;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .faq-question:hover {
        background: #eef4ff;
      }

      .faq-icon {
        display: inline-flex;
        width: 38px;
        height: 38px;
        border-radius: 999px;
        align-items: center;
        justify-content: center;
        background: #d45f09;
        color: #ffffff;
        font-size: 1.2rem;
        line-height: 1;
      }

      .faq-answer {
        padding: 1.25rem 1.5rem 1.75rem;
        background: #ffffff;
        color: #33415d;
        border-top: 1px solid rgba(30, 45, 65, 0.08);
      }

      .faq-answer p {
        margin: 0;
        font-size: 1rem;
        line-height: 1.8;
      }

      .choose-footer {
        max-width: 860px;
        margin: 0 auto;
        padding: 1.25rem 1.5rem 0;
        text-align: center;
      }

      .choose-footer-text {
        margin: 0 auto;
        max-width: 760px;
        font-size: clamp(1.1rem, 1.05vw, 1.3rem);
        font-weight: 600;
        color: #10203b;
        line-height: 1.8;
        letter-spacing: 0.01em;
        text-align: center;
        text-shadow: 0 1px 2px rgba(16, 30, 55, 0.06);
      }

      .choose-footer-text strong {
        color: #d45f09;
      }

      @media (max-width: 1120px) {
        .categories-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      @media (max-width: 920px) {
        .faq-question {
          font-size: 0.95rem;
          padding: 1.25rem 1.3rem;
        }

        .faq-icon {
          width: 36px;
          height: 36px;
        }
      }

      @media (max-width: 860px) {
        .categories-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 620px) {
        .categories-grid {
          grid-template-columns: 1fr;
          gap: 1.35rem;
        }

        .categories-panel {
          padding: 3rem 0.75rem 1rem;
        }

        .hero-bg-panel {
          padding: 3rem 0;
          min-height: 520px;
        }

        .hero-bg-content {
          padding: 0 1rem;
        }

        .hero-copy-inner {
          margin-left: 0;
          max-width: 100%;
        }

        .category-copy {
          padding: 1.2rem 1rem 1.4rem;
        }
      }

      @media (max-width: 480px) {
        .categories-panel {
          padding-top: 1.6rem;
        }

        .categories-grid {
          gap: 1rem;
        }

        .category-image {
          min-height: 200px;
        }

        .category-copy h3 {
          font-size: 1.3rem;
        }

        .category-copy p {
          font-size: 0.95rem;
          line-height: 1.65;
        }
      }

      @media (max-width: 600px) {
        .slider-container {
          padding: 1rem;
        }

        .slider-arrow {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
        }

        .slide-image-wrap img {
          min-height: 220px;
        }

        .slider-panel {
          margin-top: 2rem;
        }

        .slider-card {
          flex-direction: column;
        }

        .slider-arrow.prev {
          left: 0.5rem;
        }

        .slider-arrow.next {
          right: 0.5rem;
        }

        .slide-overlay {
          padding: 1rem;
        }
      }
    `
  ]
})
export class HomePage implements AfterViewInit, OnDestroy {
  slides = [
    {
      image: 'assets/images/IMG_6045.PNG',
      label: 'Agro Commodities'
    },
    {
      image: 'assets/images/IMG_6047.PNG',
      label: 'Premium Fresh Fruits'
    },
    {
      image: 'assets/images/IMG_6048.PNG',
      label: 'Plastic Household & Industrial Solutions'
    },
    {
      image: 'assets/images/IMG_6049.PNG',
      label: 'Paper Products Export'
    }
  ];

  categories = [
    {
      tag: 'Fresh & healthy',
      title: 'Fruits & Vegetables',
      description: 'Premium fresh produce sourced and exported with quality checks for global markets.',
      image: '/assets/images/IMG_6045.PNG'
    },
    {
      tag: 'Ready to ship',
      title: 'Processed Food',
      description: 'Specialty food and packaged goods processed for reliable export.',
      image: '/assets/images/IMG_6047.PNG'
    },
    {
      tag: 'Natural flavors',
      title: 'Spices',
      description: 'Handpicked spices that bring authentic aroma and quality to every recipe.',
      image: '/assets/images/IMG_6048.PNG'
    },
    {
      tag: 'Quality materials',
      title: 'Paper & Plastic',
      description: 'Durable paper and plastic products for industrial and retail use worldwide.',
      image: '/assets/images/IMG_6049.PNG'
    }
  ];

  faqs = [
    {
      question: '✔️ Transparent & Honest Business Approach',
      answer: '— We believe in clear communication, realistic commitments and transparent dealings to build long-term trust with every buyer.'
    },
    {
      question: '✔️ Quality Focused Product Supply',
      answer: '— Every order is handled with attention to product quality, packaging standards and buyer requirements to ensure dependable supply.'
    },
    {
      question: '✔️ Fast Communication & Buyer Support',
      answer: '— We understand the importance of timely responses in international trade and aim to respond to inquiries within 6-8 working hours.'
    },
    {
      question: '✔️ Flexible Packaging & Export Assistance',
      answer: '— From packaging preferences to export documentation support, we assist buyers throughout the shipment process.'
    },
    {
      question: '✔️ Long-Term Business Philosophy',
      answer: '— Our goal is not one-time business but building reliable and sustainable partnerships with buyers worldwide.'
    },
    {
      question: '✔️ Growing With Global Market Needs',
      answer: '— Al Noor Worldwide is continuously expanding product categories and sourcing capabilities to serve evolving international demand.'
    }
  ];

  expandedFaq = 0;

  currentSlide = 0;
  readonly heroBgImage = '/assets/images/IMG_6063.JPEG';
  private autoSlideTimer?: number;

  toggleFaq(index: number) {
    this.expandedFaq = this.expandedFaq === index ? -1 : index;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.startAutoSlide();
    }, 100);
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideTimer = window.setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.cdr.markForCheck();
    }, 1500);
  }

  stopAutoSlide() {
    if (this.autoSlideTimer !== undefined) {
      window.clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = undefined;
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
