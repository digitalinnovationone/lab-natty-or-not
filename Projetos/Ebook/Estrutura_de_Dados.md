# <h1 align = "Center">**Estruturas de Dados**</h1>

Neste capítulo, exploraremos algumas das estruturas de dados mais fundamentais em Python. As estruturas de dados são essenciais para organizar e manipular coleções de dados de forma eficiente.

### **Listas**

Listas são coleções ordenadas e mutáveis de itens em Python. Você pode armazenar uma variedade de tipos de dados em uma lista.

#### *Criando Listas*

```python
lista_numeros = [1, 2, 3, 4, 5]
lista_strings = ["maçã", "banana", "laranja"]
lista_mista = [10, "python", True, 3.14]
```

#### *Acessando Itens em uma Lista*

```python
print(lista_numeros[0])  # Saída: 1
print(lista_strings[1])  # Saída: "banana"
print(lista_mista[-1])   # Saída: 3.14
```

#### *Modificando Itens em uma Lista*

```python
lista_numeros[0] = 10
print(lista_numeros)  # Saída: [10, 2, 3, 4, 5]
```

#### *Operações com Listas*

```python
# Adicionando um item ao final da lista
lista_strings.append("uva")

# Removendo um item específico da lista
lista_numeros.remove(3)

# Ordenando a lista
lista_numeros.sort()

# Verificando o comprimento da lista
tamanho_lista = len(lista_mista)
```

### **Tuplas**

Tuplas são coleções ordenadas e imutáveis de itens em Python. Elas são semelhantes às listas, mas não podem ser modificadas depois de criadas.

#### *Criando Tuplas*

```python
tupla_cores = ("vermelho", "verde", "azul")
```

#### *Acessando Itens em uma Tupla*

```python
print(tupla_cores[0])  # Saída: "vermelho"
```

#### *Imutabilidade de Tuplas*

```python
tupla_cores[0] = "amarelo"  # Isso resultará em um erro, pois tuplas são imutáveis
```

### **Dicionários**

Dicionários são coleções não ordenadas de itens que são armazenados como pares de chave-valor. Eles são extremamente eficientes para acessar, adicionar e remover itens por meio de suas chaves.

#### *Criando Dicionários*

```python
dicionario_pessoa = {"nome": "João", "idade": 30, "cidade": "São Paulo"}
```

#### *Acessando Itens em um Dicionário*

```python
print(dicionario_pessoa["idade"])  # Saída: 30
```

#### *Adicionando e Removendo Itens de um Dicionário*

```python
dicionario_pessoa["profissão"] = "engenheiro"  # Adicionando um novo item
del dicionario_pessoa["cidade"]               # Removendo um item existente
```

### **Conjuntos**

Conjuntos são coleções não ordenadas de itens únicos. Eles são úteis para realizar operações de conjunto, como união, interseção e diferença.

#### *Criando Conjuntos*

```python
conjunto_cores = {"vermelho", "verde", "azul"}
```

#### *Adicionando e Removendo Itens de um Conjunto*

```python
conjunto_cores.add("amarelo")   # Adicionando um novo item
conjunto_cores.remove("verde")  # Removendo um item existente
```

#### *Operações com Conjuntos*

```python
conjunto1 = {1, 2, 3}
conjunto2 = {3, 4, 5}

# União de conjuntos
uniao = conjunto1 | conjunto2  # Resultado: {1, 2, 3, 4, 5}

# Interseção de conjuntos
intersecao = conjunto1 & conjunto2  # Resultado: {3}

# Diferença de conjuntos
diferenca = conjunto1 - conjunto2  # Resultado: {1, 2}
```

---

Entender como trabalhar com listas, tuplas, dicionários e conjuntos em Python é crucial para o desenvolvimento eficaz de programas. Nos próximos capítulos, exploraremos estruturas de controle de fluxo e funções em Python.

<a href = https://github.com/Victor-Ribeiro-Acosta/lab-natty-or-not/blob/feat/community/VictorAcosta/Projetos/Ebook/Estruturas_Selecao.md#estruturas-de-sele%C3%A7%C3%A3o>
  <p align = "right">Próximo</p>
</a>
