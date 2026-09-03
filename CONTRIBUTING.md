# Fluxo de trabalho — leia antes de mexer no código

Regra pra qualquer pessoa ou agente (Claude, GPT, Copilot, etc.) que trabalhar
neste repositório daqui pra frente:

## 1. Toda tarefa vira uma Issue primeiro

Antes de codar, abra uma Issue no GitHub descrevendo a tarefa. Classifique com
label:

- `bug` — correção de algo quebrado
- `enhancement` — melhoria em algo que já existe
- `feature` — função nova

## 2. Trabalho vai em branch + Pull Request, nunca direto na `main`

```
git checkout -b tipo/descricao-curta   # ex: fix/menu-mobile-nao-fecha
```

Commit, push, abra PR. **A descrição do PR precisa mencionar a Issue**
(`Closes #12` ou `Refs #12`) — é assim que o deploy fica rastreável até a
tarefa que pediu ele.

## 3. Lint antes de abrir PR

```
npm install
npm run lint
```

Site é HTML/CSS/JS puro, sem build nem framework — por isso não tem suíte de
teste automatizado (Jest/Playwright) nem observabilidade paga (Sentry etc.)
configurada aqui. Isso faria sentido se o site ganhasse formulário próprio,
backend ou tráfego real pra monitorar; por enquanto seria infraestrutura sem
função. Se isso mudar, reavaliar.

## 4. Deploy passa pelo PR

Merge do PR na `main` é o gatilho de deploy (ver README para como o build é
gerado e publicado). Não editar direto em produção.

## Por que isso existe

Histórico de decisão rastreável: qualquer mudança no site tem uma Issue
explicando o motivo e um PR mostrando o que mudou. Vale tanto pra bug pequeno
quanto pra seção nova.
