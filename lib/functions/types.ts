import type { ReactNode } from 'react';

export type FunctionParameterOption = {
  name: string;
  explanation?: ReactNode;
  isDefault?: boolean;
  img?: string;
};

export type FunctionParameter = {
  name: string;
  description: ReactNode;
  basicUsage: string;
  type: string;
  howToUse?: ReactNode;
  img: string;
  post: string;
  options?: FunctionParameterOption[];
};

export type FunctionDetails = {
  name: string;
  description: ReactNode;
  docUrl: string;
  parameters: FunctionParameter[];
};
