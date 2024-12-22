---
markmap:
  maxWidth: 300
  initialExpandLevel: 2
  htmlParser:
    selector: h1,h2,h3,ul,ol,li,table,pre
---

# **GE TAVARES AWS**

GE TAVARES v13 

## **1.0 Computação**

### 1.1 Amazon EC2

- **Amazon EC2**  oferece a plataforma de computação mais ampla e profunda, com mais de 500 instâncias e opções de processador, armazenamento, redes, sistema operacional e modelo de compra mais recentes para te ajudar a atender melhor às necessidades da sua workload.

 - Infraestrutura como serviço (é uma das ofertas mais populares da AWS)

 
  - **(EC2)** - Aluguel de máquinas virtuais
  **(ELB)**   - Distribuição de carga entre máquinas 
  **(ASG)**   - Escalando os serviços usando um grupo de dimensionamento automático


### 1.2 EC2 Global View
- Permite que você visualize alguns dos seus recursos do Amazon EC2 e do Amazon VPC em uma única região da AWS ou em várias regiões em um único console. 
 - O Amazon EC2 Global View também fornece funcionalidade de pesquisa global que permite que você pesquise recursos específicos, como :  

   - Grupos de dimensionamento automático
   - Reservas de capacidade e blocos de capacidade
   - Conjunto de opções DHCP
   -Gateways de internet somente de saída
   - IPs elásticos
   - Serviços de endpoint
   - Instâncias
   - Portais de internet
   - Listas de prefixos gerenciadas
   - Portais NAT
   -ACLs de rede
   - Interfaces de rede
   - Tabelas de rotas
   - Grupos de segurança
   - Sub-redes
   - VPCs
   - Pontos de extremidade VPC
   - Conexões de peering VPC

### 1.2 AWS Lambda

- Execute código sem se preocupar com servidores ou clusters.
- Não há cobrança quando seu código não está em execução. Você pode executar código para praticamente qualquer tipo de aplicativo ou serviço de backend 
  

### 1.3 AWS Batch

- Serviço que ajuda a executar cargas de trabalho em lote na nuvem de forma eficiente e econômica

### 1.4 AWS Auto Scaling

- Serviço que monitora seus aplicativos e recursos automaticamente para manter a disponibilidade ideal

### 1.5 AWS Elastic Beanstalk

- Serviço que facilita o provisionamento e gerenciamento de recursos da AWS para aplicativos web
   - é ideal para desenvolvedores que querem executar seu código (aplicativos web) sem se preocupar com infraestrutura, mas ainda mantendo o controle sobre a configuração. A maioria dos aplicativos web geralmente segue a mesma arquitetura: um Load Balancer e um Auto Scaling Group. 


### 1.6 AWS Amazon Linux
-  é um portfólio de sistemas operacionais modernos de alto desempenho baseados em Linux, focados em segurança e estáveis.
### 1.7 AWS Amazon Lightsail
- O Lightsail inclui os recursos necessários para iniciar projetos rapidamente: instâncias (servidores virtuais privados), bancos de dados gerenciados, armazenamento de objetos, balanceadores de carga, distribuições de rede de entrega de conteúdo (CDN), etc
### 1.8 AWS Local Zone
- coloca os principais serviços dos seus aplicativos mais próximos dos seus usuários.
- 
### 1.8 AWS Outposts

- Solução que permite executar serviços da AWS em seu próprio data center

### 1.7 AWS SAR (Serverless Application Repository)

- Descubra, implante e publique aplicativos sem servidor

### 1.8 AWS para VMware

- Migre e otimize suas workloads baseadas em VMware para a AWS

### 1.9 AWS Wavelength

- Serviço que permite criar aplicativos com baixa latência para dispositivos 5G

## **1.1 Contêineres**

### 1.1.1 Elastic Container Service (ECS)
- é um serviço de gerenciamento de contêineres altamente escalável e rápido que facilita a execução, a interrupção e o gerenciamento de contêineres em um cluster.

### 1.1.2 Amazon Elastic Container Registry (ECR)

- Armazene, compartilhe e implante facilmente seu software de contêiner em qualquer lugar

### 1.1.3 Amazon Elastic Kubernetes Service (EKS)

- A maneira mais confiável de iniciar, executar e escalar o Kubernetes

### 1.1.4 Amazon EKS Anywhere

- Criação e operação de clusters do Kubernetes em sua própria infraestrutura

### 1.1.5 Amazon EKS Distro

- Distribuição de código aberto do Kubernetes a partir da AWS.

### 1.1.6 AWS Fargate

- Computação sem servidor para contêineres

### 1.1.7 AWS Copilot

- Foi projetado para usuários ECS novos e existentes que desejam ir além do gerenciamento manual de infraestrutura e começar a pensar em seu aplicativo e ciclo de vida. 
- O AWS Copilot cria distribuições modernas de aplicativos com base em configurações prontas para produção que incluem melhores práticas recomendadas por engenheiros do ECS.

## **2.0 Análise de Dados**

### 21.1 Amazon Athena

- Serviço de consulta interativa que facilita a análise de dados no Amazon S3 usando SQL padrão.

### 2.2 Amazon QuickSight

- Serviço de business intelligence (BI) na nuvem que permite criar e publicar painéis e visualizações de dados.

### 2.3 Amazon OpenSearch Service

