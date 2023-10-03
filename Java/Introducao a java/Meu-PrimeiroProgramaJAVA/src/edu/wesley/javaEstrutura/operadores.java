package edu.wesley.javaEstrutura;

public class operadores {
    
    //classe Operadores.java
    double soma = 10.5 + 15.7;
    int subtração = 113 - 25;
    int multiplicacao = 20 * 7;
    int divisao = 15 / 3;
    int modulo = 18 % 3;
    double resultado = (10 * 7) + (20/4);


    // Concatenação 
    // concatenacao numeros = 1+"1"+1+"1";  texto + numeros
    String nomeCompleto = "LINGUAGEM" + "JAVA";
    



    public static void main(String[] args){




        //Operadores unarios

        int numero = 5;
                
        //Imprimindo o numero negativo
        System.out.println(- numero);

        //incrementando numero em mais 1 numero, imprime 6 e decrementa 1
        numero ++;
        numero --;
        System.out.println(numero);

        //incrementando numero em mais 1 numero, imprime 7 e decrementando 1
        System.out.println( numero --);
        System.out.println( numero ++);

        System.out.println(numero);// agora sim, numero virou 7

        //ordem de precedencia conta aqui atualzação em tempo real ja incrementando e decrementando
        System.out.println(++ numero);
        System.out.println(-- numero);

        // Bolleano - podemos inverter o valor de true para false pelo !
        boolean verdadeiro = true;

        System.out.println("Inverteu " + !verdadeiro);




        // Operadores Ternarios
                int a, b;

                a = 5;
                b = 6;

                /* EXEMPLO DE CONDICIONAL UTILIZANDO UMA ESTRUTURA IF/ELSE
                if(a==b)
                resultado = "verdadeiro";
                else
                resultado = "falso";
                */

                //MESMA CONDICIONAL, MAS DESSA VEZ, UTILIZANDO O OPERADOR CONDICIONAL TERNÁRIO
                String resultado = (a==b) ? "verdadeiro" : "false";
                // aqui nosso resultado seria falso porque 5 não é igual a 6

                // int resultado = (a==b) ? "1" : "0";
                
                System.out.println(resultado);
    }
}

