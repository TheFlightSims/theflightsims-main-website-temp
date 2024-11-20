import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'TheFlightSims (powered by IBM Carbon System)',
  description: 'TheFlightSims Home Website (powered by IBM Carbon System)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
