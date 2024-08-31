package application.controllers;

import entities.AtendenteClima;
import entities.AtendenteSol;
import entities.AtendenteChuva;
import entities.AtendenteNeve;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/atendentes")
public class AtendenteController {

    @GetMapping
    public AtendenteClima[] getAtendentes() {
        AtendenteClima[] atendentes = {
            new AtendenteSol("Sol"),
            new AtendenteChuva("Chuva"),
            new AtendenteNeve("Neve")
        };

        return atendentes;
    }
}
