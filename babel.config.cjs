module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }], // Para transformar el código a un nivel compatible con los navegadores modernos
    ["@babel/preset-react", { runtime: "automatic" }],       // Para compilar JSX con React
    "@babel/preset-typescript",                              // Para soporte de TypeScript
  ],
};
