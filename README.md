# Paraíso do Sorriso — site institucional

Esqueleto completo, HTML/CSS/JS puro (sem build step), seguindo a skill
`ui-ux-pro-max`. Paleta alinhada à identidade visual real da clínica (logo
enviado pelo cliente: azul-marinho + azul médio sobre branco), tipografia
Playfair Display + Inter.

> Antes de abrir PR ou Issue, leia [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Como visualizar

```bash
python3 -m http.server 8534 --directory paraiso-do-sorriso
```

Ou abre `index.html` direto no navegador — nada depende de servidor.

## O que é real

Nome, endereço, telefone, WhatsApp e a nota do Google (4,5 · 22 avaliações)
são dados reais, vieram do briefing. Estão centralizados em
[`js/data.js`](js/data.js).

## O que é placeholder (de propósito, nada foi inventado)

- **Tratamentos**: 6 espaços genéricos `[Tratamento 1]`...`[Tratamento 6]`
- **Profissionais**: 1 espaço de exemplo `[Nome do profissional]`
- **Por que escolher**: 5 blocos (Atendimento, Experiência, Estrutura,
  Tecnologia, Conforto) marcados `[A confirmar]`
- **Depoimentos de texto**: nenhum foi fornecido, só a nota agregada do
  Google é real
- **Horário completo**: o Google mostra a clínica aberta até 18h hoje, mas
  isso não é o horário semanal — fica `[Horário de funcionamento completo]`
  até vir a informação certa
- **Todas as fotos**: a clínica não forneceu fotos ainda, então todo
  `<div class="photo-slot">` é um espaço reservado (fundo hachurado +
  legenda dizendo o que deveria estar ali)
- **Instagram**: ícone no rodapé desabilitado até vir o link real

## Para editar quando os dados reais chegarem

Tudo em [`js/data.js`](js/data.js) — trocar os arrays `tratamentos`,
`profissionais`, `diferenciais` e preencher `depoimentos` faz a página
inteira atualizar sozinha (o `js/main.js` renderiza a partir desses dados).
Fotos: trocar cada `<div class="photo-slot">...</div>` por uma tag `<img>`
no `index.html`.
