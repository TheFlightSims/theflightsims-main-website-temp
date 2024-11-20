'use client';

import { Content, Theme } from '@carbon/react';

import T_Header from '@/components/T_Header/T_Header';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <T_Header />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
