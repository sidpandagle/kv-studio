'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  suggestSustainablePackaging,
  type SustainablePackagingOutput,
} from '@/ai/flows/suggest-sustainable-packaging';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Leaf, ThumbsUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  productType: z.string().min(3, 'Please describe your product type (e.g., electronics, glassware).'),
  transportationNeeds: z.string().min(10, 'Please describe your shipping needs (e.g., international, fragile).'),
});

type FormData = z.infer<typeof formSchema>;

export default function SuggestionForm() {
  const [result, setResult] = useState<SustainablePackagingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productType: '',
      transportationNeeds: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await suggestSustainablePackaging(data);
      setResult(response);
    } catch (e) {
      setError('An error occurred while generating suggestions. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline">Product Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 'Cosmetics jars'" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="transportationNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline">Transportation Needs</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 'National shipping, requires temperature control'" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center mt-6 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <p>Our AI is thinking... this may take a moment.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-8 space-y-6"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Leaf className="h-6 w-6 text-primary" />
                  <CardTitle className="font-headline text-2xl text-primary">Packaging Suggestions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-foreground/90">{result.packagingSuggestions}</p>
              </CardContent>
            </Card>

            {result.additionalTips && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="h-6 w-6 text-accent" />
                    <CardTitle className="font-headline text-2xl text-accent-foreground">Additional Tips</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-foreground/90">{result.additionalTips}</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
