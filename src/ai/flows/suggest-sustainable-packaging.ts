'use server';

/**
 * @fileOverview Provides an AI tool that suggests sustainable packaging options based on product type and transportation needs.
 *
 * - suggestSustainablePackaging - A function that suggests sustainable packaging options.
 * - SustainablePackagingInput - The input type for the suggestSustainablePackaging function.
 * - SustainablePackagingOutput - The return type for the suggestSustainablePackaging function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SustainablePackagingInputSchema = z.object({
  productType: z
    .string()
    .describe('The type of product that needs packaging (e.g., food, electronics, clothing).'),
  transportationNeeds: z
    .string()
    .describe(
      'The transportation requirements for the product (e.g., local, international, temperature-controlled).' + ' Provide any specific details, such as distance or handling requirements.'
    ),
});
export type SustainablePackagingInput = z.infer<typeof SustainablePackagingInputSchema>;

const SustainablePackagingOutputSchema = z.object({
  packagingSuggestions: z
    .string()
    .describe(
      'A list of sustainable packaging options suitable for the product type and transportation needs.' + ' Include details on materials, benefits, and disposal methods.'
    ),
  additionalTips: z
    .string()
    .optional()
    .describe(
      'Optional tips on how to further improve the sustainability of the packaging, ' +
        'such as reducing material usage, optimizing packaging size, or using renewable energy in the packaging process.'
    ),
});
export type SustainablePackagingOutput = z.infer<typeof SustainablePackagingOutputSchema>;

export async function suggestSustainablePackaging(
  input: SustainablePackagingInput
): Promise<SustainablePackagingOutput> {
  return suggestSustainablePackagingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sustainablePackagingPrompt',
  input: {schema: SustainablePackagingInputSchema},
  output: {schema: SustainablePackagingOutputSchema},
  prompt: `You are an expert in sustainable packaging solutions. Given the product type and transportation needs, suggest the most suitable sustainable packaging options.

Product Type: {{{productType}}}
Transportation Needs: {{{transportationNeeds}}}

Provide detailed suggestions, including materials, benefits, and disposal methods. Also include extra tips to further improve the sustainability of the packaging.
`,
});

const suggestSustainablePackagingFlow = ai.defineFlow(
  {
    name: 'suggestSustainablePackagingFlow',
    inputSchema: SustainablePackagingInputSchema,
    outputSchema: SustainablePackagingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
