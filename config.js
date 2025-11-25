window.CONFIG = {
  LINK_ACESSO: "https://wabnersantosofc.github.io/pagina-venda-chatbot/",
  AUDIO_URL: "audio/explicacao-wabner.mp3",
  MEU_TOKEN_TELEGRAM: "8299290777:AAHhqMVE-ZZVxVexMnVPty5XAS5DzRW84xo",
  MEU_CHAT_ID: "7468174088",

  responses: [
    {
      cond: /sim|quero|claro|pode|mostra|interesse|funciona/,
      seq: [
        `Perfeito, {nomeLead}! 😎`,
        `Isso já gerou <b>mais de R$50.000</b> em vendas para meus alunos.`,
        `Veja como funciona:`,
        `• Um lead te escreve às 2h da manhã…<br>• Seu chatbot responde <b>automaticamente</b>…<br>• Envia seu link…<br>• E <b>fecha a venda sozinho</b>.`,
        `Dá só uma olhada no áudio rápido que gravei explicando:<br><audio controls preload="metadata"><source src="{audioUrl}" type="audio/mpeg">Ouvir áudio</audio>`,
        `Você recebe <b>tudo pronto</b>:<br>✅ <b>Arquivo config.js</b> para personalizar sem editar HTML<br>✅ <b>Tutorial em PDF</b> (Publique no GitHub Pages em 10 minutos)<br>✅ <b>Bônus:</b> “5 Frases que Vendem no WhatsApp”<br>✅ <b>Grupo VIP no Telegram</b>`,
        `Veja resultados reais:`,

        `<div class="depoimento-container">
          <img src="imagens/cliente1.png" alt="Depoimento">
          <div class="depoimento-legenda">“Em 3 dias, vendi R$ 1.200 com o chatbot — sem postar nada!”<br><small>Ana – Afiliada</small></div>
        </div>`,

        `<div class="depoimento-container">
          <img src="imagens/cliente2.png" alt="Depoimento">
          <div class="depoimento-legenda">“Nunca imaginei vender enquanto dormia. O chatbot fez isso por mim!”<br><small>Lucas – Produtor</small></div>
        </div>`,

        `⚠️ <b>Atenção</b>: Essa oferta com desconto <b>só está ativa enquanto você estiver nesta conversa</b>.<br>Assim que sair, o preço volta para <b>R$97</b>.`,

        `{button:💚 Pagar R$47 com Pix}`
      ]
    },

    {
      cond: /não|nao|duvida|talvez|caro|difícil|complicado/,
      seq: [
        `{nomeLead}, entendo… mas calma.`,
        `Você tem <b>garantia incondicional de 7 dias</b>.`,
        `Se em 7 dias você:<br>• Não conseguir configurar,<br>• Não gostar do resultado,<br>• Ou simplesmente mudar de ideia…`,
        `<b>Eu devolvo 100% do seu dinheiro — sem perguntas.</b>`,
        `E ainda te deixo ficar com o <b>Guia de Frases</b> e o <b>acesso ao Grupo VIP</b>.`,
        `Justo? 😊`,
        `{button:🛡️ Quero Garantia + Meus Arquivos}`
      ]
    },

    {
      cond: /preço|quanto|valor|custa|investimento/,
      seq: [
        `O investimento é de <b>apenas R$47</b> — menos que um combo de fast food.`,
        `E ele vende pra você <b>para sempre</b>.`,
        `Além disso, você leva:<br>• Tutorial em PDF<br>• Guia de frases<br>• Grupo VIP<br>• Suporte direto comigo`,
        `{button:💰 Garantir por R$47}`
      ]
    },

    {
      cond: /garantia|devolução|reembolso|seguro/,
      seq: [
        `Sim, {nomeLead}! <b>Garantia de 7 dias, incondicional.</b>`,
        `Se não funcionar pra você, devolvo seu dinheiro na hora — sem burocracia.`,
        `E você ainda fica com os bônus. Não tem risco nenhum.`,
        `{button:✅ Quero Garantia + Meu ChatBot}`
      ]
    }
  ]
};
