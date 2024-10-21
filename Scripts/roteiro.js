const IMAGE_PATH = "./Imagens";

let yes_button = document.getElementById("yes-button");
let no_button = document.getElementById("no-button");

let current_slide = 0;

main();

function main()
{
  change_slide();
}

function trigger_anim(element, custom_delay)
{
  element.hidden = true;
  no_button.hidden = true;
  yes_button.hidden = true;

  setTimeout(() => {
    element.hidden = false;
    if (element.id == "buttons")
    {
        no_button.hidden = false;
        yes_button.hidden = false;
    }
    element.animate(
      [
        {
          visibility: "visible",
          opacity: 0,
        },
        {
          visibility: "visible",
          opacity: 1,
        },
      ],
      {
        duration: 2000,
        fill: "forwards",
      }
    );
  }, custom_delay)

}

function animations_timeline()
{
  let header = document.getElementById("header");
  let conteudo = document.getElementById("conteudo");
  let image = document.getElementById("stitch-image");
  let buttons = document.getElementById("buttons");

  trigger_anim(header, 0);
  trigger_anim(conteudo, 1000);
  trigger_anim(image, 2000);

  no_button.hidden = true;
  yes_button.hidden = true;
  trigger_anim(buttons, 3000);

}

function next_slide(image_content, title_text, text_content)
{
  let title = document.getElementById("main-title");
  let slide_text = document.getElementById("slide-text");

  let slide_image = document.getElementById("stitch-image");

  animations_timeline();  

  slide_image.src = image_content;

  title.textContent = title_text;
  title.innerHTML = title.innerHTML.replace(/\r\n?/g, "<br />");

  slide_text.textContent = text_content;
  slide_text.innerHTML = slide_text.innerHTML.replace(/\r\n?/g, '<br />');
}

function yes_action()
{
  if (current_slide < 10) current_slide++;
  change_slide();
  no_button.style.position = null;
}

function no_action()
{
    var x = Math.random() * (window.innerWidth - no_button.offsetWidth);
    var y = Math.random() * (window.innerHeight - no_button.offsetHeight);

    no_button.style.position = "absolute";
    no_button.style.left = `${x}px`;
    no_button.style.top = `${y}px`;
}

function change_slide()
{
  switch (current_slide) {
    case 0:
      next_slide(
        `${IMAGE_PATH}/stitch-buraco.png`,
        "Formulário de Adoção",
        "Este formulário é destinado a pessoas interessadas a adotar um Stitch.\r\n\r\nDeseja continuar?"
      );
      break;

    case 1:
      next_slide(
        `${IMAGE_PATH}/smart-stitch.png`,
        "Mas antes! Precisamos que responda algumas perguntas…",
        "Isso é de extrema importância para sabermos se os seus valores pessoais são compatíveis com o do nosso pequeno e fofo Stitch 😉"
      );
      break;

    case 2:
      next_slide(
        `${IMAGE_PATH}/stitch-guitar.webp`,
        "Você é fã de música?",
        "Stitch é fascinado nisso! Sempre que pode, Stitch está tocando o seu ukulele. Assim, ele precisa saber: \r\n\r\nPromete ouvir, cantar e dançar músicas junto com o seu Stitch?"
      );
      break;

    case 3:
      next_slide(
        `${IMAGE_PATH}/Stitch-ice-cream.webp`,
        "Sabe cozinhar bem?",
        "O Stitch é MUITO GULOSO! Pode não parecer pelo tamanho dele, mas o quanto de comida que cabe naquela barriguinha… é de se espantar!\r\n\r\nPromete que quando Stitch estiver com fome, você o alimentará e o acompanhará durante a refeição?\r\n\r\n(Obs: Ele disse que talvez vai querer aprender a cozinhar também)"
      );
      break;

    case 4:
      next_slide(
        `${IMAGE_PATH}/Stitch-tricycle.webp`,
        "Gosta de diversão?",
        "O Stitch AMA se divertir! Seja com piadas, aventuras malucas, ou até mesmo cosquinhas, Stitch ainda possui aquele espírito de criança.\r\n\r\nPromete brincar com ele de maneira saudável e alegre?"
      );
      break;

    case 5:
      next_slide(
        `${IMAGE_PATH}/Stitch-book.webp`,
        "És uma pessoa culta?",
        "Pode não parecer, mas o Stitch gosta muito de ler livros e aprender sobre coisas novas!\r\n\r\nVocê promete estudar e curiar por aí junto com ele?"
      );
      break;

    case 6:
      next_slide(
        `${IMAGE_PATH}/Stitch-angel.webp`,
        "Por último, mas não menos importante...\r\nStitch adora receber carinho!",
        "Afinal, quem não gosta de receber um chameguinho né?\r\n\r\nEstás ciente de que o Stitch têm um grande coração e que, sempre que possível, ele gostaria de receber demonstrações de amor e carinho?"
      );
      break;

    case 7:
      next_slide(
        `${IMAGE_PATH}/Stitch-Cute.png`,
        "Hora da revelação!",
        "Espere a resposta do atendente à frente...."
      );
      break;
    
      case 8:
      next_slide(
        `${IMAGE_PATH}/Stitch-nerd.webp`,
        "Qual o resultado?",
        null
      );

      no_button.onclick = () => {
         current_slide = 10;
         change_slide();
         no_button.style.position = null;
      };
      break;

      case 9:
      next_slide(
        `${IMAGE_PATH}/stitch-love.png`,
        "Parabéns! Muito feliz pelos dois!!!",
        "Você é uma pessoa muito especial ❤️"
      );
      no_button.remove();
      yes_button.remove();
      break;

      case 10:
      next_slide(
        `${IMAGE_PATH}/stitch-triste.png`,
        "Não tem problema! Quem sabe numa próxima?",
        null
      );
      no_button.remove();
      yes_button.remove();
      break;
  }
}
