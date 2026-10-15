# 🎨 Prompts Utilizados no E-book

Registro dos prompts usados para criar o e-book [**Natty or Not?**](NATTY-OR-NOT-IA.md). Documentar os prompts faz parte do processo: mostra como a IA foi usada e permite que qualquer pessoa reproduza (ou melhore) o resultado.

---

## ✍️ Prompts de Texto (roteiro e revisão)

**1. Estrutura do e-book**
```text
Você é um redator especialista em tecnologia e educação. Crie a estrutura de um e-book
curto (5 capítulos) em português do Brasil chamado "Natty or Not? O Guia Definitivo para
Reconhecer Conteúdo Gerado por IA". Use a hype "Natty or Not" do fisiculturismo como
metáfora para distinguir conteúdo real de conteúdo gerado por IA. Público: iniciantes em
tecnologia. Tom: descontraído, didático e com analogias de academia.
```

**2. Checklist de sinais**
```text
Liste sinais práticos para identificar imagens, textos, áudios e vídeos gerados por IA,
em formato de checklist. Deixe claro que nenhum sinal isolado é prova definitiva e cite
ferramentas de verificação (busca reversa, Content Credentials/C2PA).
```

**3. Quiz**
```text
Crie um quiz com 6 situações do cotidiano para o leitor decidir se o conteúdo é
"Natty" (real) ou "Not" (gerado por IA ou golpe), com respostas explicadas.
```

**4. Revisão**
```text
Revise o texto abaixo: corrija gramática, deixe as frases mais curtas e verifique se há
alguma afirmação técnica imprecisa. Aponte as alterações feitas.
```

---

## 🖼️ Prompts de Imagem

> **Dicas:** use proporção **16:9** para os capítulos e **2:3** (retrato) para a capa. No Leonardo AI, modelos fotorrealistas (ex.: *Leonardo Phoenix* / *PhotoReal*) funcionam bem; no DALL·E/ChatGPT, basta colar o prompt. Salve cada imagem em [`imagens/`](imagens/) com o nome indicado (`.webp` ou `.png`, ajustando a referência no e-book).

| Arquivo | Uso | Prompt |
|---|---|---|
| `capa.webp` ✅ | Capa (2:3) | *Hyper-realistic editorial photo of a muscular bodybuilder posing on a competition stage, half of his body is natural human skin and the other half dissolves into glowing blue digital pixels and neural network lines, dramatic stage lighting, dark background, magazine cover style, 85mm lens, shallow depth of field* |
| `cap01.webp` ✅ | Cap. 1 — A hype | *Two bodybuilders flexing side by side in an old-school gym, one looks naturally real and the other has a subtle glossy synthetic CGI look, a big question mark made of neon light between them, cinematic lighting, photorealistic* |
| `cap02.webp` ⏳ pendente | Cap. 2 — O shape da IA | *A futuristic gym where a humanoid AI robot lifts dumbbells shaped like icons of text, image, audio waveform and video play button, clean modern aesthetic, soft blue and orange lighting, photorealistic 3D render* |
| `cap03.webp` ⏳ pendente | Cap. 3 — Sinais | *Close-up of a detective with a magnifying glass inspecting a printed portrait photo where the hand has six fingers, desk with notes and a laptop, warm film-noir lighting, highly detailed, photorealistic* |
| `cap04.webp` ✅ | Cap. 4 — Quiz | *Bodybuilding competition judges' table with scorecards reading "NATTY" and "NOT", judges holding paddles, spotlight on stage, playful but realistic photography* |
| `cap05.webp` ✅ | Cap. 5 — Ética | *A protein shake bottle and a glowing AI chip side by side on a gym bench, labeled with a clean "transparency" tag, minimalist product photography, soft studio lighting, white background* |
| `conclusao.webp` ✅ | Conclusão | *A person and a friendly AI robot fist-bumping in a bright modern gym at sunrise, motivational atmosphere, golden hour light, photorealistic, wide shot* |

### Prompt negativo sugerido (Leonardo AI / Stable Diffusion)
```text
blurry, low quality, distorted text, watermark, extra limbs, deformed face, cartoon
```

---

## 🛠️ Montagem (opcional)

Para gerar uma versão em **PDF**, copie o conteúdo do e-book para o **Canva** ou **LibreOffice Writer**, insira as imagens geradas e exporte como PDF. Depois, salve o arquivo em `ebook/` e atualize o link em **Resultados** no [README](../README.md).
