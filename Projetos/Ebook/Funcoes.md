# <h1 align = "Center">**Funções**</h1>

Neste capítulo, exploraremos o conceito de funções em Python. As funções permitem encapsular blocos de código para que possam ser reutilizados e facilitar a organização e manutenção do código.

### **Definição de Funções**

Em Python, uma função é definida usando a palavra-chave `def`, seguida pelo nome da função e seus parâmetros entre parênteses.

```python
def saudacao(nome):
    print("Olá, " + nome + "!")
```

### **Chamada de Funções**

Depois de definida, uma função pode ser chamada em qualquer lugar do código, fornecendo os argumentos necessários.

```python
saudacao("João")  # Saída: Olá, João!
```

### **Parâmetros e Argumentos**

Os parâmetros são as variáveis listadas na definição da função. Os argumentos são os valores passados para a função quando ela é chamada.

```python
def somar(a, b):
    resultado = a + b
    print("A soma é:", resultado)

somar(5, 3)  # Saída: A soma é: 8
```

### **Retorno de Valores**

Uma função pode retornar um valor usando a palavra-chave `return`. Isso permite que a função produza um resultado que pode ser utilizado em outros lugares do código.

```python
def calcular_area_retangulo(comprimento, largura):
    area = comprimento * largura
    return area

area = calcular_area_retangulo(5, 3)
print("A área do retângulo é:", area)  # Saída: A área do retângulo é: 15
```

### **Escopo de Variáveis**

Variáveis definidas dentro de uma função têm escopo local, o que significa que elas só podem ser acessadas dentro da própria função.

```python
def minha_funcao():
    variavel_local = 10
    print(variavel_local)

minha_funcao()  # Saída: 10
print(variavel_local)  # Isso resultará em um erro, pois variavel_local não está definida fora da função
```

### **Funções Lambda**

Funções lambda são funções anônimas de uma linha. Elas são definidas usando a palavra-chave `lambda` e podem ter qualquer número de argumentos, mas apenas uma expressão.

```python
dobrar = lambda x: x * 2
print(dobrar(5))  # Saída: 10
```


## <h2 align = "Center">**Funções integradas em Python**</h2>

Neste capítulo, vamos explorar algumas das principais funções integradas (built-in functions) em Python, que são amplamente utilizadas para realizar tarefas comuns. Essas funções são fornecidas pelo próprio Python e estão disponíveis para uso imediato em qualquer programa.

### **Principais Funções Integradas em Python**

### `print()`

A função `print()` é usada para exibir informações na saída padrão (geralmente a tela do terminal).

```python
print("Olá, mundo!")
```

### `input()`

A função `input()` é usada para solicitar entrada do usuário. Ela exibe uma mensagem opcional e espera que o usuário forneça algum texto, que é então retornado como uma string.

```python
nome = input("Qual é o seu nome? ")
print("Olá,", nome)
```

### `len()`

A função `len()` retorna o número de itens em um objeto (como uma lista, tupla, string, etc.).

```python
frutas = ["maçã", "banana", "laranja"]
print(len(frutas))  # Saída: 3
```

### `range()`

A função `range()` é usada para gerar uma sequência de números. Ela pode aceitar um, dois ou três argumentos e retorna um objeto de intervalo que produz uma sequência de números inteiros.

```python
for i in range(5):
    print(i)  # Saída: 0, 1, 2, 3, 4
```

### `sum()`

A função `sum()` é usada para calcular a soma de todos os itens em uma sequência (como uma lista ou tupla).

```python
numeros = [1, 2, 3, 4, 5]
print(sum(numeros))  # Saída: 15
```

### `max()` e `min()`

As funções `max()` e `min()` são usadas para encontrar o valor máximo e mínimo em uma sequência, respectivamente.

```python
numeros = [10, 5, 8, 3, 12]
print(max(numeros))  # Saída: 12
print(min(numeros))  # Saída: 3
```

### `abs()`

A função `abs()` é usada para retornar o valor absoluto de um número.

```python
numero = -10
print(abs(numero))  # Saída: 10
```

### `round()`

A função `round()` é usada para arredondar um número para um número específico de casas decimais (por padrão, nenhuma casa decimal é especificada).

```python
pi = 3.14159
print(round(pi, 2))  # Saída: 3.14
```

---

Essas são apenas algumas das principais funções integradas em Python que são amplamente utilizadas em muitos programas. Existem muitas outras funções integradas disponíveis, cada uma com seu propósito específico. Ao longo de sua jornada em Python, você encontrará e aprenderá a usar muitas dessas funções para realizar uma variedade de tarefas.