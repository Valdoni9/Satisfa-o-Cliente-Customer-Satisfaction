# Plugin de Satisfação do Cliente para GLPI

Este plugin para GLPI permite gerenciar a satisfação do cliente no momento do fechamento do chamado, alterando o status para "Satisfação" quando o cliente aprova o fechamento.

Automaticamente muda para a aba Satisfação assim que o cliente aprova o fechamento do chamado. / Automatically switches to the Satisfaction tab once the customer approves the ticket closure.

## Exemplo

![Exemplo de uso do plugin](https://i.imgur.com/WjX8h7b.gif)

## Funcionalidades

- Alteração automática do status do chamado para "Satisfação" após aprovação do cliente
- Integração com o fluxo de fechamento de chamados do GLPI
- Controle de satisfação do cliente no processo de encerramento

## Exemplo
[Veja o exemplo em vídeo]![2025-05-28 19-54-44](https://github.com/user-attachments/assets/fc1c3cc8-68ae-4522-8273-60638c7f00f8)



## Requisitos

- GLPI 10.0 ou superior
- PHP 7.4 ou superior

## Instalação

1. Faça o download do plugin
2. Extraia o conteúdo para a pasta `plugins` do seu GLPI
3. Acesse o GLPI como administrador
4. Vá em Configurações > Plugins
5. Ative o plugin "Satisfação do Cliente"

## Uso

1. Quando um chamado for fechado, o plugin aguardará a aprovação do cliente
2. Após a aprovação do cliente, o status do chamado será alterado para "Satisfação"
3. O chamado poderá então ser encerrado completamente

## Contribuindo

* Abra um ticket para cada bug/feature para que possa ser discutido
* Siga as [diretrizes de desenvolvimento](http://glpi-developer-documentation.readthedocs.io/en/latest/plugins/index.html)
* Consulte o processo [GitFlow](http://git-flow.readthedocs.io/) para branching
* Trabalhe em uma nova branch no seu próprio fork
* Abra um PR que será revisado por um desenvolvedor

## Autor

Criado por Antonio Valdoni
