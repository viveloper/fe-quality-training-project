import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'warn', // a 태그 내비게이션 → 경고로
      '@next/next/no-img-element': 'warn', // img 사용 → 경고로
      'react-hooks/rules-of-hooks': 'warn', // 훅스 순서 규칙 → 경고로
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
