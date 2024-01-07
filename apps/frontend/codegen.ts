import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '../../graphql/generated/schema.graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
