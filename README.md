# Automated Security and Performance Testing Framework

🚀 This project demonstrates how to go beyond functional UI tests as an SDET by integrating **security** and **performance** testing directly into automated pipelines.  
It combines **Playwright**, **OWASP ZAP**, and **Google Lighthouse** into a single framework with CI/CD support.

---

## 🔍 What This Project Does

- **Functional Testing** → Automates end-to-end flows using Playwright.
- **Security Testing** → Routes test traffic through OWASP ZAP for passive scans and triggers active scans on target pages.
- **Performance Testing** → Runs Lighthouse audits on key pages to track metrics like:
  - First Contentful Paint (FCP)
  - Time to Interactive (TTI)
  - Cumulative Layout Shift (CLS)
- **CI/CD Integration** → Runs on every commit, generates reports, and fails builds if vulnerabilities or performance regressions are detected.

---

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) – Functional E2E testing
- [OWASP ZAP](https://www.zaproxy.org/) – Web application security scanning
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) – Performance metrics and audits
- [Docker](https://www.docker.com/) – Containerized test apps and tools
- GitHub Actions – Continuous Integration

---

## 🗺 Roadmap

### ✅ Week 1 – Setup & Skeleton
- Run OWASP Juice Shop in Docker as test target.
- Initialize Playwright project.
- Add first login flow test.
- Add this README.

### 🔒 Week 2 – Security Testing
- Integrate OWASP ZAP with Playwright.
- Enable passive scanning during test runs.
- Export and parse scan reports.

### ⚡ Week 3 – Performance Testing
- Integrate Lighthouse programmatically.
- Run audits after Playwright navigates to key pages.
- Add performance budget checks.

### 📊 Week 4 – Reporting
- Collect ZAP + Lighthouse reports.
- Generate summaries (console + JSON).
- Optional: custom HTML dashboard.

### 🔄 Week 5 – CI/CD Pipeline
- Add GitHub Actions workflow.
- Run tests automatically on PRs.
- Upload reports as build artifacts.

### 📝 Week 6 – Documentation & Polish
- Improve README with screenshots & example reports.
- Add badges (build status, license).
- Write project summary blog.

---

## 🚧 Status
Currently in **Week 1** – setting up Playwright tests and OWASP Juice Shop as the target application.

---
