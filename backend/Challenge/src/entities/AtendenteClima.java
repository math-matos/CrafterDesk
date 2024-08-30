// Pacote principal
package entities;

public class AtendenteClima {
    private String nome;

    public AtendenteClima(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void sugerirAtividade() {
        System.out.println("Eu sou um atendente virtual. Posso sugerir várias atividades relacionadas ao clima.");
    }
}
