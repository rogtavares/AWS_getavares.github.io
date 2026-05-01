// Dados extraídos do seu Markdown (categorias e serviços)
const dados = [
  {
    categoria: 'Rede Global de Regiões da AWS',
    servicos: [
      {nome: 'Infraestrutura Global da AWS', url: 'https://aws.amazon.com/pt/about-aws/global-infrastructure/'},
      {nome: 'Regiões e Zonas de Disponibilidade', url: 'https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/'},
      {nome: 'Mapa Interativo da Infraestrutura Global', url: 'https://infrastructure.aws/'},
      {nome: 'AWS Local Zones', url: 'https://aws.amazon.com/about-aws/global-infrastructure/localzones/'},
      {nome: 'AWS Wavelength', url: 'https://aws.amazon.com/wavelength/'},
      {nome: 'AWS Outposts', url: 'https://aws.amazon.com/outposts/'}
    ],
    descricao: 'A Nuvem AWS abrange 120 Zonas de Disponibilidade em 38 Regiões geográficas, com planos anunciados para mais 10 Zonas de Disponibilidade e mais 3 Regiões da AWS no Reino da Arábia Saudita, no Chile e na Nuvem Soberana Europeia da AWS. Atualizado em fevereiro de 2026.'
  },
  {
    categoria: 'Análise de Dados',
    servicos: [
      {nome: 'Amazon Redshift', url: 'https://aws.amazon.com/redshift/'},
      {nome: 'Amazon Athena', url: 'https://aws.amazon.com/athena/'},
      {nome: 'Amazon QuickSight', url: 'https://aws.amazon.com/quicksight/'},
      {nome: 'AWS Glue', url: 'https://aws.amazon.com/glue/'},
      {nome: 'Amazon EMR', url: 'https://aws.amazon.com/emr/'},
      {nome: 'Amazon OpenSearch Service', url: 'https://aws.amazon.com/opensearch-service/'},
      {nome: 'Amazon Kinesis', url: 'https://aws.amazon.com/kinesis/'},
      {nome: 'Managed Apache Flink', url: 'https://aws.amazon.com/managed-flink/'},
      {nome: 'AWS Lake Formation', url: 'https://aws.amazon.com/lake-formation/'},
      {nome: 'Amazon MSK', url: 'https://aws.amazon.com/msk/'}, // Mantido apenas Amazon MSK
      {nome: 'AWS Glue DataBrew', url: 'https://aws.amazon.com/glue/features/databrew/'},
      {nome: 'Amazon FinSpace', url: 'https://aws.amazon.com/finspace/'},

      {nome: 'AWS Clean Rooms', url: 'https://aws.amazon.com/clean-rooms/'},
      {nome: 'Amazon SageMaker', url: 'https://aws.amazon.com/sagemaker/'},
      {nome: 'AWS Entity Resolution', url: 'https://aws.amazon.com/entity-resolution/'},
      {nome: 'Amazon Data Firehose', url: 'https://aws.amazon.com/data-firehose/'},
      {nome: 'Amazon DataZone', url: 'https://aws.amazon.com/datazone/'},
      {nome: 'Amazon Managed Workflows for Apache Airflow', url: 'https://aws.amazon.com/mwaa/'}, // nome oficial
      {nome: 'AWS B2B Data Interchange', url: 'https://aws.amazon.com/b2b-data-interchange/'},
      {nome: 'AWS Data Exchange', url: 'https://aws.amazon.com/data-exchange/'}
      // Removidos: duplicidades de MSK, Grafana, Prometheus e serviços que não existem oficialmente como produto AWS
    ]
  },
  {
    categoria: 'Aplicativos Empresariais',
    servicos: [
      {nome: 'Amazon Connect', url: 'https://aws.amazon.com/connect/'},
      {nome: 'Amazon Chime', url: 'https://aws.amazon.com/chime/'},
      {nome: 'Amazon Simple Email Service (SES)', url: 'https://aws.amazon.com/ses/'},
      {nome: 'Amazon WorkDocs', url: 'https://aws.amazon.com/workdocs/'},
      {nome: 'Amazon WorkMail', url: 'https://aws.amazon.com/workmail/'},

      {nome: 'Amazon Pinpoint', url: 'https://aws.amazon.com/pinpoint/'},
      {nome: 'Amazon One Enterprise', url: 'https://aws.amazon.com/one-enterprise/'},
      {nome: 'AWS Wickr', url: 'https://aws.amazon.com/wickr/'},
      {nome: 'AWS AppFabric', url: 'https://aws.amazon.com/appfabric/'},
      {nome: 'AWS End User Messaging', url: 'https://aws.amazon.com/end-user-messaging/'},
      {nome: 'AWS Supply Chain', url: 'https://aws.amazon.com/aws-supply-chain/'}
    ]
  },
  {
    categoria: 'Armazenamento',
    servicos: [
      {nome: 'Amazon S3', url: 'https://aws.amazon.com/pt/s3/'},
      {nome: 'Amazon EFS', url: 'https://aws.amazon.com/pt/efs/'},
      {nome: 'Amazon FSx', url: 'https://aws.amazon.com/pt/fsx/'},
      {nome: 'Amazon S3 Glacier', url: 'https://aws.amazon.com/pt/s3/glacier/'},
      {nome: 'AWS Backup', url: 'https://aws.amazon.com/pt/backup/'},
      {nome: 'AWS Storage Gateway', url: 'https://aws.amazon.com/pt/storagegateway/'},
      {nome: 'AWS Elastic Disaster Recovery', url: 'https://aws.amazon.com/pt/disaster-recovery/'},
      {nome: 'Amazon S3 Object Lambda', url: 'https://aws.amazon.com/s3/features/object-lambda/'},
      {nome: 'Amazon S3 Intelligent-Tiering', url: 'https://aws.amazon.com/s3/storage-classes/intelligent-tiering/'},
      {nome: 'Amazon S3 Storage Lens', url: 'https://aws.amazon.com/pt/s3/storage-lens/'},
      {nome: 'Amazon S3 Vector', url: 'https://aws.amazon.com/pt/s3/features/vectors/'},
      {nome: 'Amazon EBS', url: 'https://aws.amazon.com/ebs/'},
      {nome: 'AWS Snowball', url: 'https://aws.amazon.com/snowball/'},
      {nome: 'AWS Snowcone', url: 'https://aws.amazon.com/snowcone/'},
      {nome: 'AWS Snowmobile', url: 'https://aws.amazon.com/snowmobile/'},
      {nome: 'Amazon S3 on Outposts', url: 'https://aws.amazon.com/s3/outposts/'}
    ]
  },
  {
    categoria: 'Banco de Dados',
    servicos: [
      {nome: 'Amazon Aurora & RDS', url: 'https://aws.amazon.com/rds/'},
      {nome: 'Amazon Aurora DSQL', url: 'https://aws.amazon.com/rds/aurora/dsql/'},
      {nome: 'Amazon Aurora Limitless Database', url: 'https://aws.amazon.com/rds/aurora/limitless/'},
      {nome: 'Amazon DynamoDB', url: 'https://aws.amazon.com/dynamodb/'},
      {nome: 'Amazon ElastiCache', url: 'https://aws.amazon.com/elasticache/'},
      {nome: 'Amazon Neptune', url: 'https://aws.amazon.com/neptune/'},
      {nome: 'Amazon QLDB', url: 'https://aws.amazon.com/qldb/'},
      {nome: 'Amazon DocumentDB', url: 'https://aws.amazon.com/documentdb/'},
      {nome: 'Amazon Keyspaces', url: 'https://aws.amazon.com/keyspaces/'},
      {nome: 'Amazon Timestream', url: 'https://aws.amazon.com/timestream/'},
      {nome: 'Amazon MemoryDB', url: 'https://aws.amazon.com/memorydb/'},
      {nome: 'Amazon RDS on Outposts', url: 'https://aws.amazon.com/rds/outposts/'},
      {nome: 'Amazon RDS Proxy', url: 'https://aws.amazon.com/rds/proxy/'},
      {nome: 'Amazon RDS Custom', url: 'https://aws.amazon.com/rds/custom/'},
      {nome: 'Amazon RDS Performance Insights', url: 'https://aws.amazon.com/rds/performance-insights/'},
      {nome: 'Amazon RDS Multi-AZ', url: 'https://aws.amazon.com/rds/features/multi-az/'},
      {nome: 'Amazon RDS Read Replicas', url: 'https://aws.amazon.com/rds/features/read-replicas/'},
      {nome: 'Amazon RDS Data API', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html'},
      {nome: 'Amazon RDS IAM Database Authentication', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html'},
      {nome: 'Amazon RDS Enhanced Monitoring', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html'}
    ]
  },
  {
    categoria: 'Capacitação do Cliente',
    servicos: [
    {nome: 'AWS Marketplace', url: 'https://aws.amazon.com/marketplace/'},
    {nome: 'AWS re:Post', url: 'https://repost.aws/'},
      {nome: 'AWS IQ', url: 'https://aws.amazon.com/iq/'},
      {nome: 'AWS Managed Services', url: 'https://aws.amazon.com/managed-services/'},
      {nome: 'AWS Activate para Startups', url: 'https://aws.amazon.com/activate/'},
      {nome: 'AWS Support', url: 'https://aws.amazon.com/support/'}
    ]
  },
  {
    categoria: 'Certificações AWS',
    servicos: [
      {nome: 'Todas as Certificações AWS', url: 'https://aws.amazon.com/pt/certification/'},
      {nome: 'Cursos Gratuitos - Skill Builder', url: 'https://skillbuilder.aws/'},
      {nome: 'Guia de Certificações PDF', url: 'https://d1.awsstatic.com/pt_BR/training-and-certification/docs/AWS_certification_paths.pdf'},
      {nome: 'Agendar Exames', url: 'https://home.pearsonvue.com/aws'},
      {nome: 'AWS Training and Certification', url: 'https://aws.amazon.com/training/'}
    ]
  },
  {
    categoria: 'Computação',
    servicos: [
      {nome: 'Amazon EC2', url: 'https://aws.amazon.com/pt/ec2/'},
      {nome: 'AWS Lambda', url: 'https://aws.amazon.com/pt/lambda/'},
      {nome: 'Amazon Lightsail', url: 'https://aws.amazon.com/pt/lightsail/'},
      {nome: 'AWS Elastic Beanstalk', url: 'https://aws.amazon.com/pt/elasticbeanstalk/'},
      {nome: 'AWS Batch', url: 'https://aws.amazon.com/pt/batch/'},
      {nome: 'AWS Batch on EKS', url: 'https://aws.amazon.com/batch/eks/'},
      {nome: 'AWS Outposts', url: 'https://aws.amazon.com/pt/outposts/'},
      {nome: 'Amazon EC2 Spot Instances', url: 'https://aws.amazon.com/pt/ec2/spot/'},
      {nome: 'AWS Auto Scaling', url: 'https://aws.amazon.com/autoscaling/'},
      {nome: 'AWS Serverless Application Repository', url: 'https://aws.amazon.com/pt/serverless/serverlessrepo/'},
      {nome: 'EC2 Image Builder', url: 'https://aws.amazon.com/pt/image-builder/'},
      {nome: 'AWS App Runner', url: 'https://aws.amazon.com/pt/apprunner/'},
      {nome: 'AWS Step Functions', url: 'https://aws.amazon.com/step-functions/'},
      {nome: 'AWS ParallelCluster', url: 'https://aws.amazon.com/hpc/parallelcluster/'},
      {nome: 'AWS SimSpace Weaver', url: 'https://aws.amazon.com/simspace-weaver/'},
      {nome: 'AWS Wavelength', url: 'https://aws.amazon.com/wavelength/'},
      {nome: 'AWS Local Zones', url: 'https://aws.amazon.com/about-aws/global-infrastructure/localzones/'},
      {nome: 'AWS Nitro System', url: 'https://aws.amazon.com/ec2/nitro/'},
      {nome: 'AWS Graviton', url: 'https://aws.amazon.com/ec2/graviton/'},
      {nome: 'AWS Thinkbox Deadline', url: 'https://aws.amazon.com/thinkbox-deadline/'},
      {nome: 'AWS Thinkbox Frost', url: 'https://aws.amazon.com/thinkbox-frost/'},
      {nome: 'AWS Thinkbox Krakatoa', url: 'https://aws.amazon.com/thinkbox-krakatoa/'},
      {nome: 'AWS Thinkbox Sequoia', url: 'https://aws.amazon.com/thinkbox-sequoia/'},
      {nome: 'AWS Thinkbox Stoke', url: 'https://aws.amazon.com/thinkbox-stoke/'},
      {nome: 'AWS Thinkbox XMesh', url: 'https://aws.amazon.com/thinkbox-xmesh/'},
      {nome: 'Amazon EC2 C8g Instances', url: 'https://aws.amazon.com/ec2/instance-types/c8g/'},
      {nome: 'Amazon EC2 M8g Instances', url: 'https://aws.amazon.com/ec2/instance-types/m8g/'},
      {nome: 'Amazon EC2 R8g Instances', url: 'https://aws.amazon.com/ec2/instance-types/r8g/'},
      {nome: 'AWS Lambda Response Streaming', url: 'https://aws.amazon.com/lambda/'},
      {nome: 'AWS Deadline Cloud', url: 'https://aws.amazon.com/deadline-cloud/'}
    ],
    descricao: 'Serviços de computação escaláveis para executar aplicações na nuvem, desde servidores virtuais até computação serverless.'
  },
  {
    categoria: 'Computação de Usuário Final',
    servicos: [
      {nome: 'Amazon AppStream 2.0', url: 'https://aws.amazon.com/appstream2/'},
      {nome: 'Amazon DCV', url: 'https://docs.aws.amazon.com/pt_br/dcv/?icmpid=docs_homepage_euc'},
      {nome: 'Amazon WorkSpaces', url: 'https://aws.amazon.com/workspaces/'},
      {nome: 'Amazon WorkSpaces Secure Browser', url: 'https://aws.amazon.com/workspaces/web/'},
      {nome: 'Amazon WorkSpaces Thin Client', url: 'https://aws.amazon.com/workspaces/thin-client/'}
    ]
  },
  {
    categoria: 'Desenvolvimento de Jogos',
    servicos: [
      {nome: 'Amazon GameLift', url: 'https://aws.amazon.com/gamelift/'},
      {nome: 'AWS GameKit', url: 'https://aws.amazon.com/gamekit/'},
      {nome: 'Amazon Lumberyard', url: 'https://aws.amazon.com/lumberyard/'}
    ]
  },
  {
    categoria: 'Ferramentas do Desenvolvedor',
    servicos: [
      {nome: 'AWS CodePipeline', url: 'https://aws.amazon.com/codepipeline/'},
      {nome: 'AWS CodeCommit', url: 'https://aws.amazon.com/codecommit/'},
      {nome: 'AWS CodeBuild', url: 'https://aws.amazon.com/codebuild/'},
      {nome: 'AWS CodeDeploy', url: 'https://aws.amazon.com/codedeploy/'},
      {nome: 'AWS Cloud9', url: 'https://aws.amazon.com/cloud9/'},
      {nome: 'AWS CloudShell', url: 'https://aws.amazon.com/cloudshell/'},
      {nome: 'AWS CodeArtifact', url: 'https://aws.amazon.com/codeartifact/'},
      {nome: 'Amazon CodeCatalyst', url: 'https://aws.amazon.com/codecatalyst/'},
      {nome: 'AWS AppConfig', url: 'https://aws.amazon.com/appconfig/'},
      {nome: 'Amazon Q Developer', url: 'https://aws.amazon.com/q/developer/'},
      {nome: 'AWS CodeStar', url: 'https://aws.amazon.com/codestar/'},
      {nome: 'AWS Fault Injection Service', url: 'https://aws.amazon.com/fis/'},
      {nome: 'AWS Console to Code', url: 'https://aws.amazon.com/console-to-code/'},
      {nome: 'AWS Command Line Interface (CLI)', url: 'https://aws.amazon.com/cli/'},
      {nome: 'AWS Serverless Application Model (SAM)', url: 'https://aws.amazon.com/serverless/sam/'},
      {nome: 'AWS SDKs e Ferramentas', url: 'https://aws.amazon.com/tools/'}
    ]
  },
  {
    categoria: 'Desenvolvimento Web & Mobile',
    servicos: [
      {nome: 'AWS Amplify', url: 'https://aws.amazon.com/amplify/'},
      {nome: 'Amazon API Gateway', url: 'https://aws.amazon.com/api-gateway/'},
      {nome: 'AWS AppSync', url: 'https://aws.amazon.com/appsync/'},
      {nome: 'AWS Device Farm', url: 'https://aws.amazon.com/device-farm/'}
    ]
  },
  {
    categoria: 'Integração de Aplicativos',
    servicos: [
      {nome: 'Amazon EventBridge', url: 'https://aws.amazon.com/eventbridge/'},
      {nome: 'Amazon Simple Queue Service (SQS)', url: 'https://aws.amazon.com/sqs/'},
      {nome: 'Amazon Simple Notification Service (SNS)', url: 'https://aws.amazon.com/sns/'},
      {nome: 'Amazon MQ', url: 'https://aws.amazon.com/amazon-mq/'},
      {nome: 'AWS Step Functions', url: 'https://aws.amazon.com/step-functions/'},
      {nome: 'Amazon AppFlow', url: 'https://aws.amazon.com/appflow/'}
    ],
    descricao: 'Serviços para conectar aplicativos desacoplados e microsserviços usando mensagens e eventos.'
  },
  {
    categoria: 'Low-Code/No-Code',
    servicos: [
      {nome: 'AWS Application Composer', url: 'https://aws.amazon.com/application-composer/'},
      {nome: 'AWS Amplify Studio', url: 'https://aws.amazon.com/amplify/studio/'}
    ],
    descricao: 'Ferramentas para criar aplicações rapidamente com pouco ou nenhum código, democratizando o desenvolvimento.'
  },
  {
    categoria: 'Gerenciamento e Governança',
    servicos: [
      {nome: 'Amazon CloudWatch', url: 'https://aws.amazon.com/cloudwatch/'},
      {nome: 'Amazon Data Lifecycle Manager', url: 'https://docs.aws.amazon.com/pt_br/dlm/?icmpid=docs_homepage_mgmtgov'},
      {nome: 'AWS Auto Scaling', url: 'https://aws.amazon.com/autoscaling/'},
      {nome: 'AWS CloudFormation', url: 'https://aws.amazon.com/cloudformation/'},
      {nome: 'AWS Compute Optimizer', url: 'https://aws.amazon.com/compute-optimizer/'},
      {nome: 'AWS Config', url: 'https://aws.amazon.com/config/'},
      {nome: 'AWS Control Tower', url: 'https://aws.amazon.com/controltower/'},
      {nome: 'AWS Incident Manager', url: 'https://aws.amazon.com/systems-manager/incident-manager/'},
      {nome: 'AWS Launch Wizard', url: 'https://aws.amazon.com/launchwizard/'},
      {nome: 'AWS License Manager', url: 'https://aws.amazon.com/license-manager/'},
      {nome: 'AWS OpsWorks', url: 'https://aws.amazon.com/opsworks/'},
      {nome: 'AWS Organizations', url: 'https://aws.amazon.com/organizations/'},
      {nome: 'AWS Proton', url: 'https://aws.amazon.com/proton/'},
      {nome: 'AWS Resource Explorer', url: 'https://aws.amazon.com/resource-explorer/'},
      {nome: 'AWS Resource Groups & Tag Editor', url: 'https://aws.amazon.com/resource-groups/'},
      {nome: 'AWS Resilience Hub', url: 'https://aws.amazon.com/resilience-hub/'},
      {nome: 'AWS Service Catalog', url: 'https://aws.amazon.com/servicecatalog/'},
      {nome: 'AWS Service Quotas', url: 'https://aws.amazon.com/servicequotas/'},
      {nome: 'AWS Systems Manager', url: 'https://aws.amazon.com/systems-manager/'},
      {nome: 'AWS Telco Network Builder', url: 'https://aws.amazon.com/tnb/'},
      {nome: 'AWS Trusted Advisor', url: 'https://aws.amazon.com/premiumsupport/trustedadvisor/'},
      {nome: 'AWS User Notifications', url: 'https://aws.amazon.com/notifications/'},
      {nome: 'AWS Well-Architected Tool', url: 'https://aws.amazon.com/well-architected-tool/'},
      {nome: 'AWS Health Dashboard', url: 'https://health.aws.amazon.com/'},
      {nome: 'AWS Console Mobile Application', url: 'https://aws.amazon.com/console/mobile/'},
      {nome: 'AWS Chatbot', url: 'https://aws.amazon.com/chatbot/'}
    ]
  },
  {
    categoria: 'Infraestrutura como Código',
    servicos: [
      {nome: 'AWS CloudFormation', url: 'https://aws.amazon.com/cloudformation/'},
      {nome: 'AWS CDK', url: 'https://aws.amazon.com/cdk/'}
    ]
  },
  {
    categoria: 'Internet das Coisas (IoT)',
    servicos: [
      {nome: 'AWS IoT Analytics', url: 'https://aws.amazon.com/iot-analytics/'},
      {nome: 'AWS IoT Device Defender', url: 'https://aws.amazon.com/iot-device-defender/'},
      {nome: 'AWS IoT TwinMaker', url: 'https://aws.amazon.com/iot-twinmaker/'},
      {nome: 'AWS IoT Greengrass', url: 'https://aws.amazon.com/greengrass/'},
      {nome: 'AWS IoT Core', url: 'https://aws.amazon.com/iot-core/'},
      {nome: 'AWS IoT Device Management', url: 'https://aws.amazon.com/iot-device-management/'},
      {nome: 'AWS IoT Events', url: 'https://aws.amazon.com/iot-events/'},
      {nome: 'AWS IoT SiteWise', url: 'https://aws.amazon.com/iot-sitewise/'},
      {nome: 'AWS IoT FleetWise', url: 'https://aws.amazon.com/iot-fleetwise/'}
    ]
  },
  {
    categoria: 'Java & SDKs',
    servicos: [
      {nome: 'Amazon Corretto', url: 'https://docs.aws.amazon.com/pt_br/corretto/?icmpid=docs_homepage_devtools'}
    ]
  },
  {
    categoria: 'Machine Learning',
    servicos: [
      {nome: 'Amazon SageMaker AI', url: 'https://aws.amazon.com/sagemaker/'},
      {nome: 'Amazon SageMaker Studio', url: 'https://aws.amazon.com/sagemaker/studio-lab/'},
      {nome: 'Amazon Augmented AI', url: 'https://aws.amazon.com/augmented-ai/'},
      {nome: 'Amazon CodeGuru', url: 'https://aws.amazon.com/codeguru/'},
      {nome: 'Amazon DevOps Guru', url: 'https://aws.amazon.com/devops-guru/'},
      {nome: 'Amazon Comprehend', url: 'https://aws.amazon.com/comprehend/'},
      {nome: 'Amazon Forecast', url: 'https://aws.amazon.com/forecast/'},
      {nome: 'Amazon Fraud Detector', url: 'https://aws.amazon.com/fraud-detector/'},
      {nome: 'Amazon Kendra', url: 'https://aws.amazon.com/kendra/'},
      {nome: 'Amazon Personalize', url: 'https://aws.amazon.com/personalize/'},
      {nome: 'Amazon Polly', url: 'https://aws.amazon.com/polly/'},
      {nome: 'Amazon Rekognition', url: 'https://aws.amazon.com/rekognition/'},
      {nome: 'Amazon Textract', url: 'https://aws.amazon.com/textract/'},
      {nome: 'Amazon Transcribe', url: 'https://aws.amazon.com/transcribe/'},
      {nome: 'Amazon Translate', url: 'https://aws.amazon.com/translate/'},
      {nome: 'AWS DeepComposer', url: 'https://aws.amazon.com/deepcomposer/'},
      {nome: 'AWS DeepRacer', url: 'https://aws.amazon.com/deepracer/'},
      {nome: 'AWS Panorama', url: 'https://aws.amazon.com/panorama/'},
      {nome: 'Amazon Monitron', url: 'https://aws.amazon.com/monitron/'},
      {nome: 'Amazon Lookout for Vision', url: 'https://aws.amazon.com/lookout-for-vision/'},
      {nome: 'Amazon Lookout for Equipment', url: 'https://aws.amazon.com/lookout-for-equipment/'},
      {nome: 'Amazon Lookout for Metrics', url: 'https://aws.amazon.com/lookout-for-metrics/'},
      {nome: 'Amazon Q Business', url: 'https://aws.amazon.com/q/business/'},
      {nome: 'AWS HealthOmics', url: 'https://aws.amazon.com/healthomics/'},
      {nome: 'Amazon Bedrock', url: 'https://aws.amazon.com/bedrock/'},
      {nome: 'Amazon Bedrock Studio', url: 'https://aws.amazon.com/bedrock/studio/'},
      {nome: 'Amazon Nova', url: 'https://aws.amazon.com/nova/'},
      {nome: 'Amazon Bedrock AgentCore', url: 'https://aws.amazon.com/pt/bedrock/agentcore/'},
      {nome: 'Amazon Bedrock Agents', url: 'https://aws.amazon.com/bedrock/agents/'},
      {nome: 'Amazon Bedrock Guardrails', url: 'https://aws.amazon.com/bedrock/guardrails/'},
      {nome: 'Amazon Bedrock Knowledge Bases', url: 'https://aws.amazon.com/bedrock/knowledge-bases/'},
      {nome: 'Amazon Bedrock Model Evaluation', url: 'https://aws.amazon.com/bedrock/model-evaluation/'},
      {nome: 'Amazon Bedrock Prompt Management', url: 'https://aws.amazon.com/bedrock/prompt-management/'},
      {nome: 'Amazon Q', url: 'https://aws.amazon.com/q/'},
      {nome: 'Amazon Q Apps', url: 'https://aws.amazon.com/q/apps/'},
      {nome: 'Amazon Comprehend Medical', url: 'https://aws.amazon.com/comprehend/medical/'},
      {nome: 'Amazon Lex', url: 'https://aws.amazon.com/lex/'},
      {nome: 'AWS AI League', url: 'https://aws.amazon.com/pt/ai/aileague/'},
      {nome: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer/'},
      {nome: 'AWS Inferentia', url: 'https://aws.amazon.com/machine-learning/inferentia/'},
      {nome: 'AWS Trainium', url: 'https://aws.amazon.com/machine-learning/trainium/'},
      {nome: 'AWS HealthOmics', url: 'https://aws.amazon.com/healthomics/'},
      {nome: 'AWS Neuron', url: 'https://aws.amazon.com/machine-learning/neuron/'},
      {nome: 'Amazon Machine Learning', url: 'https://aws.amazon.com/machine-learning/'},
      {nome: 'AWS Deep Learning AMIs', url: 'https://aws.amazon.com/machine-learning/amis/'},
      {nome: 'AWS Deep Learning Containers', url: 'https://aws.amazon.com/machine-learning/containers/'}
    ]
  },
  {
    categoria: 'Migração e Transferência',
    servicos: [
      {nome: 'AWS Migration Hub', url: 'https://aws.amazon.com/migration-hub/'},
      {nome: 'Application Migration Service', url: 'https://aws.amazon.com/application-migration-service/'},
      {nome: 'Application Discovery Service', url: 'https://aws.amazon.com/application-discovery/'},
      {nome: 'Database Migration Service', url: 'https://aws.amazon.com/dms/'},
      {nome: 'AWS Transfer Family', url: 'https://aws.amazon.com/aws-transfer-family/'},
      {nome: 'AWS Snow Family', url: 'https://aws.amazon.com/snow/'},
      {nome: 'DataSync', url: 'https://aws.amazon.com/datasync/'},
      {nome: 'AWS Mainframe Modernization', url: 'https://aws.amazon.com/mainframe-modernization/'},
      {nome: 'Amazon Elastic VMware Service', url: 'https://aws.amazon.com/vmware/'}
    ]
  },
  {
    categoria: 'Monitoramento e Observabilidade',
    servicos: [
      {nome: 'Amazon CloudWatch', url: 'https://aws.amazon.com/cloudwatch/'},
      {nome: 'AWS X-Ray', url: 'https://aws.amazon.com/xray/'},
      {nome: 'Amazon Managed Grafana', url: 'https://aws.amazon.com/grafana/'},
      {nome: 'Amazon Managed Service for Prometheus', url: 'https://aws.amazon.com/prometheus/'},
      {nome: 'AWS Distro for OpenTelemetry', url: 'https://aws.amazon.com/otel/'},
      {nome: 'Amazon CloudWatch Logs', url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html'},
      {nome: 'Amazon CloudWatch Synthetics', url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html'},

      {nome: 'Amazon CloudWatch RUM', url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM.html'},
      {nome: 'AWS CloudTrail', url: 'https://aws.amazon.com/cloudtrail/'},
      {nome: 'AWS CloudTrail Lake', url: 'https://aws.amazon.com/cloudtrail/lake/'},
      {nome: 'AWS FIS (Fault Injection Simulator)', url: 'https://aws.amazon.com/fis/'}
    ]
  },
  {
    categoria: 'Redes e Entrega de Conteúdo',
    servicos: [
      {nome: 'Amazon VPC', url: 'https://aws.amazon.com/vpc/'},
      {nome: 'Amazon CloudFront', url: 'https://aws.amazon.com/cloudfront/'},
      {nome: 'AWS Direct Connect', url: 'https://aws.amazon.com/directconnect/'},
      {nome: 'AWS App Mesh', url: 'https://aws.amazon.com/app-mesh/'},
      {nome: 'AWS Global Accelerator', url: 'https://aws.amazon.com/global-accelerator/'},
      {nome: 'Amazon Route 53', url: 'https://aws.amazon.com/route53/'},
      {nome: 'AWS Private 5G', url: 'https://aws.amazon.com/private5g/'},
      {nome: 'AWS Cloud Map', url: 'https://aws.amazon.com/cloud-map/'},
      {nome: 'Application Recovery Controller', url: 'https://aws.amazon.com/application-recovery-controller/'},
      {nome: 'AWS Network Firewall', url: 'https://aws.amazon.com/network-firewall/'},
      {nome: 'AWS Network Manager', url: 'https://aws.amazon.com/vpc/network-manager/'},
      {nome: 'Elastic Load Balancing (ELB)', url: 'https://aws.amazon.com/elasticloadbalancing/'},
      {nome: 'AWS PrivateLink', url: 'https://aws.amazon.com/privatelink/'},
      {nome: 'AWS Transit Gateway', url: 'https://aws.amazon.com/transit-gateway/'},
      {nome: 'AWS VPN', url: 'https://aws.amazon.com/vpn/'},
      {nome: 'Amazon VPC Lattice', url: 'https://aws.amazon.com/vpc/lattice/'},
      {nome: 'AWS Cloud WAN', url: 'https://aws.amazon.com/cloud-wan/'}
    ]
  },
  {
    categoria: 'Contêineres',
    servicos: [
      {nome: 'Amazon ECS', url: 'https://aws.amazon.com/ecs/'},
      {nome: 'Amazon EKS', url: 'https://aws.amazon.com/eks/'},
      {nome: 'AWS Fargate', url: 'https://aws.amazon.com/fargate/'},
      {nome: 'Amazon ECR', url: 'https://aws.amazon.com/ecr/'},
      {nome: 'Red Hat OpenShift Service on AWS (ROSA)', url: 'https://aws.amazon.com/rosa/'},
      {nome: 'Amazon EKS on Outposts', url: 'https://aws.amazon.com/eks/outposts/'}
    ]
  },
  {
    categoria: 'Mapas e Localização',
    servicos: [
      {nome: 'Amazon Location Service', url: 'https://aws.amazon.com/location/'}
    ]
  },
  {
    categoria: 'Robótica',
    servicos: [
      {nome: 'AWS RoboMaker', url: 'https://aws.amazon.com/robomaker/'}
    ]
  },
  {
    categoria: 'Satélite',
    servicos: [
      {nome: 'AWS Ground Station', url: 'https://aws.amazon.com/ground-station/'},
      {nome: 'AWS Data Exchange for Ground Station', url: 'https://aws.amazon.com/data-exchange/ground-station/'},
      {nome: 'AWS Ground Station with Amazon S3', url: 'https://aws.amazon.com/ground-station/features/'}
    ]
  },
  {
    categoria: 'Segurança, Identidade e Conformidade',
    servicos: [
      {nome: 'AWS Identity and Access Management (IAM)', url: 'https://aws.amazon.com/iam/'},
      {nome: 'Amazon Cognito', url: 'https://aws.amazon.com/cognito/'},
      {nome: 'AWS Secrets Manager', url: 'https://aws.amazon.com/secrets-manager/'},
      {nome: 'Amazon GuardDuty', url: 'https://aws.amazon.com/guardduty/'},
      {nome: 'Amazon Inspector', url: 'https://aws.amazon.com/inspector/'},
      {nome: 'Amazon Macie', url: 'https://aws.amazon.com/macie/'},
      {nome: 'AWS Certificate Manager', url: 'https://aws.amazon.com/certificate-manager/'},
      {nome: 'AWS Key Management Service (KMS)', url: 'https://aws.amazon.com/kms/'},
      {nome: 'AWS CloudHSM', url: 'https://aws.amazon.com/cloudhsm/'},
      {nome: 'AWS Directory Service', url: 'https://aws.amazon.com/directoryservice/'},
      {nome: 'AWS Firewall Manager', url: 'https://aws.amazon.com/firewall-manager/'},
      {nome: 'AWS Artifact', url: 'https://aws.amazon.com/artifact/'},
      {nome: 'Amazon Detective', url: 'https://aws.amazon.com/detective/'},
      {nome: 'AWS WAF & Shield', url: 'https://aws.amazon.com/waf/'},
      {nome: 'AWS Security Hub', url: 'https://aws.amazon.com/security-hub/'},
      {nome: 'AWS Audit Manager', url: 'https://aws.amazon.com/audit-manager/'},
      {nome: 'AWS Payment Cryptography', url: 'https://aws.amazon.com/payment-cryptography/'},
      {nome: 'Amazon Bedrock Guardrails', url: 'https://aws.amazon.com/pt/bedrock/guardrails/'},
      {nome: 'AWS IAM Identity Center', url: 'https://aws.amazon.com/iam/identity-center/'},
      {nome: 'Amazon Verified Permissions', url: 'https://aws.amazon.com/verified-permissions/'},
      {nome: 'AWS Private CA', url: 'https://aws.amazon.com/private-ca/'},
      {nome: 'Amazon Security Lake', url: 'https://aws.amazon.com/security-lake/'},
      {nome: 'AWS Verified Access', url: 'https://aws.amazon.com/verified-access/'},
      {nome: 'AWS Security Agent', url: 'https://aws.amazon.com/security-agent/'}
    ]
  },
  {
    categoria: 'Serviços de Mídia',
    servicos: [
      {nome: 'Kinesis Video Streams', url: 'https://aws.amazon.com/kinesis/video-streams/'},
      {nome: 'AWS Elemental MediaConvert', url: 'https://aws.amazon.com/mediaconvert/'},
      {nome: 'AWS Elemental MediaLive', url: 'https://aws.amazon.com/medialive/'},
      {nome: 'AWS Elemental MediaPackage', url: 'https://aws.amazon.com/mediapackage/'},
      {nome: 'AWS Elemental MediaStore', url: 'https://aws.amazon.com/mediastore/'},
      {nome: 'AWS Elemental MediaTailor', url: 'https://aws.amazon.com/mediatailor/'},
      {nome: 'AWS Elastic Transcoder', url: 'https://aws.amazon.com/elastictranscoder/'},
      {nome: 'Amazon Interactive Video Service (IVS)', url: 'https://aws.amazon.com/ivs/'},
      {nome: 'AWS Elemental MediaConnect', url: 'https://aws.amazon.com/mediaconnect/'}
    ]
  },
  {
    categoria: 'Tecnologias Quânticas',
    servicos: [
      {nome: 'Amazon Braket', url: 'https://aws.amazon.com/braket/'}
    ]
  },
  {
    categoria: 'Tecnologias de Saúde',
    servicos: [
      {nome: 'AWS HealthLake', url: 'https://aws.amazon.com/healthlake/'},
      {nome: 'AWS HealthImaging', url: 'https://aws.amazon.com/healthimaging/'},
      {nome: 'AWS HealthScribe', url: 'https://aws.amazon.com/healthscribe/'}
    ]
  },
  {
    categoria: 'Blockchain',
    servicos: [
      {nome: 'Amazon Managed Blockchain', url: 'https://aws.amazon.com/managed-blockchain/'},
      {nome: 'Amazon QLDB', url: 'https://aws.amazon.com/qldb/'}
    ],
    descricao: 'Crie e gerencie redes blockchain e Ledgers escaláveis.'
  },
  {
    categoria: 'Realidade Virtual e Aumentada',
    servicos: [
      {nome: 'Amazon Sumerian', url: 'https://aws.amazon.com/sumerian/'}
    ],
    descricao: 'Ferramentas para criar e executar aplicações de realidade virtual (VR), realidade aumentada (AR) e 3D.'
  },
  {
    categoria: 'Ferramentas Externas e Terceirizadas',
    servicos: [
      {nome: 'Datadog - Monitoramento', url: 'https://www.datadoghq.com/'},
      {nome: 'Kiro.dev - DevOps', url: 'https://kiro.dev/'},
      {nome: 'Oracle Database na AWS', url: 'https://aws.amazon.com/rds/oracle/'},
      {nome: 'Terraform na AWS', url: 'https://registry.terraform.io/browse/providers'},
      {nome: 'New Relic na AWS', url: 'https://newrelic.com'},
      {nome: 'GitHub Community', url: 'https://github.com/orgs/community/discussions'}
    ],
    descricao: 'Ferramentas e serviços de terceiros que se integram perfeitamente com a AWS para expandir suas capacidades.'
  },
  {
    categoria: 'Aulinhas Gé Tavares AWS',
    servicos: [
      {nome: 'Canal Completo no YouTube de Gé Tavares', url: 'https://www.youtube.com/@rogtavares'}
    ],
    descricao: 'Conteúdo educacional gratuito sobre AWS com explicações práticas e didáticas para certificações e uso profissional.'
  },
  {
    categoria: 'Sobre o Gé Tavares',
    servicos: [
      {nome: 'GitHub', url: 'https://github.com/rogtavares'},
      {nome: 'LinkedIn', url: 'https://www.linkedin.com/in/rogtavares/'},
      {nome: 'Portfólio (Minhas ARTES)', url: 'https://rogeriotavares.myportfolio.com/'}
    ]
  }
];

const ordemImportancia = [
  'Rede Global de Regiões da AWS',
  'Computação',
  'Contêineres',
  'Armazenamento',
  'Banco de Dados',
  'Redes e Entrega de Conteúdo',
  'Desenvolvimento Web & Mobile',
  'Low-Code/No-Code',
  'Ferramentas do Desenvolvedor',
  'Integração de Aplicativos',
  'Segurança, Identidade e Conformidade',
  'Gerenciamento e Governança',
  'Monitoramento e Observabilidade',
  'Análise de Dados',
  'Machine Learning',
  'Aplicativos Empresariais',
  'Computação de Usuário Final',
  'Serviços de Mídia',
  'Migração e Transferência',
  'Internet das Coisas (IoT)',
  'Blockchain',
  'Realidade Virtual e Aumentada',
  'Desenvolvimento de Jogos',
  'Mapas e Localização',
  'Robótica',
  'Satélite',
  'Tecnologias Quânticas',
  'Tecnologias de Saúde',
  'Infraestrutura como Código',
  'Java & SDKs',
  'Capacitação do Cliente',
  'Certificações AWS',
  'Ferramentas Externas e Terceirizadas',
  'Aulinhas Gé Tavares AWS'
];

dados.sort((a, b) => {
  if (a.categoria === 'Sobre o Gé Tavares') return 1;
  if (b.categoria === 'Sobre o Gé Tavares') return -1;
  const ia = ordemImportancia.indexOf(a.categoria);
  const ib = ordemImportancia.indexOf(b.categoria);
  if (ia === -1 && ib === -1) return a.categoria.localeCompare(b.categoria, 'pt-BR');
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
});

function renderizarServicos(filtro) {
    const lista = document.getElementById('servicos-lista');
    lista.innerHTML = '';
    let encontrou = false;
    const filtroLower = filtro.trim().toLowerCase();

    // Toggle clear button visibility
    const clearBtn = document.getElementById('clearBtn');
    if (filtroLower.length > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }

    dados.forEach(cat => {
        const categoriaCombina = cat.categoria && cat.categoria.toLowerCase().includes(filtroLower);
        const filtrados = filtroLower === ''
            ? cat.servicos
            : categoriaCombina
                ? cat.servicos
                : cat.servicos.filter(s => s.nome.toLowerCase().includes(filtroLower));
        if (filtrados.length > 0) {
            encontrou = true;
            const divCat = document.createElement('div');
            divCat.className = 'categoria';
            let headerHTML = cat.categoria === 'Sobre o Gé Tavares'
                ? `<h2 class="destaque-gtavares">
                      <img src="logo.png" alt="Logo Gé Tavares" style="height:32px; vertical-align:middle;">
                   </h2>`
                : `<h2>${cat.categoria}</h2>`;

            if (cat.descricao) {
                headerHTML += `<div class="categoria-desc">${cat.descricao}</div>`;
            }

            divCat.innerHTML = headerHTML;
            const ul = document.createElement('ul');
            filtrados.forEach(s => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = s.url;
                a.target = '_blank';
                a.rel = 'noopener';
                if (cat.categoria === 'Sobre o Gé Tavares') {
                    a.innerHTML = `<strong>${s.nome}</strong>`;
                } else {
                    a.textContent = s.nome;
                }
                li.appendChild(a);
                if (s.desc) {
                    const spanDesc = document.createElement('span');
                    spanDesc.className = 'desc';
                    spanDesc.textContent = `– ${s.desc}`;
                    li.appendChild(spanDesc);
                }
                ul.appendChild(li);
            });
            divCat.appendChild(ul);
            lista.appendChild(divCat);
        }
    });
    if (!encontrou) {
        lista.innerHTML = '<p>Nenhum serviço encontrado.</p>';
    }
}

// Setup search input listener
const buscaInput = document.getElementById('busca');
buscaInput.addEventListener('input', function() {
    renderizarServicos(this.value);
});

// Setup clear button listener
document.getElementById('clearBtn').addEventListener('click', function() {
    buscaInput.value = '';
    renderizarServicos('');
    buscaInput.focus();
});

// Theme toggling functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference (default to light)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
} else {
    // Default to light theme for new users
    htmlElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.title = theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro';
}

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initial render
renderizarServicos('');

// Tutorial functionality
const comoUsar = document.getElementById('comoUsar');
const fecharTutorial = document.getElementById('fecharTutorial');

// Check if user has seen tutorial before
const tutorialVisto = localStorage.getItem('tutorialVisto');
if (tutorialVisto) {
    comoUsar.classList.add('hidden');
}

// Hide tutorial when button is clicked
fecharTutorial.addEventListener('click', () => {
    comoUsar.classList.add('hidden');
    localStorage.setItem('tutorialVisto', 'true');
    // Focus on search after closing tutorial
    buscaInput.focus();
});
