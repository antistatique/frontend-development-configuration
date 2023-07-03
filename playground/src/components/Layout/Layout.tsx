import React, { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => <div>{children}</div>;

// For Storybook
export const LayoutDecorator = (Story: FunctionComponent): JSX.Element => (
  <div className="font-sans antialiased text-gray-900">
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  </div>
);

export default Layout;