- Serviço de pesquisa e análise distribuído e de alto desempenho derivado do Elasticsearch

### 2.4 Amazon EMR

- Serviço de cluster gerenciado para processamento de big data usando frameworks open source como Apache Spark, Hadoop, Presto, Flink
   Que permite processar e analisar grandes volumes de dados de forma escalável usando estruturas de código aberto, como Hadoop e Spark.

### 2.5 AWS Glue
-  1.Serviço **ETL** para preparação de dados. 
-  2.Serviço de integração de dados totalmente gerenciado que prepara e carrega dados para análise 
- é uma ferramenta da Amazon que permite criar, gerenciar e automatizar processos **ETL (Extract, Transform, Load)**, simplificando o trabalho de integrar dados de várias fontes para análise e armazenamento em data lakes ou data warehouses.
- **ETL significa Extração, Transformação e Carga** (do inglês Extract, Transform, Load)
  
### 2.6 AWS Glue DataBrew
  - é um serviço de preparação de dados oferecido pela AWS que permite aos usuários limpar e transformar dados visualmente, sem necessidade de código. Ele é uma ferramenta ideal para profissionais que precisam organizar, formatar e limpar dados antes de usá-los em análise ou aprendizado de máquina. 
  
### 2.7 Amazon Kinesis

- Plataforma de streaming de dados que facilita a captura, processamento e análise de dados de streaming em tempo real

### 2.7 Amazon Managed Streaming for Apache Kafka (Amazon MSK)

- Serviço gerenciado para Apache Kafka que facilita a construção e execução de aplicativos de streaming de dados

### 2.8 AWS Lake Formation

- Governe, proteja e compartilhe dados de forma centralizada para análise e aprendizado de máquina

### 2.9 Amazon Redshift

- Solução de data warehouse rápida, simples e econômica para análise de dados usando SQL padrão

### 2.10 AWS Data Exchange

- Serviço de mercado de dados na nuvem que facilita a descoberta, assinatura e uso de dados de terceiros


## **3.0 Integração de Aplicativo/Aplicações Empresariais**

### 3.1 Amazon AppFlow

- Serviço de integração totalmente gerenciado que transfere dados com segurança entre aplicações SaaS e serviços da AWS

### 3.2 AWS AppSync

- Cria APIs GraphQL e Pub/Sub com tecnologia sem servidor para simplificar o desenvolvimento de aplicações

### 3.3 Amazon EventBridge

- Crie aplicações orientadas por eventos em escala na AWS, sistemas existentes ou aplicações SaaS

### 3.4 Amazon MQ

- Serviço de agente de mensagens gerenciado para Apache ActiveMQ e RabbitMQ

### 3.5 Amazon SNS

- Serviço de mensagens totalmente gerenciado para coordenação de comunicações entre sistemas, serviços e dispositivos

### 3.6 Amazon SQS

- Serviço de filas de mensagens totalmente gerenciado que permite desacoplar e escalar microserviços, sistemas distribuídos e aplicativos sem servidor

### 3.7 AWS Step Functions

- Serviço que permite coordenar componentes distribuídos de aplicativos usando máquinas de estado visual

### 3.8 Amazon Simple Email Service (Amazon SES)

- Serviço de e-mail econômico e escalável para envio e recebimento de e-mails

### 3.9 Amazon Connect

- Serviço de centro de contato baseado em nuvem que facilita o gerenciamento de operações de atendimento ao cliente

## **4.0 Gerenciamento financeiro da nuvem**

### 4.1 AWS Budgets

- Ferramenta para definir orçamentos personalizados e receber alertas quando os custos ou uso excedem o orçamento

### 4.2 AWS CUR

- Ferramenta que fornece um único relatório detalhado sobre seus custos e uso da AWS

### 4.3 AWS Cost Explorer

- Ferramenta que fornece visualizações e análises dos custos e uso da AWS ao longo do tempo

### 4.4 Savings Plans

- Modelo de preço flexível que reduz a fatura em até 72% em comparação com os preços sob demanda, comprometendo-se com gastos por hora durante um período de um ou três anos

### 4.5 AWS Billing Conductor

- Ferramenta que simplifica o gerenciamento de custos e faturamento para provedores de software na nuvem

### 4.6 Savings Plans Purchase Analyzer
- Agora vai ficar mais fácil planejar e otimizar seus custos
     - (**Antes: Era preciso analisar manualmente históricos de uso, calcular compromissos e criar projeções, ou seja, era mais no braço)** 
   Você vai poder simular cenários ajustando valores por hora, analisar períodos personalizados e excluir Savings Plans expirando (pra não ficar aquela simulação errada que às vezes acontecia nas sugestões). via console,


## **5.0 Banco de Dados**

### 5.0 Amazon Aurora DSQL (re:Invent 24)
-  é um banco de dados serverless (distribuído sem servidor) compatível com PostgreSQL, projetado para escalabilidade automática e disponível em múltiplas 
  regiões com alta resiliência e desempenho.
  Particularmente interessante para implantações multirregionais que exigem forte consistência  
  - Ideal para aplicações modernas que exigem simplicidade, escalabilidade e confiabilidade
  
### 5.1 Amazon Aurora

- Banco de dados relacional compatível com MySQL e PostgreSQL, combinando desempenho e disponibilidade
  
