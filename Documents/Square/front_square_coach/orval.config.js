// orval.config.js
module.exports = {
  api: {
    input: './innovation_hub.json', // Substitua pelo caminho do seu arquivo YAML
    output: {
      target: './src/test_http/services/api.service.ts', // Arquivo onde o cliente Angular será gerado
      schemas: './src/test_models', // Local onde os modelos serão gerados
      mode: 'single', // Ajuste o modo conforme sua preferência ('single' ou 'tags-split')
    },
  },
};
