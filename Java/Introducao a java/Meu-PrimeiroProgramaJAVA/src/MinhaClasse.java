// Nossa classe é executavel -A classe deve possuir o mesmo nome do arquivo.java


public class MinhaClasse {
    
    // metodo principal na inicialização metodo main 

    public static void main(String[] args) {
        // nosso corpo para termos o bloco de codigo {}

        // para imprimir algo 
        //System metodo / out saida / print para mostrar o texto

        System.out.print ("Olá Mundo!");


        //Variaveis
        // as variaveis que não tiverem o metodo para serem imutaveis podem receber outros valores.

        // String
        String primeiroNome = "Wesley";

        String segundoNome = "Miyashiro";

        //Numeros inteiros
        int anoAtual = 2023;

        // Numeros quebrados
        double altura = 1.81;

        //Booleano verdadeiro ou falso
        boolean simNao = true;

        // para numero gigantes distancia para SOL - o L  deve ser colocar ao final para indicar que é Long
        long  numerosLongos =   11450780L;

        // Deve ter o F apos o valor , para não achar que é um Doble - Float tambem é para uso Decimal
        float pi = 3.14F;

         // short usado para numeros até 30 mil - porem menos usado hoje - 
         short numeroCurto = 1;



        // a variavel para ter valor imutavel recebe o seguinte metodo final e nome todo Maiusculo

        final String BR = "Brasil";

        final double VALOR_DE_PI = 3.14;

        
        // usando variavel para chamar valores pelo parametro

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);


        System.out.println(nomeCompleto);
    }




     // metodos  tipo - nome - (parametros) - todo metodo tem parametros 
    // chamamos o metodo , ele é parecido com as funções 

    public static String nomeCompleto (String primeiroNome , String segundoNome) {
      
        // estamos retornando o resultado usando o concat para concatenar os resultados 
        // podemos usar metodo "" + "" tambem  para concatenar o resultado
        return "Meu nome é " +  primeiroNome.concat (" ").concat(segundoNome);
  

         
        

    }
}
