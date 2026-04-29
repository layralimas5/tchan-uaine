```tsx
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Uaine Group" },
      {
        name: "description",
        content:
          "Uaine Group — importação, curadoria e experiências em vinho.",
      },
      { name: "author", content: "Uaine Group" },
      { property: "og:title", content: "Uaine Group" },
      {
        property: "og:description",
        content:
          "Uaine Group — importação, curadoria e experiências em vinho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Uaine Group" },
      {
        name: "twitter:description",
        content:
          "Uaine Group — importação, curadoria e experiências em vinho.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ebdeaa30-2f5a-4fcf-8bd1-79e633cbb112/id-preview-46123623--c326dc1c-7089-4b45-bc7f-0cb7c4fae5a3.lovable.app-1777432657923.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ebdeaa30-2f5a-4fcf-8bd1-79e633cbb112/id-preview-46123623--c326dc1c-7089-4b45-bc7f-0cb7c4fae5a3.lovable.app-1777432657923.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <Scripts />
    </>
  );
}
```

---

# 🚀 O QUE VOCÊ FAZ AGORA

1. Substitui tudo no `__root.tsx`
2. Commit no GitHub
3. Espera o deploy do Netlify
4. Abre o site

---

# 🎯 RESULTADO ESPERADO

👉 Tela branca desaparece
👉 Site carrega normal
👉 Router funciona

---

Se ainda der tela branca (acho bem difícil agora), o próximo alvo é o `main.jsx` — mas sinceramente, isso aqui já resolve.

Vai lá e me fala quando subir 🔥
