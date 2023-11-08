# Validador de Palindromos (PalindromeChecker)

-   Criar um validador de palindromos
-   O validador deve poder detectar se uma string é um palindromo, isto é, se é igual ao seu inverso.
-   Palavras como "ovo" e "ana" são palindromos.
-   Palavras como "teste" e "asno" não são palíndromos
-   O validador deve ainda saber se uma string é um palindromo mesmo que as letras da string sejam maiúsculas ou minúsculas. Ex: "Ovo"
-   O validador também deve poder detectar palindromos em frases como "Subi no onibus".

## Test Cases

### T1

    ovo -> true
    asa -> true
    arara -> true
    reviver -> true
    matam -> true

### T2

    asno -> false
    carro -> false
    teste -> false
    margem -> false
    algo -> false

### T3

    Ovo -> true
    ReVivEr -> true
    asNo -> false
    mArGEm -> false

### T4

    subi no onibus -> true
    Anotaram a data da maratona -> true
    O lobo ama o bolo -> true
    Amor a Roma -> true
