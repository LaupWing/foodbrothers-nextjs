"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/language-store";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { language } = useLanguageStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const content = {
    nl: {
      tagline: "Neem Contact Op",
      title: "Contact",
      subtitle: "Heb je vragen, opmerkingen of wil je een reservering maken? Neem gerust contact met ons op!",
      form: {
        name: "Naam",
        email: "E-mail",
        phone: "Telefoon",
        subject: "Onderwerp",
        message: "Bericht",
        send: "Versturen",
        namePlaceholder: "Jouw naam",
        emailPlaceholder: "jouw@email.com",
        phonePlaceholder: "+31 6 12345678",
        subjectPlaceholder: "Waar gaat het over?",
        messagePlaceholder: "Schrijf hier je bericht...",
      },
      info: {
        address: "Adres",
        addressValue: "Overamstelstraat 1\n1091TL Amsterdam",
        phone: "Telefoon",
        phoneValue: "+31 20 123 4567",
        email: "E-mail",
        emailValue: "info@foodbrothers.nl",
        hours: "Openingstijden",
        hoursValue: [
          { day: "Maandag", time: "Gesloten", closed: true },
          { day: "Dinsdag", time: "17:00 - 01:00" },
          { day: "Woensdag", time: "17:00 - 01:00" },
          { day: "Donderdag", time: "17:00 - 01:00" },
          { day: "Vrijdag", time: "17:00 - 02:00" },
          { day: "Zaterdag", time: "17:00 - 02:00" },
          { day: "Zondag", time: "17:00 - 22:00" },
        ],
      },
    },
    en: {
      tagline: "Get In Touch",
      title: "Contact",
      subtitle: "Have questions, comments or want to make a reservation? Feel free to contact us!",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        send: "Send",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+31 6 12345678",
        subjectPlaceholder: "What is this about?",
        messagePlaceholder: "Write your message here...",
      },
      info: {
        address: "Address",
        addressValue: "Overamstelstraat 1\n1091TL Amsterdam",
        phone: "Phone",
        phoneValue: "+31 20 123 4567",
        email: "Email",
        emailValue: "info@foodbrothers.nl",
        hours: "Opening Hours",
        hoursValue: [
          { day: "Monday", time: "Closed", closed: true },
          { day: "Tuesday", time: "17:00 - 01:00" },
          { day: "Wednesday", time: "17:00 - 01:00" },
          { day: "Thursday", time: "17:00 - 01:00" },
          { day: "Friday", time: "17:00 - 02:00" },
          { day: "Saturday", time: "17:00 - 02:00" },
          { day: "Sunday", time: "17:00 - 22:00" },
        ],
      },
    },
  };

  const c = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 tracking-wide text-sm mb-2">{c.tagline}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            {c.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-secondary rounded-2xl p-8">
              <h2 className="text-2xl font-serif text-primary mb-6">
                {language === "nl" ? "Stuur Ons Een Bericht" : "Send Us A Message"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {c.form.name} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={c.form.namePlaceholder}
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {c.form.email} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={c.form.emailPlaceholder}
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {c.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={c.form.phonePlaceholder}
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {c.form.subject} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={c.form.subjectPlaceholder}
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    {c.form.message} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-full font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {c.form.send}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.info.address}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{c.info.addressValue}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.info.phone}</h3>
                    <a href={`tel:${c.info.phoneValue}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {c.info.phoneValue}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.info.email}</h3>
                    <a href={`mailto:${c.info.emailValue}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {c.info.emailValue}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">{c.info.hours}</h3>
                    <div className="space-y-2">
                      {c.info.hoursValue.map((item: { day: string; time: string; closed?: boolean }, index: number) => (
                        <div key={index} className="flex justify-between">
                          <span className={item.closed ? "text-muted-foreground/60" : "text-muted-foreground"}>{item.day}</span>
                          <span className={item.closed ? "text-destructive font-medium" : "text-foreground font-medium"}>{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5476744753186!2d4.8936!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzAzLjQiTiA0wrA1Myc0OS4wIkU!5e0!3m2!1sen!2snl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Food Brothers Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
