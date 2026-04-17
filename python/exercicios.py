#explicações importantes:
#tipos de dados: int, float, str e bool
#int = numeros inteiros
#float = numeros com ponto flutuante
#str = strings, textos
#bool = booleano, true ou false

#################################################################################################################
#EXERCICIOS DE PYTHON
#################################################################################################################

#calculadora basica

num1 = 10
num2 = 20

soma = num1 + num2
subtracao = num1 - num2
multiplicacao = num1 * num2
divisao = num1 / num2
resto_da_divisao = num1 % num2

print(f"Soma = ", soma)
print(f"Subtração = ", subtracao)
print(f"Multiplicação = ", multiplicacao)
print(f"Divisão = ", divisao)
print(f"Resto da divisão = ", resto_da_divisao)

#exercicio mensagem personaliazada

nome = "Pedro"
idade = 20
altura = 1.75
peso = 75

print(f"Olá, meu nome é {nome}, tenho {idade} anos, minha altura é {altura}m e meu peso é {peso}kg")

#exercicio calcular maioridade 

idade = 20

if idade < 18:
    print("Menor de idade")

elif idade == 18:
    print("Possui 18 anos")

else:
   print("Maior de idade")

#exercicio calcular imc

peso = 76
altura = 1.75

imc = peso / (altura ** 2)

if imc < 18.5:
    print("Abaixo do peso")

elif imc >= 18.5 and imc < 24.9:
    print("Peso normal")

elif imc <= 25 and imc < 29.9:
    print("Sobrepeso")

elif imc <= 30 and imc < 34.9:
    print("Obesidade grau 1")

elif imc <= 35 and imc < 39.9:
    print("Obesidade grau 2")

elif imc >= 40:
    print("Obesidade grau 3")

elif imc > 60:
    print("Obesidade mórbida")

else:
    print("Morreu")

print(f"Seu imc: {imc:2f}")

#exercicio calcular par ou impar

num = 10

if num % 2 == 0:
    print("Numero par")

else:
    print("Numero impar")

#exercicio conversor de metros

metros = 100

centimetros = metros * 100
milimetros = metros * 1000
km = metros / 1000

print(f"{metros} metros equivalem a {centimetros} centimetros, {milimetros} milimetros e {km} km")

#exercicio converter celsius para fahrenheit
celcius = 0

fahrenheit = celcius * 1.8 + 32

print(f"a temperatura em celsius é {celcius} e em fahrenheit é {fahrenheit}")

#exercicio media de tres notas (aprovado e reprovado)

nota1 = 9.2
nota2 = 7.6
nota3 = 8.9

media = (nota1 + nota2 + nota3) / 3

if media >= 7:
 print("Aprovado")

elif media >= 5 and media <= 6.9:
 print("Recuperação")

elif media < 5:
 print("Reprovado")

#exercicio desconto em produto

produto = 100
desconto = produto * 20 / 100 #desconto de 20%
valor_final = produto - desconto

print(f"o produto custa {produto} reais, com o desconto aplicado, passa a custar {valor_final} reais.")

##exercicio verificar multiplos

numero1 = 5
numero2 = 10

if numero1 % numero2 == 0 or numero2 % numero1 == 0:
    print("multiplos.")

else:
    print("nao sao multiplos.")

##exercicio calculadora com input e operação

numero1 = int(input("Digite o primeiro numero: "))
numero2 = int(input("Digite o segundo numero: "))

operacao = input("Digite a operação: ")

if operacao == "+":
    print("A soma entre os dois numeros é: ", numero1 + numero2)

elif operacao == "-":
    print("A subtração entre os dois numeros é: ", numero1 - numero2)

elif operacao == "*":
    print("a multiplicação entre os dois numeros é: ", numero1 * numero2)

elif operacao == "/" and numero2 != 0:
    print("a divisão entre os dois numeros é: ", numero1 / numero2)

else:
    print("ERRO")

##exercicio login simples (usuario e senha)

usuario = input("Digite seu user: ")
senha = input("Digite sua senha: ")
usuario_correto = "admin"
senha_correta = "1234"

if usuario != usuario_correto or senha != senha_correta:
    print("ACESSO NEGADO")
    
else:
    print("ACESSO PERMITIDO")

##exercicio calcular idades

idade = 23

if idade > 0 and idade <= 11:
    print("Você é criança.")
    
elif idade >= 12 and idade <= 17:
    print("Você é adolescente.")
    
elif idade >= 18 and idade <= 59:
    print("Você é adulto.")
    
elif idade > 60:
    print("Você é idoso.")

##exercicio numero negativo, positivo ou zero

num = 0

if num > 0:
    print("Numero positivo")
    
elif num < 0:
    print("Numero negativo")
    
elif num == 0:
    print("ZERO")

##exercicio maior de tres numeros 

num1 = 10
num2 = 20
num3 = 30

if num1 > num2 and num1 > num3:
    print("o primeiro numero é maior")
    
elif num2 > num1 and num2 > num3:
    print("o segundo numero é maior")
    
else:
    print("o terceiro numero é maior")

##exercicio verificar ano bissexto

ano = 2024

if ano % 400 == 0:
    print("bissexto")
    
elif ano % 100 == 0:
    print("nao bissexto")
    
elif ano % 4 == 0:
    print("bissexto")
    
else:
    print("nao bissexto")