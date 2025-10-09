#exercicio calcular maioridade 

idade = 20

if idade < 18:
    print("Menor de idade")

elif idade == 18:
    print("Possui 18 anos")

else:
   print("Maior de idade")

#exercicio calcular imc

peso = 5000
altura = 4.54

imc = peso / (altura ** 2)

if imc < 18.5:
    print("Abaixo do peso")

elif imc >= 18.5 and imc < 24.9:
    print("Peso normal")

elif imc <= 25 and imc < 29.9:
    print("Gordona Miseravel")

elif imc <= 30 and imc < 34.9:
    print("voce é GORDA porra")

elif imc <= 35 and imc < 39.9:
    print("BALEIA JUBARTE")

elif imc >= 40:
    print("MR PUSSY")

else:
    print("Morreu")

print(f"Seu imc: {imc:2f}")

#exercicio calcular par ou impar
