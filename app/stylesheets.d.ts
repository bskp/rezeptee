// Seiteneffekt-Importe von Stylesheets (siehe client/main.tsx): rspack löst
// sie über den less-loader auf, TypeScript braucht dafür eine Deklaration.
declare module '*.less';
declare module '*.css';
