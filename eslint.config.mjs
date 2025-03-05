import eslint from '@eslint/js'
import tseslint from 'typescript-eslint';

export default tseslint.config({
    ignores: ['**/build/**', '**/dist/**', 'src/**/*.js', 'webpack**'],
    extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
    ],
    languageOptions: {
        parserOptions: {
            parser: "@typescript-eslint/parser",
            project: "./tsconfig.json"
        }
    }
});