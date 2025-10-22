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