type GTag = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: GTag;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export const trackCTAClick = (buttonName: string, section: string) => {
  trackEvent("cta_clicked", { button_name: buttonName, section });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submitted", { form_name: formName });
};

export const trackPageView = (path: string) => {
  trackEvent("page_view", { page_path: path });
};

export const trackProductExpanded = (productName: string) => {
  trackEvent("product_expanded", { product_name: productName });
};

export const trackBetaJoined = (source: string) => {
  trackEvent("beta_waitlist_joined", { source });
};
