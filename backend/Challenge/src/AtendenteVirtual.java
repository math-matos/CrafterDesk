public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }
}


// Pacote principal
package projeto;

// Classe base AtendenteVirtual
public class AtendenteVirtual {
    private String nome;

    public AtendenteVirtual(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void sugerirAtividade() {
        System.out.println("Eu sou um atendente virtual. Posso sugerir várias atividades.");
    }
}

// Pacote de esportes
package projeto.esportes;

import projeto.AtendenteVirtual;

public class AtendenteEsportes extends AtendenteVirtual {
    public AtendenteEsportes(String nome) {
        super(nome);
    }

    @Override
    public void sugerirAtividade() {
        System.out.println("Que tal praticar um esporte? Futebol, basquete ou natação?");
    }
}

// Pacote de cultura
package projeto.cultura;

import projeto.AtendenteVirtual;

public class AtendenteCultura extends AtendenteVirtual {
    public AtendenteCultura(String nome) {
        super(nome);
    }

    @Override
    public void sugerirAtividade() {
        System.out.println("Você pode visitar um museu, assistir a uma peça de teatro ou ler um livro.");
    }
}

// Pacote de lazer
package projeto.lazer;

import projeto.AtendenteVirtual;

public class AtendenteLazer extends AtendenteVirtual {
    public AtendenteLazer(String nome) {
        super(nome);
    }

    @Override
    public void sugerirAtividade() {
        System.out.println("Que tal um passeio no parque, um cinema ou um jantar fora?");
    }
}

// Classe principal para testar o polimorfismo
package projeto;

import projeto.esportes.AtendenteEsportes;
import projeto.cultura.AtendenteCultura;
import projeto.lazer.AtendenteLazer;

public class Main {
    public static void main(String[] args) {
        AtendenteVirtual[] atendentes = {
            new AtendenteEsportes("Esportes"),
            new AtendenteCultura("Cultura"),
            new AtendenteLazer("Lazer")
        };

        for (AtendenteVirtual atendente : atendentes) {
            System.out.print(atendente.getNome() + ": ");
            atendente.sugerirAtividade();
        }
    }
}