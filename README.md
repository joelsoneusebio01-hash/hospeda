# Barbearia No Ponto — Chimoio

Site oficial da **Barbearia No Ponto** em Chimoio, Moçambique (Rua do Sussundenga, próximo à paragem do Tambara 2).

## Stack

- React 19 + TypeScript
- Vite 8 + Tailwind CSS v4

## Executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

A pasta de saída gerada é `dist/`.

## Configuração no Cloudflare Pages

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variable**: `NODE_VERSION` = `22`