### 5.2 Amazon Aurora Serverless V2 Scale to 0 
- Este recurso reduz significativamente o custo de execução de bancos de dados para aplicativos com cargas de trabalho variáveis ​​ou intermitentes, os custos do banco de dados durante períodos de baixo tráfego

### 5.3 Amazon DocumentDB (compatível com MongoDB)

- Banco de dados de documentos JSON nativo totalmente gerenciado para operar workloads de documentos essenciais em qualquer escala

### 5.4 Amazon DynamoDB

- Banco de dados NoSQL chave-valor totalmente gerenciado para aplicações sem servidor
  
### 5.5 Amazon DynamoDB ( multi AZs)

- tabelas globais multi-Região consistência forte - Até agora, as tabelas globais do DynamoDB sempre usaram consistência eventual. Agora você pode executar leituras fortemente consistentes em regiões da AWS.

### 5.6 Amazon ElastiCache

- Serviço de cache sem servidor, compatível com Redis, para performance em tempo real e com custo otimizado

### 5.7 Amazon ElastiCache versão 8.0 para Valkey
  - Melhor escalabilidade e otimização de memória se traduzem em desempenho mais consistente e menores custos operacionais. Para soluções SaaS que exigem acesso a dados em tempo real — como mecanismos de personalização, armazenamentos de sessão ou tabelas de classificação de jogos — dimensionamento mais rápido significa tempos de resposta e confiabilidade aprimorados.


### 5.8 Amazon Keyspaces (for Apache Cassandra)

- Serviço de banco de dados compatível com Apache Cassandra, escalável, altamente disponível e gerenciado

### 5.9 Amazon Neptune

- Serviço de banco de dados de grafo totalmente gerenciado e de alta performance

### 5.10 Amazon Quantum Ledger Database (Amazon QLDB)

- Banco de dados ledger totalmente gerenciado que fornece um log de transações transparente, imutável e criptograficamente verificável

### 5.11 Amazon RDS

- Serviço de banco de dados relacional gerenciado para PostgreSQL, MySQL, MariaDB, Oracle e SQL Server

### 5.12 Amazon Timestream

- Serviço de banco de dados rápido e escalável para workloads de séries temporais


## **6.0 DEV +Web/FRONT-END Plataformas móveis e Web + MÍDIA**

### 6.1 Amazon API Gateway

- Serviço gerenciado que permite criar, publicar, manter, monitorar e proteger APIs em qualquer escala
- Ajuda os desenvolvedores a criar e gerenciar APIs em sistemas back-end em execução no Amazon EC2, no AWS Lambda ou em qualquer serviço da web endereçável publicamente
- é possível gerar SDKs personalizados para suas APIs para conectar 

### 6.2 AWS X-Ray

- Analise e depure aplicações de produção e distribuídas

### 6.3 AWS Amplify

- Ferramenta para criar aplicações móveis e para a Web

### 6.4 Amazon Pinpoint

- Conecte-se com os clientes por meio de comunicação multicanais escaláveis e direcionadas

### 6.5 Amazon Elastic Transcoder

- Transcodificação de mídia na nuvem, convertendo arquivos de mídia para diversos dispositivos

### 6.6 AWS Device Farm

- Aprimore a qualidade das suas aplicações móveis e Web ao realizar testes em navegadores e dispositivos móveis reais na Nuvem AWS

## **7.0 MACHINE LEARNING services**

### 7.0  Amazon Augmented AI (Amazon A2I) 
- Permite que você realize uma análise humana de sistemas de machine learning (ML) para garantir a precisão. 
Implemente análises e auditorias humanas de previsões de ML com base em seus requisitos específicos, incluindo vários revisores.

### 7.1 Amazon Bedrock
-   é um serviço totalmente gerenciado que oferece várias opções de modelos de base (FMs) de alta performance das principais empresas de IA, como AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI e Amazon, por meio de uma única API, além de um amplo conjunto de recursos necessários para criar aplicações de IA generativa com segurança,

### 7.2 Amazon Comprehend
- Deriva e entende insights valiosos a partir do texto dentro de documentos


### 7.3 AWS DeepLens
- Descrição: Câmera de aprendizado profundo com integração ao AWS.
Funcionalidades: Permite a implementação de modelos de visão computacional para reconhecimento de imagens e vídeo.

### 7.4 Amazon Fraud Detector
- Detecte fraudes online com mais rapidez com machine learning 
é um serviço totalmente gerenciado que permite aos clientes identificar atividades potencialmente fraudulentas e detectar mais fraudes online com mais rapidez.

### 7.5 Amazon Forecast
- Preveja resultados de negócios com facilidade e precisão usando machine learning

### 7.6 AWS Glue DataBrew
- Ferramenta para preparar e limpar dados.Facilita a transformação de dados para uso em análises e modelos de ML.
- Permitem que **desenvolvedores e cientistas de dados** criem e implementem soluções de IA em larga escala, beneficiando-se da infraestrutura e escalabilidade da AWS.


### 7.7 Amazon Kendra
- pesquisa corporativa inteligente baseada em machine learning. 
 Facilitam os funcionários encontrar as informações de que precisam no momento certo dento da empresa.


### 7.8 Amazon Lex
- Crie bots e implante interfaces de IA conversacionais
(crie interface de voz e texto perfeitas)

