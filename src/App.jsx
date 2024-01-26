import Button from "./Components/Button";
import Conteudo from "./Components/Card";
import style from "./style/app.module.css";
import imgVivaz from "./assets/albumVivaz.jpg";
import imgRevel from "./assets/albumRevel.jpg";
import imgAudaz from "./assets/albumAudaz.jpg";
import imgImaterial from "./assets/Imaterial.jpg";
import imgLume from "./assets/albumLume.jpg";

function App() {
  return (
    <>
      {/* servindo para centralizar o titulo*/}
      <div className={style.box}>
        <h1>Conhecendo Props - Exercício 2</h1>
        <Button btnText="Acesse os álbuns" />
      </div>

      <Conteudo
        color="#C4B7A6"
        title="Álbum VIVAZ (2012)"
        albumImg={imgVivaz}
        description="Hoje, nesta mesma data, em 20 de Dezembro de 2012, era lançado o álbum
          “VIVAZ” do Filipe Ret. 
          O álbum que marcou a carreira do artista, trouxe grandes faixas
          como “Neurótico de Guerra”, faixa que hoje, acumula mais de 113
          milhões de visualizações no YouTube e se tornou um hit na época, sendo
          reproduzida em todos os cantos do Rio de janeiro e do Brasil.
          
          O álbum chegou às ruas com 10 Faixas, contando também com as
          participações de Daniel Shadow, Nocivo Shomon e Funkero, além do
          Mãolee na produção, o trabalho foi lançado oficialmente pela TuduBom
          Records, colocando os artistas em um outro nível.
          
          “VIVAZ”, foi o segundo álbum da carreira de Filipe Ret, sendo
          considerado por muitos fãs, um dos, ou o melhor álbum do artista até
          hoje."
      />

      <Conteudo
        color="#DDDBCF"
        title="Álbum REVEL (2015) "
        albumImg={imgRevel}
        description="Filipe Ret, cria do TTK (Catete), é um rapper ambicioso e quer o mundo. Mas uma vez ele prova isso em seus sons e sua capacidade absurda de aumentar/cativar o público. Ele foi um dos poucos que conseguiram ”bombar” eu um curto espaço de tempo e conseguir não apenas um ouvinte mas um fã de alguém que não escuta rap.

        Depois do trabalho Numa Margem Distante e Vivaz, Revel traz uma evolução musical e a presença forte de sua raiz e seu estilo músical; dualidades filosóficas, vagabundagem vivenciada na rua e eu lírico.
        O próprio Filipe falou este trabalho é continuação do Vivaz, ” espírito vivaz, alma revel, corpo libertino ”, e com certeza esse álbum será o verdadeiro impulso para a carreira do Ret entrar no âmbito de main stream brasileiro no que tange todos os estilos musicais , e com isso melhora a visão conservadora e preconceituosa brasileira sobre o rap, que alias está dominando o mundo musicalmente falando."
      />

      <Conteudo
        color="#BF9035"
        title="Álbum AUDAZ (2018) "
        albumImg={imgAudaz}
        description="Um dos principais nomes do rap carioca e um dos fenômenos da cena nacional, Filipe Ret prepara o passo mais ousado de sua carreira com o lançamento de “Audaz”, seu terceiro álbum solo e primeira vez que ele assume a produção musical do disco.

        Após muita expectativa e mistério, Filipe Ret completa, nesta sexta-feira (17/08), uma trilogia. Após os álbuns “Vivaz” (2012) e “Revel” (2015), o rapper carioca apresenta “Audaz”, que traz 13 faixas. Sem perder sua identidade, Ret se inspira em grandes nomes do hip-hop internacional e traz ainda referências do samba e do funk em seu novo trabalho, que tem produção musical do próprio rapper ao lado de Dallass e Mãolee. O álbum, que sai pela Som Livre e Tudubom Records, traz participações de Marcelo D2, Flora Matos, MC Deise, BK’ e TH."
      />

      <Conteudo
        color="#F43928"
        title="EP IMATERIAL (2021)"
        albumImg={imgImaterial}
        description="Em comunicado de imprensa, Ret explica o conceito e suas inspirações para o EP Imaterial: 'O projeto representa o portal (presente na arte da capa) para o mundo imaterial. Mundo onde as coisas não são as coisas em si. Mundo dos bastidores deste mundo visível. A realidade é consequência do mundo imaterial. Os maiores desejos e os maiores sonhos são oriundos do nosso mundo intocável, do nosso imaterial. Ele rege tudo. Cabe a nós mantermos nosso mundo imaterial forte para concretizarmos nossas realizações. Esta força no mundo imaterial é o que chamamos no mundo externo de fé, declara.[5]

        O conceito audiovisual do projeto aposta em uma unidade de linguagem potente, levando os fãs para uma experiência imersiva dentro do portal para o mundo Imaterial, criado por Filipe Ret. Além dos videoclipes de 'F*F*M*' e 'War', as demais canções da primeira edição do EP, 'Cobaia de Deus', 'Acende a Vela' e 'Além do Dinheiro'"
      />

      <Conteudo
        color="#0663B2"
        title="Álbum LUME (2022)"
        albumImg={imgLume}
        description="“No escuro, toda luz afronta”. É dessa maneira que Filipe Ret sintetiza o seu novo trabalho, intitulado LUME. Expondo uma realidade sem retoques, o artista carioca entrega um álbum que tem o trap como sonoridade base, mas também se mescla ao funk e recebe até influências do axé. LUME soma 11 faixas e conta com participações de Anitta, L7NNON, Poze do Rodo, entre outros.
        “O conceito do álbum “LUME” é inspirado na luz interior dos cria de todas as quebradas do mundo e é uma celebração do momento que o trap vive, principalmente o carioca. Em LUME, Filipe Ret não apenas evoca sobre os acontecimentos da vida real, sem filtros, mas também induz a um questionamento que guia esse momento: “Até que ponto a gente recebe uma luz e até que ponto a gente é a própria luz?”."
      />
    </>
  );
}

export default App;
