
package entities;

import entities.AtendenteClima;

public class AtendenteNeve extends AtendenteClima {
    public AtendenteNeve(String nome) {
        super(nome);
    }

    @Override
    public void sugerirAtividade() {
        System.out.println("Está nevando! Que tal construir um boneco de neve ou praticar esqui?");
    }
}