### 7.9 Amazon Polly
- Implante vozes humanas de alta qualidade e som natural em dezenas de idiomas
(Os casos incluem : aplicativos móveis, como leitores de notícias, jogos, eLearning plataformas, aplicativos de acessibilidade para pessoas com deficiência visual e o segmento em rápido crescimento da Internet das Coisas (IoT).)

### 7.10 Amazon Personalize
- Serviço para criar recomendações personalizadas. Usado para gerar recomendações de produtos, conteúdo e personalizações em tempo real.

### 7.11 Amazon Q
- O assistente baseado em **IA** generativa para acelerar o desenvolvimento de software e otimizar os dados internos das empresas

- **Amazon Q Business** assistente baseado em **IA generativa** que pode responder a perguntas, fornecer resumos, gerar conteúdo e concluir tarefas de maneira segura com base em dados e informações nos seus sistemas corporativos.

- **Amazon Q Developer**
auxilia **desenvolvedores** em todas as suas tarefas, desde codificar, testar e atualizar aplicações até diagnosticar erros, realizar verificações e correções de segurança e otimizar os recursos da AWS. Tem recursos avançados de planejamento e(por exemplo, realizar atualizações de versão do Java)

### 7.12 Amazon Rekognition
- Automatize e reduza o custo de reconhecimento de imagem e análise de vídeo com machine learning (portao de minha casa)

### 7.13 Amazon SageMaker 
- Crie, treine e implante modelos de machine learning para qualquer caso de uso com infraestrutura, ferramentas e fluxos de trabalho totalmente gerenciados

### 7.14 Amazon Textract
- Extraia automaticamente texto impresso, manuscrito, elementos de layout e dados de qualquer documento

### 7.15 Amazon Transcribe
- Converta automaticamente voz em texto e obtenha insights

### 7.16 Amazon Translate
- Tradução automática fluente e precisa


### 7.17 AWS Panorama
- Serviço para análise de vídeo em dispositivos locaispython sao_paulo_fc_tracker.py
.
Usado para processamento de vídeo em tempo real em dispositivos conectados à rede local. 

### 7.18 Amazon DevOps Guru para RDS
- é um serviço com a tecnologia de machine learning (ML), disponível para todos os mecanismos do Amazon Relational Database Service (RDS), que ajuda a facilitar melhorias na performance operacional e na disponibilidade de uma aplicação
- é um recurso baseado em ML, projetado para capacitar desenvolvedores e engenheiros de DevOps a detectar, diagnosticar e corrigir rapidamente uma grande variedade de problemas relacionados a bancos de dados no Amazon RDS


## **8.0 GERENCIAMENTO E GOVERNANÇA**

### 8.1 AWS Service Catalog

- Crie, compartilhe, organize e governe seus modelos de IaC selecionados

### 8.2 AWS Systems Manager

- Automatize tarefas de operações e gerenciamento de TI comuns e repetitivas em várias contas e regiões da AWS

### 8.3 AWS Trusted Advisor

- analisa seu ambiente AWS e fornece recomendações de práticas recomendadas em **5 categorias:**
- **Cinco categorias** :Otimização de custos, Desempenho, Segurança, Tolerância a falhas, Limites de serviço.
- **((OC +D+S+TF+ LS))**


### 8.4 AWS Well-Architected Tool
- Melhore suas workloads ao revisar suas workloads atuais e obter recomendações para suas workloads na Nuvem AWS

### 8.5 AWS Config

- Ferramenta para avaliar, auditar e avaliar a configuração de recursos na AWS

### 8.6 AWS CloudTrail

-**((API DEDO DURO))** Registre, monitore e retenha a atividade da conta relacionada a ações em toda a infraestrutura da AWS, OU SEJA,é um serviço de auditoria e monitoramento... 

### 8.7 AWS Control Tower

- Construa rapidamente um ambiente multi-conta e estabeleça um centro de operações de segurança e conformidade

### 8.8 AWS Organizations

- Gerencie, governe e audite facilmente o uso, as atividades e a conformidade em um ambiente de várias contas

### 8.9 AWS CloudFormation

- Crie, forneça e gerencie recursos da AWS e de terceiros por meio de arquivos de modelos declarativos

### 8.10 AWS Resource Access Manager

- Gerencie e compartilhe recursos da AWS entre contas e organizações

### 8.11 AWS License Manager

- Simplifique o gerenciamento de licenças para seus produtos Microsoft, Oracle e de outros provedores

### 8.12 AWS Managed Services

- Melhore a operação, o suporte e a segurança de seus aplicativos na AWS com serviços gerenciados, ou seja, é um serviço que oferece gerenciamento totalmente gerenciado da infraestrutura na nuvem da AWS, incluindo monitoramento, segurança e conformidade.

### 8.13 AWS Proton

- Orquestre o desenvolvimento e o lançamento de aplicações baseadas em contêineres e sem servidor

### 8.14 AWS Backup

- Proteja suas aplicações e dados com backups centralizados e automáticos

### 8.15 AWS Marketplace

- Encontre, teste, compre e implante softwares que são executados na AWS

### 8.16 Amazon CloudWatch

- Monitore, colete e acompanhe métricas, registros e eventos em seus recursos da AWS e aplicações

## **9.0 MIGRAÇÃO E TRANSFERÊNCIA**

### 9.1 AWS Migration Hub

- Rastreie o progresso das migrações de aplicações de várias soluções da AWS e de parceiros em um único local

