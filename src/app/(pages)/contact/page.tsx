import type { Metadata } from 'next';
import ContactForm from './contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Map } from '@/components/ui/map';

export const metadata: Metadata = {
  title: 'Contact | KV Packaging Solutions',
  description: 'Get in touch with KV Packaging Solutions for corrugated & corrugated packaging inquiries.',
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
              Have a question or a project in mind? We’d love to hear from you. Reach out using the details below or send us your requirements.
              </p>
          </div>
          <div className="space-y-6">
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                      <Mail className="h-6 w-6" />
                  </div>
                  <div>
                      <h3 className="font-headline font-semibold text-lg">Email</h3>
                      <a href="mailto:sales.development@kvpack.in" className="text-muted-foreground hover:text-primary">sales.development@kvpack.in</a>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                      <Phone className="h-6 w-6" />
                  </div>
                  <div>
                      <h3 className="font-headline font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground space-y-1">
                        <a href="tel:+919975781200" className="block hover:text-primary">+91 9975781200</a>
                        <a href="tel:+919763021933" className="block hover:text-primary">+91 9763021933</a>
                        <a href="tel:+919766520651" className="block hover:text-primary">+91 9766520651</a>
                      </p>
                      <div className="mt-2 text-sm">
                        <span className="font-semibold">WhatsApp:</span>{' '}
                        <a href="https://wa.me/919766520651" className="hover:underline">+91 9766520651</a>,{' '}
                        <a href="https://wa.me/918858548787" className="hover:underline">+91 8858548787</a>
                      </div>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3">
                      <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                      <h3 className="font-headline font-semibold text-lg">Office</h3>
                      <p className="text-muted-foreground">Plot No. E23, Supa MIDC, Tal. Parner, Dist.- Ahilyanagar, Maharashtra, 414301</p>
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
        <p className="text-muted-foreground mb-6 max-w-2xl">Our manufacturing facility is strategically positioned in Supa MIDC for efficient regional distribution. Visits are welcome by prior appointment.</p>
        <Map lat={18.965817768228202} lng={74.50925378756519} zoom={11} title="KV Packaging Solutions Facility" className="w-full" height={400} />
      </section>
    </div>
  );
}
