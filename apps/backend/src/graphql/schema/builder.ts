import SchemaBuilder from '@pothos/core'
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects'

import type { ScalarTypes } from './scalar.js'
import type { Context } from '../context.js'

export const builder = new SchemaBuilder<{
  Scalars: ScalarTypes
  Context: Context
}>({
  plugins: [SimpleObjectsPlugin],
})

builder.queryType()
builder.mutationType()