### 9.2 AWS Server Migration Service

- Serviço de migração de servidores que facilita a migração de cargas de trabalho locais para a AWS

### 9.3 AWS Snow Family

- Serviços para transferir grandes quantidades de dados para a Nuvem AWS de forma segura e econômica

### 9.4 AWS Transfer Family

- Transferência de arquivos gerenciada com suporte para SFTP, FTPS e FTP

### 9.5 AWS Application Migration Service (MGN)

- Serviço que permite migrar facilmente servidores físicos, virtuais e baseados na nuvem para a AWS.é usado para coletar informações sobre os recursos de TI em ambientes locais para fins de planejamento de migração para a nuvem.

### 9.6 AWS Database Migration Service (DMS)

- Migração de bancos de dados relacionais, NoSQL e de data warehouses

### 9.7 AWS DataSync
- Serviço de transferência de dados para automatizar a movimentação de dados entre locais locais e a Nuvem AWS
- 
## **10.0.1 VPC**

### 10.0.1.1 VPC:
- nuvem privada virtual

### 10.0.1.1 VPC Endpoints: 
- forneça acesso privado aos serviços da AWS dentro do VPC
Logs de fluxo de VPC: logs de tráfego de rede

### 10.0.1.2 Sub-redes: 
- Vinculadas a uma AZ, partição de rede da VPC 
- Uma sub-rede é um intervalo de enderenços IP em sua VPC.
- Cada sub-rede deve residir dentro de uma ZD e nao pode estender em varias AZ(s)

### 10.0.1.3 Grupos de segurança:
- stateful, operam no nível da instância EC2 ou ENI.

### 10.0.1.4 Gateway de Internet: 
- No nível da VPC, fornece acesso à Internet.
- Fornecer um dostino nas tabelas de rotas da sua VPC.
- Realizar a tradução de endereços da rede(NAT)para instancias que receberam endereço IPv4 públicos. 

### 10.0.1.5 Gateway / Instâncias NAT: 
- fornece acesso à Internet para sub-redes privadas.

### 10.0.1.6 NACL: 
- regras de sub-rede sem estado para entrada e saída.

### 10.0.1.7 Transit Gateway: 
- conecte milhares de redes VPC e locais /Conecte suas VPCs, redes locais e serviços da AWS usando uma única gateway.

### 10.0.1.8 Peering de VPC: 
- conecte duas VPC com intervalos de IP não sobrepostos, não transitivos

### 10.0.1.9 Site to Site VPN: 
- VPN pela Internet pública entre DC local e AWS

### 10.0.1.10 Direct Connect
- ((Rede dedicada)) Criar uma conexão de rede dedicada para a AWS
- (é o caminho mais curto para seus recursos na AWS. Seu tráfego de rede permanece todo o tempo na rede global da AWS e nunca entra na Internet pública.)
  
## **10.0 IDENTIDADE E ACESSO + REDE/NETWORKING**

### 10.01 Ferramentas de Gerenciamentos.

 - Via Console
 - CLI (intervalo de linhas de comandos)
 - SDKs (Kits de desenvolvimentos de sofware da AWS)

### 10.02 AWS Identity and Access Management (IAM)

- Controle de acesso e gerenciamento de permissões para recursos da Nuvem AWS

### 10.03 AWS Single Sign-On (SSO)

- Serviço que permite gerenciar o acesso a várias contas da AWS e aplicações empresariais

### 10.04 Amazon CloudFront

- Serviço de CDN (Content Delivery Network) para distribuição de conteúdo de baixa latência e alta transferência

### 10.05 Amazon Route 53

- Serviço de(DNS e roteamento global).escalável e altamente disponível

### 10.06 AWS Global Accelerator
- Serviço que melhora a disponibilidade e performance das aplicações com base na Nuvem AWS

### 10.07 AWS WAN

- Rede global totalmente gerenciada que facilita a construção, o gerenciamento e a operação de uma rede de área ampla (WAN) privada

### 10.08 AWS PrivateLink

- Serviço que permite acessar os serviços da AWS e de terceiros de forma segura


### 10.09 AWS Network Firewall

- Serviço de firewall gerenciado para proteção e controle do tráfego de rede

### 10.10 Amazon Inspector

- Serviço de análise de segurança automatizada que avalia a exposição, as vulnerabilidades e as não conformidades das workloads da AWS

### 10.11 AWS WAF

- Firewall  ,é um firewall de aplicações Web que ajuda a proteger suas aplicações Web ou APIs *contra bots e exploits comuns* na Web que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos em excesso.

### 10.12 AWS Shield

- Serviço de proteção contra **DDoS** protege seus aplicativos na Nuvem AWS 

- **AWS Shield Advanced** é um **serviço PAGO** que fornece diagnósticos detalhados de ataques e a capacidade de detectar e mitigar ataques. Oferece algumas opções a mais como dashboard near-real-time e time de resposta a incidentes 24/7.

- O **AWS Shield Standard** protege automaticamente todos os clientes AWS **SEM NEHUM CUSTOS**.

### 10.13 AWS Firewall Manager

- Serviço que permite configurar e gerenciar regras de firewall em várias contas e aplicações da AWS

### 10.14 Amazon GuardDuty

- Serviço de detecção de ameaças que monitora atividades maliciosas e comportamentos anômalos para proteger suas contas, workloads e dados da AWS

