import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';

let app: FirebaseApp;

/**
 * Initializes the Firebase app instance.
 * @param options config options for the app.
 * @returns
 */
export const initFirebase = (options: FirebaseOptions): void => {
  if (app) return;
  app = initializeApp(options);
};
