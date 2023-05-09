import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let insertionPoint: any;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return createCache({ key: "mui-style", insertionPoint });
}
