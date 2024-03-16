# <h1 align = "Center">**Variáveis e Operações Matemáticas Básicas**</h1>

Neste capítulo, exploraremos como utilizar variáveis para armazenar dados e realizar operações matemáticas simples em Python. Entender como trabalhar com variáveis e operações básicas é fundamental para a construção de programas mais complexos.

### **Variáveis em Python**

Em Python, uma variável é um nome que se refere a um valor armazenado na memória. As variáveis são usadas para armazenar dados que podem ser modificados durante a execução do programa.

#### *Declaração de Variáveis*

Em Python, você pode declarar uma variável atribuindo um valor a ela. Por exemplo:

```python
idade = 25
nome = "Maria"
saldo = 1000.50
```

#### *Convenções de Nomenclatura*

- Os nomes das variáveis em Python podem conter letras, números e sublinhados, mas devem começar com uma letra ou sublinhado.
- Python faz distinção entre maiúsculas e minúsculas, ou seja, `nome` e `Nome` seriam duas variáveis diferentes.

### **Tipos de Dados Básicos**

Python suporta vários tipos de dados básicos, incluindo inteiros, números de ponto flutuante, strings e booleanos.

#### *Inteiros*

Inteiros são números inteiros sem casas decimais. Exemplos de inteiros:

```python
idade = 25
quantidade = 10
```

#### *Números de Ponto Flutuante*

Números de ponto flutuante representam números reais com casas decimais. Exemplos de números de ponto flutuante:

```python
altura = 1.75
peso = 68.5
```

#### *Strings*

Strings representam sequências de caracteres. Elas podem ser delimitadas por aspas simples (`'`) ou duplas (`"`). Exemplos de strings:

```python
nome = "Maria"
endereco = 'Rua Principal, 123'
```

#### *Booleanos*

Booleanos representam valores lógicos Verdadeiro (`True`) ou Falso (`False`). Eles são usados em expressões de comparação e controle de fluxo. Exemplos de booleanos:

```python
temperatura_alta = True
temperatura_baixa = False
```

### **Operadores Aritméticos**

Python suporta vários operadores aritméticos para realizar operações matemáticas básicas.

- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `//` (divisão inteira)
- `%` (módulo, retorna o resto da divisão)
- `**` (exponenciação)

Por exemplo:

```python
a = 10
b = 3
soma = a + b  # Resultado: 13
subtracao = a - b  # Resultado: 7
multiplicacao = a * b  # Resultado: 30
divisao = a / b  # Resultado: 3.3333333333333335
divisao_inteira = a // b  # Resultado: 3
resto_divisao = a % b  # Resultado: 1
exponenciacao = a ** b  # Resultado: 1000
```

### **Conversão de Tipos**

Às vezes, é necessário converter um tipo de dado em outro. Python fornece funções embutidas para converter entre tipos de dados.

#### *Conversão de Inteiro para String*

```python
numero = 123
numero_string = str(numero)  # Resultado: "123"
```

#### *Conversão de String para Inteiro*

```python
numero_string = "123"
numero = int(numero_string)  # Resultado: 123
```

#### *Conversão de Float para Inteiro*

```python
numero_float = 3.14
numero_inteiro = int(numero_float)  # Resultado: 3
```

#### *Conversão de Inteiro para Float*

```python
numero_inteiro = 3
numero_float = float(numero_inteiro)  # Resultado: 3.0
```

---

Compreender como trabalhar com variáveis e operações matemáticas básicas em Python é fundamental para o desenvolvimento de programas mais complexos. Nos próximos capítulos, exploraremos estruturas de dados, controle de fluxo e muito mais.
