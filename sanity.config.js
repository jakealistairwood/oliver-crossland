import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'backend',

  projectId: '4k52vvo7',
  dataset: 'production',

  basePath: "/studio",
  useCdn: true,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