### 10.15 AWS Directory Service

- Serviço que permite usar diretórios do Microsoft Active Directory para gerenciar acesso e permissões em seus recursos na Nuvem AWS.

## **11.STORAGE**

### 11.0 Amazon S3

- Serviço de armazenamento de objetos escalável e durável foi projetado para 99,999999999% (11 9's) de durabilidade de dados porque ele cria e armazena automaticamente cópias de todos os objetos S3 em vários sistemas

### 11.1 Amazon S3

- **BALDES** S3
- **OBJETOS** S3
- **VERSIONAMETO** S3
- **SEGURANÇA** S3

### 11.2 Amazon S3 CLASSES

- **S3 STANDARD** :Dados acessados com frequencias
- **S3 STANADRD IA**:custos mais baixos,sao acessados menos frequencias.
- **S3 INTELLIGENT TIERING**:ideal para usos de dados desconhecidos.
- **S3 ONE ZONE IA**:para DADOS pouco acessado.
- **S3 GLACIER** : arquivados
- **S3 GLACIER DEEP**: arquivados  e recuperar em 12 horas.
- **S3 OUTPOST** :Recurso e APIs de armazemanto de objetos
- **S3 Tables** e  **1 milhão de buckets por conta**(re:Invent 24)
   -  Ser capaz de criar mais buckets e atribuir metadados estruturados permite melhor isolamento e simplifica a organização de dados do cliente. 


### 11.3 Amazon EBS

- Serviço de armazenamento em bloco escalável e persistente para instâncias Amazon EC2

### 11.4 Amazon EFS

- Serviço de sistema de arquivos elástico para armazenamento de dados compartilhado

  
### 11.5 Amazon FSx

- Serviço de sistemas de arquivos totalmente gerenciados para aplicativos empresariais e HPC (High-Performance Computing)

### 11.6 AWS Storage Gateway

- Serviço de integração de armazenamento híbrido que facilita a conexão de seus ambientes locais à Nuvem AWS
  
### 11.7 AWS Backup

- Serviço de backup e recuperação centralizado e automatizado para proteger dados

### 11.8 Amazon Data Lifecycle Manager (DLM)

- Serviço de gerenciamento automatizado de ciclo de vida de snapshots do Amazon EBS

### 11.9 AWS Transfer Family

- Serviço de transferência de arquivos gerenciado com suporte para SFTP, FTPS e FTP

## **12.0 SEGURANÇA + GOVERNANÇA**

### 12.0 MFA 
- MFA (( SEGUNDA PERNA ))   (OTP)328
-  é uma camada de segurança extra no seu(MFA),no seu ambiente. Ao acessar um site da AWS, um usuário com a MFA habilitada deve informar o nome de usuário e a senha (o primeiro fator, que o usuário conhece) e uma resposta de autenticação do seu dispositivo de MFA (o segundo fator, que o usuário tem).

### 12.1 AWS Certificate Manager (ACM)

- Serviço que facilita a obtenção, implantação e gerenciamento de certificados SSL/TLS para seus sites e aplicações na Nuvem AWS

### 12.2 AWS Artifact
- fornece um recurso central para AWS **relatórios de segurança e conformidade**. Os artefatos disponíveis em Organizacional de Serviços (SOC), relatórios do Setor de Cartões de Pagamento (PCI)

### 12.3 Amazon Inspector

- (avaliação de vulnerabilidades).
  Serviço de análise de segurança automatizada que avalia a exposição, as **vulnerabilidades** e as não conformidades das workloads da AWS

### 12.4 AWS KMS

- Serviço de gerenciamento de chaves que facilita a criação e o controle das chaves de criptografia usadas para proteger seus dados

### 12.5 AWS Secrets Manager

- Serviço de gerenciamento de segredos que permite proteger e gerenciar segredos para acessar seus recursos, aplicativos e serviços

### 12.6 Amazon GuardDuty

- Serviço de detecção de ameaças que monitora atividades maliciosas e comportamentos anômalos

### 12.7 Amazon Detective
- Analise e visualize dados de segurança para investigar possíveis problemas de segurança  

   - coleta automaticamente dados de log de seus recursos da AWS e usa machine learning (ML), análise estatística e teoria de grafos para criar um conjunto de dados que você pode usar para conduzir investigações de segurança mais eficientes.

### 12.8 AWS Macie

- Serviço de segurança de dados e privacidade que usa machine learning para descobrir, classificar e proteger dados confidenciais  P.I.I

### 12.9 AWS Secrets Manager

- você a gerenciar, recuperar e alternar credenciais de banco de dados, chaves de API e outros segredos ao longo de seus ciclos de vida.
- ajuda você a gerenciar o acesso a aplicações, serviços e recursos de TI.

## **13.0 DEVOPS**

### 13.0 Gerenciamento 

- AWS CodePipeline , CodeBuild , CodeDeploy

### 13.1 AWS Cloud9
- Um IDE de nuvem para escrever, executar e depurar códigos diretamente do navegador.

### 13.2 AWS CodeCommit

- Serviço de controle de versões totalmente gerenciado que hospeda repositórios Git privados

### 13.3 AWS CodeBuild .2

- Serviço de build totalmente gerenciado que compila código-fonte, executa testes e produz pacotes de software prontos para implantação

### 13.4 AWS CodeDeploy .3

- Serviço de implantação totalmente gerenciado que automatiza implantações de código para qualquer instância

### 13.5 AWS CodePipeline .1

- Serviço de entrega contínua que ajuda a automatizar seus pipelines de lançamento para implantação rápida e segura

### 13.6 AWS CodeStar

- Serviço que fornece um conjunto de ferramentas integrado para desenvolvimento, build e implantação de aplicativos na AWS

### 13.7 AWS X-Ray

- Serviço que permite depurar e analisar o comportamento de suas aplicações de produção distribuídas

### 13.8 AWS OpsWorks

- Serviço de automação de configuração que fornece configurações gerenciadas usando Chef ou Puppet

### 13.9 AWS Elastic Beanstalk

- Serviço de gerenciamento de aplicativos que facilita o provisionamento e a execução de aplicativos web

### 13.10 AWS AppRunner

- Serviço que facilita a criação e execução de aplicações web e APIs escaláveis e seguras, sem se preocupar com a infraestrutura

## **14.OBSERVABILIDADE- AWS**

### 14.1 CloudWatch

- Monitoramento de recursos AWS e aplicações.
- Logs: Armazenamento e consulta de logs.
- Metrics: Métricas personalizadas e automáticas.
  - Alarms: Configuração de alarmes para eventos críticos.
  - Dashboards: Painéis de visualização de métricas.

### 14.2 X-Ray
- Rastreamento de requisições de ponta a ponta.
  - Identificação de gargalos em aplicações distribuídas.
  - Análise de desempenho em microsserviços.
  - Suporte a aplicativos desenvolvidos em várias linguagens.

### 14.3 AWS Health Dashboard
- Painel de integridade personalizado.
  - **AWS Personal Health Dashboard**: Alertas e notificações sobre problemas que afetam os recursos do cliente.
  - **AWS Service Health Dashboard**: Status global dos serviços AWS.

### 14.4 AWS Config
- Monitoramento contínuo da conformidade.
  - Rastreamento de alterações de configuração.
  - Avaliação de recursos com regras predefinidas.

### 14.5 CloudTrail
- Auditoria e logs de atividade.
  - Registro de chamadas de API.
  - Suporte à segurança e conformidade.

### 14.6 Amazon Managed Grafana
- Visualização e análise de métricas.
  - Integração com CloudWatch, Prometheus e outras fontes de dados.

### 14.7 AWS Distro for OpenTelemetry
- Coleta de métricas, logs e rastreamentos.
  - Compatibilidade com OpenTelemetry.

### 14.8 Service Lens (CloudWatch)
- Visualização unificada de métricas, logs e rastreamentos.
  - Integração com X-Ray.
  - Diagnóstico de problemas em aplicações distribuídas.

### 14.9 Trusted Advisor
- Recomendações para otimização de custos, segurança e desempenho.
  - Insights para práticas recomendadas.

### 14.10 DevOps Guru
- Detecção de anomalias em aplicações.
  - Diagnóstico automatizado com Machine Learning.

### 14.11 Systems Manager
- Monitoramento e automação operacional.
  - AWS OpsCenter: Gerenciamento centralizado de operações.
  - AWS Application Manager: Monitoramento de estado de aplicações.

### 14.12 Elastic Load Balancer (ELB) Monitoring
- Monitoramento de desempenho do balanceamento de carga.
  - Integração com CloudWatch para métricas detalhadas.

### 14.13 VPC Flow Logs
- Monitoramento de tráfego de rede.
  - Armazenamento em S3 ou CloudWatch Logs.

### 14.15 Datadog (terceiro)
- Plataforma de observabilidade de aplicações em tempo real.
  - **Monitoramento de Infraestrutura**: Coleta de métricas de servidores, bancos de dados, e mais.
  - **APM (Application Performance Monitoring)**: Rastreamento de transações e monitoramento de desempenho.
  - **Log Management**: Armazenamento, análise e visualização de logs.
  - **Dashboards**: Visualização interativa de métricas e logs em tempo real.
  - **Alertas e Notificações**: Definição de alertas personalizados com base em métricas e logs.
  - **Integração com AWS**: Conexão direta com serviços da AWS como EC2, Lambda, S3, CloudWatch, entre outros.
 - **Integração datadog com Salesforce**: Monitoramento de logs e transações relacionadas ao Salesforce.


## **15.0 IoT ((Internet das Coisas))**

### 15.1 AWS IoT Core

- Serviço que permite conectar dispositivos IoT à nuvem.

### 15.2 AWS IoT Greengrass

- Implante e execute códigos nos seus dispositivos

### 15.3 AWS IoT Analytics

- Serviço de análise de dados de IoT .
Colete, pré-processe, armazene, analise e visualize dados de dispositivos de IoT

### 15.4 AWS IoT Device Management

- Serviço que facilita o gerenciamento de dispositivos IoT em escala,

### 15.5 AWS IoT Events

- Serviço que facilita a detecção e resposta a eventos de IoT

### 15.6 AWS IoT SiteWise

- Serviço que facilita a coleta, armazenamento e análise de dados de sensores industriais

### 15.7 AWS IoT Things Graph

- Serviço que facilita a criação de fluxos de trabalho de IoT para conectar dispositivos e serviços web

### 15.8 AWS IoT 1-Click

- Serviço que permite que dispositivos simples acionem funções AWS Lambda.

### 15.9 AWS FreeRTOS

- Sistema operacional de código aberto para microcontroladores que facilita a programação, implantação e gerenciamento de dispositivos IoT

## **16.0 OUTROS**

### 16.1 Quantum Technologies

- **Amazon Braket**
Serviço para explorar, avaliar e realizar testes com a computação quântica.

### 16.2 AWS Step Functions

- Serviço de orquestração que facilita a coordenação de múltiplos serviços da AWS em fluxos de trabalho complexos

### 16.3 Amazon Managed Blockchain

- Serviço totalmente gerenciado que facilita a criação e gerenciamento de redes blockchain escaláveis

### 16.4 AWS Ground Station

- Serviço totalmente gerenciado que facilita a comunicação com satélites e o processamento de dados de satélites

### 16.5 AWS RoboMaker

- Serviço que facilita o desenvolvimento, teste e implantação de aplicativos de robótica inteligentes

### 16.6 Amazon Honeycode

- Serviço que permite criar aplicativos móveis e web sem necessidade de escrever código.

## **17.0 CAPACITACAO DO CLIENTE**

### 17.1 Activate for Startups
- Fornece recursos para ajudar start-ups construirem e crescerem na AWS

### 17.2 AWS IQ
- Conclua projetos mais rapidamente com a ajuda de especialistas certificados pela AWS de terceiros

### 17.3 Managed Services
- Gerenciamento de operações de TI para a AWS


### 17.4 AWS re:Post Private
- Aumente a colaboração interna e a inovação por meio de um recurso de conhecimento em nuvem com curadoria.

### 17.5 Support
- Entre em contato com a AWS para suporte técnico e da conta.
- B.D.B.E   eles estarão como 
-Basic, Developer, Business e Enterprise.
(Básico, Desenvolvedor, Negócios e Empresarial).

- **Basic** não inclui acesso por chat nem chamadas telefônicas. 
-**Developer** não inclui acesso por chat nem chamadas telefônicas. Ele fornece suporte por e-mail somente durante o horário comercial.
-**Business** fornece acesso ininterrupto por telefone, e-mail e chat. Tem um tempo de resposta inferior a um hora/
-**Enterprise** fornece acesso ininterrupto por telefone, e-mail e chat. O plano tem um tempo de resposta inferior a 15 minutos caso Produção sofra uma interrupção de serviço.


## **18.0  [GE-Artificial-Intelligence (IA)](https://rogtavares.github.io/A.I.GE-Artificial-Intelligence/)**

## **19.0 Salesforce**  ***( VEJA GE TAVARES Salesforce)***

## **20.0 FIM Gé Tavares**

- Você conhece Laranjal Paulista?
  Nasci lá, sabia !

# **GE TAVARES Salesforce**

## **Serviços para CRM, automação e integrações empresariais**

### **1.1. Principais Salesforce via Nuvem**  
1. ![#3498db](https://via.placeholder.com/15/3498db/000000?text=+) **Salesforce Service Cloud**: Gerenciamento de suporte ao cliente.  
2. ![#e74c3c](https://via.placeholder.com/15/e74c3c/000000?text=+) **Salesforce Sales Cloud**: Ferramentas de vendas e automação de processos comerciais.  
3. ![#2ecc71](https://via.placeholder.com/15/2ecc71/000000?text=+) **Salesforce Marketing Cloud**: Automação de marketing e campanhas personalizadas.  
4. ![#f1c40f](https://via.placeholder.com/15/f1c40f/000000?text=+) **Salesforce Experience Cloud**: Plataformas para portais e comunidades.  
5. ![#8e44ad](https://via.placeholder.com/15/8e44ad/000000?text=+) **Salesforce Commerce Cloud**: Soluções para e-commerce.  

### **1.2. Inteligência e Analytics**  
6. ![#34495e](https://via.placeholder.com/15/34495e/000000?text=+) **Einstein Analytics**: Relatórios e análises com IA.  
7. ![#9b59b6](https://via.placeholder.com/15/9b59b6/000000?text=+) **Tableau**: Visualização e análise avançada de dados.  

### **1.3. Desenvolvimento e Integração**  
8. ![#1abc9c](https://via.placeholder.com/15/1abc9c/000000?text=+) **MuleSoft**: Integração de APIs e gerenciamento de integrações com Salesforce e AWS.  
9. ![#e67e22](https://via.placeholder.com/15/e67e22/000000?text=+) **Heroku**: Desenvolvimento e hospedagem de aplicações escaláveis.  

### **1.4. Segurança e Compliance**  
10. ![#c0392b](https://via.placeholder.com/15/c0392b/000000?text=+) **Salesforce Shield**: Segurança e monitoramento de compliance.  
11. ![#2c3e50](https://via.placeholder.com/15/2c3e50/000000?text=+) **Monitorar eventos de uso total da API**: Controle de limites de uso e otimização.  

### **1.5. Integração com AWS**  
12. ![#2980b9](https://via.placeholder.com/15/2980b9/000000?text=+) **Integração com S3**: Armazenamento de dados em nuvem.  
13. ![#27ae60](https://via.placeholder.com/15/27ae60/000000?text=+) **Conexão com Lambda**: Automações serverless.  
14. ![#8e44ad](https://via.placeholder.com/15/8e44ad/000000?text=+) **Integração com Datadog**: Monitoramento detalhado.  

  
GE TAVARES V20