# 🧩 Reto React + TypeScript + Vite

Este es un reto de frontend desarrollada con **React**, **TypeScript** y **Vite**, pensada para iniciar aplicaciones frontend modernas, con una estructura limpia, buenas prácticas y fácil escalabilidad.

---

## 🚀 Tecnologías principales

- ⚛️ **React**
- 🟦 **TypeScript**
- ⚡ **Vite**
- 🔧 Herramientas de apoyo: Jira, Jenkins, Figma

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## 📬 Contacto

¿Tienes preguntas o te interesa colaborar?

- 💼 **LinkedIn:** [linkedin.com/in/leonel-cube%C3%B1os-sotelo-b80b489b](https://www.linkedin.com/in/leonel-cube%C3%B1os-sotelo-b80b489b/)