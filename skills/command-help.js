//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": Ayuda";
        text += "\n- " + bot.enrichCommand(message, "espacio") + ": espacio clonado";
        text += "\n- " + bot.enrichCommand(message, "pedido") + ": informacion del pedido";
        text += "\n- " + bot.enrichCommand(message, "add") + ": Añade usuario a la sala actual";
        bot.reply(message, text);
    });
}
