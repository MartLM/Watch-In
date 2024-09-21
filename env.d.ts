// src/env.d.ts
/// <reference types="react-scripts" />
/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY: string;
    // Añade aquí otras variables que estés utilizando.
  }
}