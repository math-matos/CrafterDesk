// Pacote de clima ensolarado
package entities;

import entities.AtendenteClima;

public class AtendenteSol extends AtendenteClima {
    public AtendenteSol(String nome) {
        super(nome);
    }

    @Override
    public void sugerirAtividade() {
        System.out.println("Está um dia ensolarado! Que tal aproveitar para fazer uma caminhada ao ar livre ou um piquenique?");
    }
}
