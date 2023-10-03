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












                //Operadores Relacionais 
                //== Quando desejamos verificar se uma variável é IGUAL A outra.
                
                
            int numero1 = 1;
            int numero2 = 2;


           //  > Quando desejamos verificar se uma variável é MAIOR QUE a outra.
            if(numero1 > numero2)
                System.out.print("Numero 1 maior que numero 2");
           //  < Quando desejamos verificar se uma variável é MENOR QUE outra.
            if(numero1 < numero2)
                System.out.print("Numero 1 menor que numero 2");
           //  >= Quando desejamos verificar se uma variável é MAIOR OU IGUAL a outra.
            if(numero1 >= numero2)
                System.out.print("Numero 1 maior ou igual que numero 2");
            // <= Quando desejamos verificar se uma variável é MENOR OU IGUAL a outra.
            if(numero1 <= numero2)
                System.out.print("Numero 1 menor ou igual que numero 2");
            // != Quando desejamos verificar se uma variável é DIFERENTE da outra.
            if(numero1 != numero2)
                System.out.print("Numero 1 é diferente de numero 2");







           // Comparação AVANÇADA  pelo ==

        String nome1 = "JAVA";
        String nome2 = "JAVA";
        
        System.out.println(nome1 == nome2); //true

        String nome3 = new String("JAVA");
        
        System.out.println(nome1 == nome3); //false

        String nome4 = nome3;

        System.out.println(nome3 == nome4); //true
        
        //equals na parada
        System.out.println(nome1.equals(nome2)); 
        System.out.println(nome2.equals(nome3)); 
        System.out.println(nome3.equals(nome4)); 





        // COMPARAÇÃO DE NUMEROS AVANCAÇADA

        int numero11 = 130;
        int numero22 = 130;
        
        System.out.println(numero11 == numero22); //true
        
        Integer numero10 = 130;
        Integer numero20 = 130;

        System.out.println(numero11 == numero22); //false
        
        // A razão pela qual o resultado é false, é devido o Java tratar os valores
        // Como objetos a partir de agora.
        // Qual a solução ?
        // Quando queremos comparar objetos, usamos o método equals
        
         System.out.println(numero10.equals(numero20)); 





         // OPERADORES lOGICOS
       
            boolean condicao1=true;

            boolean condicao2=false;

            /* Aqui estamos utilizando o operador lógico E para fazer a união de duas 
            expressões. 
            É como se estivesse escrito:
            "Se Condicao1 e Condicao2 forem verdadeiras, executar código"
            */

            if(condicao1 && condicao2)
                System.out.print("Os dois valores precisam ser verdadeiros");;

            //Se condicao1 OU condicao2 for verdadeira, executar código.
            if(condicao1 || condicao2)
                System.out.print("Um dos valores precisa ser verdadeiro");



                // Logica avançada

                // ComparacaoAvancada.java
                    int numero50 = 1;
                    int numero60= 1;

                    if(numero1== 2 & numero2 ++ == 2 )
                        System.out.println("As 2 condições são verdadeiras");

                    System.out.println("O numero 1 agora é " + numero50);
                    System.out.println("O numero 2 agora é " + numero60);

                    // Vamos mudar a linha 5 do código acima para: if(numero1== 2 && numero2 ++ == 2 )
}      
        
 }

