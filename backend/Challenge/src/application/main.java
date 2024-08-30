package application;

import entities.AtendenteClima;
import entities.AtendenteSol;
import entities.AtendenteChuva;
import entities.AtendenteNeve;

public class main {
    public static void main(String[] args) {
        AtendenteClima[] atendentes = {
            new AtendenteSol("Sol"),
            new AtendenteChuva("Chuva"),
            new AtendenteNeve("Neve")
        };

        for (AtendenteClima atendente : atendentes) {
            System.out.print(atendente.getNome() + ": ");
            atendente.sugerirAtividade();
        }
    }
}
