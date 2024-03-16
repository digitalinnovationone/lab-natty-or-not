# <h1 align = "Center">**Estruturas de Seleção**</h1>

Neste capítulo, exploraremos como utilizar estruturas de seleção em Python para tomar decisões com base em condições específicas. As estruturas de seleção permitem que o seu programa escolha diferentes caminhos de execução com base nas condições fornecidas.

### **Declaração if**

A declaração `if` permite que você execute um bloco de código apenas se uma condição específica for verdadeira.

```python
idade = 18
if idade >= 18:
    print("Você é maior de idade.")
```

#### *Declaração if-else*

A declaração `if-else` permite que você execute um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa.

```python
idade = 16
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```

#### *Declaração if-elif-else*

A declaração `if-elif-else` permite que você verifique várias condições e execute um bloco de código correspondente à primeira condição verdadeira encontrada. Se nenhuma condição for verdadeira, o bloco de código no `else` será executado.

```python
nota = 75
if nota >= 90:
    print("A")
elif nota >= 80:
    print("B")
elif nota >= 70:
    print("C")
else:
    print("D")
```

### **Operadores de Comparação**

Em Python, você pode usar os seguintes operadores de comparação em suas estruturas de seleção:

- `==` (igual a)
- `!=` (diferente de)
- `<` (menor que)
- `>` (maior que)
- `<=` (menor ou igual a)
- `>=` (maior ou igual a)

### **Operadores Lógicos**

Além dos operadores de comparação, você também pode usar os operadores lógicos para combinar múltiplas condições em suas estruturas de seleção:

- `and` (e)
- `or` (ou)
- `not` (não)

```python
idade = 25
if idade >= 18 and idade <= 65:
    print("Você está na idade ativa.")
```

### **Expressões Ternárias**

Em Python, você pode usar expressões ternárias para escrever estruturas de seleção de forma mais concisa.

```python
idade = 20
status = "maior de idade" if idade >= 18 else "menor de idade"
print(status)
```

---

Dominar as estruturas de seleção em Python é fundamental para criar programas que tomam decisões dinâmicas com base em diferentes condições. Nos próximos capítulos, exploraremos estruturas de repetição e funções em Python.
