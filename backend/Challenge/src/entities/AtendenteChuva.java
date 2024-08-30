// Pacote de clima chuvoso
package entities;

import entities.AtendenteClima;

public class AtendenteChuva extends AtendenteClima {
    public AtendenteChuva(String nome) {
        super(nome);
    }

    @Override
    public void sugerirAtividade() {
        System.out.println("Está chovendo! Talvez seja uma boa ideia assistir a um filme ou ler um bom livro.");
    }
}
