import type { Metadata } from 'next';
import ContactForm from './contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Map } from '@/components/ui/map';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with KVS Packaging. We are here to help with all your packaging needs.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
              Get in Touch
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Have a question or a project in mind? We'd love to hear from you. Fill out the form or use the contact details below.
              </p>
          </div>
          <div className="space-y-6">
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                      <Mail className="h-6 w-6" />
                  </div>
                  <div>
                      <h3 className="font-headline font-semibold text-lg">Email</h3>
                      <a href="mailto:hello@kvspackaging.com" className="text-muted-foreground hover:text-primary">hello@kvspackaging.com</a>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                      <Phone className="h-6 w-6" />
                  </div>
                  <div>
                      <h3 className="font-headline font-semibold text-lg">Phone</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                      <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                      <h3 className="font-headline font-semibold text-lg">Office</h3>
                      <p className="text-muted-foreground">123 Packaging Lane, Industry City, 54321</p>
                  </div>
              </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-headline font-bold tracking-tight mb-4">Find Us</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">Our office and production coordination center is located in the heart of Industry City with easy access to major transport routes. Visitors are welcome by appointment.</p>
        <Map lat={37.7749} lng={-122.4194} zoom={13} title="KVS Packaging Office Location" className="w-full" height={400} />
      </section>
    </div>
  );
}
