# Micro-frontends

Este projeto consiste em um site para visualizar vídeos e salvar favoritos utilizando aplicações micro-frontend:

1. **MF_DRAWER**: Esta aplicação contém dois links principais, VÍDEOS e FAVORITOS.
2. **MF_VIDEOS**: Esta aplicação permite a busca e listagem de vídeos utilizando a API do YouTube. Além disso, permite a reprodução de vídeos e a marcação de vídeos como favoritos.

## Funcionalidades
- **Busca de Vídeos:** Os usuários podem buscar vídeos usando termos específicos que serão utilizados para buscar vídeos na API do YouTube.
- **Reprodução de Vídeos:** Os usuários podem reproduzir vídeos diretamente na aplicação.
- **Favoritos:** Os usuários podem marcar vídeos como favoritos, e esses vídeos serão listados na seção FAVORITOS.
- **Contador de Favoritos:** O contador de vídeos favoritos é atualizado automaticamente quando um vídeo é adicionado ou removido da lista de favoritos.

## Desenho da arquitera
![image](https://github.com/zedaoxd/micro-frontends/assets/55067151/34d78b05-5cdd-4584-8dac-502954dfe5c7)

## Instruções para Rodar o Projeto

#### Pré-requisitos (docker)
- Docker instalado em sua máquina.
- Docker Compose instalado.

```sh
# Faça o clone do projeto
git clone https://github.com/zedaoxd/micro-frontends.git

# entre na pasta
cd micro-frontends

# rode a aplicação com o docker
docker-compose up --build
```

esse comando já sobe todos serviços, front e back

| Serviço     | URL      |
|----------------|----------------|
| BFF | localhost://4000 |
| MFContainer | localhost://3000 |
| MFVideos | localhost://3001 |
| MFDrawer | localhost://3002 |


#### Pré-requisitos (local)
- Node 20.15 LTS
- NestJs

```sh
# Faça o clone do projeto
git clone https://github.com/zedaoxd/micro-frontends.git

# entre na pasta do bff
cd micro-frontends/bff

# rode o bff com o comando (disponível em localhost://4000)
npm run start:dev

# entre na pasta do MF Drawer
cd ../mf_drawer

# rode o MFDrawer com o comando (disponível em localhost://3002)
npm run dev

# entre na pasta do MF Videos
cd ../mf_videos

# rode o MFVideos com o comando (disponível em localhost://3001)
npm run dev

# por fim entre na pasta do container
cd .. mf_container

# e rode com o comando (disponível em localhost://3000)
npm run dev
```

## Rotas do BFF
```sh
# buscar videos
GET /videos?search=:search

# buscar videos favoritos
GET /videos/favorites

# verificar se um video é favorito
GET /videos/favorites/:id

# quantos videos tem favoritados
GET /videos/count

# marcar/desmarcar um video como favorito
POST /videos/favorites/:id
```

## Imagens
![image](https://github.com/zedaoxd/micro-frontends/assets/55067151/6f55a8b9-f8c8-4d76-b7ff-a705ddc6ef77)
![image](https://github.com/zedaoxd/micro-frontends/assets/55067151/e5ea291a-99b3-4dc8-9f23-0260e91a8897)
![image](https://github.com/zedaoxd/micro-frontends/assets/55067151/2427bad7-5bfd-4faa-a46f-0bc2b6ebf4a8)
![image](https://github.com/zedaoxd/micro-frontends/assets/55067151/d6de6651-3804-4a4d-bb5d-e573dfaf9316)



