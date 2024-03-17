# <h1 align = "Center">**Estruturas de Repetição**</h1>

Neste capítulo, vamos explorar as estruturas de repetição em Python, que permitem executar um bloco de código repetidamente até que uma condição específica seja atendida ou até que todos os itens em uma coleção tenham sido processados.

### **Laço `while`**

O laço `while` executa um bloco de código repetidamente enquanto uma condição especificada for verdadeira.

```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

### **Laço `for`**

O laço `for` é utilizado para iterar sobre uma sequência (como uma lista, tupla, dicionário, ou conjunto) e executar um bloco de código para cada item na sequência.

#### *Iteração sobre uma lista*

```python
frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(fruta)
```

#### *Iteração sobre um intervalo numérico*

```python
for numero in range(1, 6):
    print(numero)
```

### *Declarações `break` e `continue`*

- A declaração `break` é usada para interromper a execução do laço imediatamente.
- A declaração `continue` é usada para pular para a próxima iteração do laço, ignorando o resto do código dentro do bloco de repetição atual.

```python
for numero in range(10):
    if numero == 5:
        break
    print(numero)  # Irá imprimir números de 0 a 4
```

```python
for numero in range(10):
    if numero % 2 == 0:
        continue
    print(numero)  # Irá imprimir números ímpares de 1 a 9
```

### **Loops Aninhados**

Python permite a aninhamento de loops, ou seja, colocar um loop dentro de outro.

```python
for i in range(3):
    for j in range(2):
        print(f"({i}, {j})")
```

### **Compreensão de Lista**

Compreensão de lista é uma maneira concisa de criar listas em Python, combinando um loop `for` com a criação de listas.

```python
quadrados = [numero ** 2 for numero in range(1, 6)]
print(quadrados)  # Saída: [1, 4, 9, 16, 25]
```

---

Dominar as estruturas de repetição em Python é essencial para automatizar tarefas repetitivas e processar coleções de dados de forma eficiente. Nos próximos capítulos, exploraremos funções, bibliotecas e programação orientada a objetos em Python.

<a href = https://github.com/Victor-Ribeiro-Acosta/lab-natty-or-not/blob/feat/community/VictorAcosta/Projetos/Ebook/Estruturas_Repeticao.md#estruturas-de-repeti%C3%A7%C3%A3o>
  <p align = "right">Próximo</p>
</a>
