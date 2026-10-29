const projects = [
  {
    id: 'ai-automation-platform',
    title: 'AI-Driven RHEL Automation',
    description:
      'Automation workflows integrating Azure OpenAI via LiteLLM and Event-Driven Ansible (AAP), parsing and validating JSON payloads to deliver AI-interpreted results straight to engineers.',
    tags: ['Python', 'Azure OpenAI', 'LiteLLM', 'Ansible'],
  },
  {
    id: 'a2a-zabbix-mcp',
    title: 'A2A Zabbix Agent & MCP Servers',
    description:
      'An A2A-protocol Zabbix agent plus 3 MCP servers built in Python and containerized with Podman on Red Hat base images for repeatable releases from dev to production.',
    tags: ['Python', 'MCP', 'A2A Protocol', 'Podman'],
  },
  {
    id: 'grafana-observability',
    title: 'Grafana Observability Dashboards',
    description:
      'Custom Grafana panels built with HTML, CSS, and JavaScript, querying MSSQL for real-time performance metrics to boost business-wide observability.',
    tags: ['Grafana', 'JavaScript', 'MSSQL'],
  },
  {
    id: 'cicd-pipelines',
    title: 'GitHub Actions CI/CD Pipelines',
    description:
      'Pipelines across 10+ repositories that test, validate, and deploy code automatically, catching errors before production and keeping every change traceable.',
    tags: ['GitHub Actions', 'CI/CD', 'RHEL'],
  },
]

export default projects
