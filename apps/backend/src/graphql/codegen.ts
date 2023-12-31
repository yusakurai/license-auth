import { printSchema } from 'graphql'

import { schema } from './schema/index.js'

import type { CodegenConfig } from '@graphql-codegen/cli'

// DOC: https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    '../../graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
    '../../graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
