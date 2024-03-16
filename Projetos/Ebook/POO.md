# <h1 align = "Center">**Programação Orientada a Objetos**</h1>

Neste capítulo, vamos explorar o conceito de Programação Orientada a Objetos (POO) em Python. POO é um paradigma de programação poderoso que permite modelar problemas do mundo real de forma mais intuitiva e eficaz, organizando o código em objetos e classes.

### **Conceitos Básicos de POO**

#### *Objetos*

Objetos são instâncias de classes. Eles representam entidades do mundo real e possuem características (atributos) e comportamentos (métodos).

#### *Classes*

Classes são modelos para criar objetos. Elas definem os atributos e métodos que os objetos de uma determinada classe terão.

#### *Atributos*

Atributos são variáveis que pertencem a um objeto e representam características dos objetos.

#### *Métodos*

Métodos são funções que pertencem a uma classe e representam os comportamentos dos objetos.

### **Definição de Classes em Python**

Em Python, as classes são definidas usando a palavra-chave `class`, seguida pelo nome da classe.

```python
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def saudacao(self):
        print("Olá, meu nome é", self.nome, "e tenho", self.idade, "anos.")
```

### **Instanciando Objetos**

Depois de definir uma classe, você pode criar objetos (instanciar a classe) usando a sintaxe `nome_da_classe()`. Isso chama o construtor `__init__()` da classe para inicializar o objeto.

```python
pessoa1 = Pessoa("João", 30)
pessoa2 = Pessoa("Maria", 25)
```

### *Atributos e Métodos de Objeto*

Depois de criar objetos, você pode acessar seus atributos e métodos usando a notação de ponto (`objeto.atributo` ou `objeto.metodo()`).

```python
print(pessoa1.nome)  # Saída: João
print(pessoa2.idade)  # Saída: 25
pessoa1.saudacao()   # Saída: Olá, meu nome é João e tenho 30 anos.
```

### **Herança**

Herança é um conceito importante em POO, onde uma classe pode herdar atributos e métodos de outra classe. Isso promove a reutilização de código e facilita a criação de hierarquias de classes.

```python
class Aluno(Pessoa):
    def __init__(self, nome, idade, matricula):
        super().__init__(nome, idade)
        self.matricula = matricula

    def exibir_informacoes(self):
        print("Nome:", self.nome)
        print("Idade:", self.idade)
        print("Matrícula:", self.matricula)
```

### **Encapsulamento**

Encapsulamento é o conceito de esconder detalhes de implementação de um objeto e exibir apenas as interfaces relevantes. Em Python, isso pode ser alcançado usando métodos de acesso (getters e setters).

```python
class ContaBancaria:
    def __init__(self, saldo):
        self.__saldo = saldo

    def get_saldo(self):
        return self.__saldo

    def depositar(self, valor):
        self.__saldo += valor

    def sacar(self, valor):
        if valor <= self.__saldo:
            self.__saldo -= valor
        else:
            print("Saldo insuficiente.")
```

### **Polimorfismo**

Polimorfismo é o princípio de que objetos de diferentes classes podem ser tratados de maneira uniforme. Em Python, isso é alcançado através do uso de métodos com o mesmo nome em diferentes classes.

```python
class Animal:
    def fazer_som(self):
        pass

class Cachorro(Animal):
    def fazer_som(self):
        print("Au Au")

class Gato(Animal):
    def fazer_som(self):
        print("Miau")

cachorro = Cachorro()
gato = Gato()

cachorro.fazer_som()  # Saída: Au Au
gato.fazer_som()      # Saída: Miau
```

---

A Programação Orientada a Objetos é um paradigma poderoso que permite criar programas mais estruturados, reutilizáveis e fáceis de manter. Ao dominar os conceitos de POO em Python, você estará bem equipado para enfrentar uma variedade de desafios de programação de forma mais eficaz.
