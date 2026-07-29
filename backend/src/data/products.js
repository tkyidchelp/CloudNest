export const products = [
  {
    id: 'ecs',
    name: '云服务器 ECS',
    description: '弹性计算服务，支持按需创建、秒级部署。覆盖通用型、计算型、内存型、GPU 型等多种实例规格。',
    icon: 'cloud-arrow-up-fill',
    price: { entry: 49, pro: 199, enterprise: 699 },
    features: [
      'Intel Xeon Gold / AMD EPYC',
      '1~96 vCPU 灵活配置',
      'SSD / NVMe 高性能存储',
      'VPC 私有网络隔离',
      '支持自定义镜像',
      '弹性 IP + 共享带宽',
    ],
    specs: {
      entry: { cpu: 2, ram: 2, disk: 50, bandwidth: 5 },
      pro: { cpu: 4, ram: 8, disk: 100, bandwidth: 10 },
      enterprise: { cpu: 8, ram: 16, disk: 200, bandwidth: 30 },
    },
  },
  {
    id: 'bms',
    name: '物理机托管 BMS',
    description: '独享物理服务器，T3+ 标准机房环境。适用于高性能计算、大数据处理、AI 训练等场景。',
    icon: 'server',
    price: { entry: 599, pro: 1299, enterprise: 3999 },
    features: [
      'Dell / HPE / 浪潮 品牌机',
      '双路 Xeon / EPYC',
      '支持 GPU (A100/H100)',
      '双路市电 + UPS + 柴发',
      '精密空调恒温恒湿',
      '7x24 机房运维值守',
    ],
    specs: {
      entry: { cpu: 8, ram: 32, disk: 480, bandwidth: 20 },
      pro: { cpu: 16, ram: 64, disk: 960, bandwidth: 50 },
      enterprise: { cpu: 32, ram: 128, disk: 1920, bandwidth: 100 },
    },
  },
  {
    id: 'shield',
    name: '安全防护 Shield',
    description: '多层次安全防御体系，覆盖网络层、传输层、应用层。Tbps 级 DDoS 清洗能力。',
    icon: 'shield-shaded',
    price: { entry: 99, pro: 399, enterprise: 1299 },
    features: [
      'Tbps 级 DDoS 清洗',
      'Web 应用防火墙 WAF',
      'CC 攻击智能防护',
      'SSL/TLS 证书管理',
      '入侵检测 IDS/IPS',
      '日志审计与告警',
    ],
    specs: {
      entry: { ddosBandwidth: '100G', wafRules: 50, domains: 5 },
      pro: { ddosBandwidth: '500G', wafRules: 200, domains: 20 },
      enterprise: { ddosBandwidth: '2T', wafRules: '无限', domains: '无限' },
    },
  },
  {
    id: 'cdn',
    name: 'CDN 加速',
    description: '全球 3000+ 边缘节点，智能调度最优路径。支持动静分离、全站加速、直播加速等场景。',
    icon: 'globe2',
    price: { entry: 39, pro: 199, enterprise: 799 },
    features: [
      '全球 3000+ 节点',
      '智能 DNS 调度',
      '动静分离加速',
      '全站 HTTPS 支持',
      '图片/视频 智能处理',
      '实时日志与监控',
    ],
    specs: {
      entry: { traffic: '100GB', bandwidth: '100Mbps', domains: 3 },
      pro: { traffic: '1TB', bandwidth: '500Mbps', domains: 10 },
      enterprise: { traffic: '10TB', bandwidth: '1Gbps', domains: '无限' },
    },
  },
]

export const resources = []
