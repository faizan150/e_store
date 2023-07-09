import { type SchemaTypeDefinition } from 'sanity'
import  { product } from './product'
import { clothCategory } from './clothCategory'
import { clothSize } from './clothSize'
import { clothType } from './clothType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, clothCategory, clothSize, clothType],

}
