import { useState, FormEvent } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="py-24 bg-surface/50">
      <Container>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Let's build something exceptional.</h2>
            <p className="text-secondary text-base">
              Have a project in mind, a question, or want to discuss frontend architecture? Drop a message below.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
              <h3 className="text-xl font-bold text-emerald-600 mb-2">Message Sent Successfully!</h3>
              <p className="text-secondary text-sm">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                label="Your Name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required 
              />
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required 
              />
              <div className="w-full">
                <label className="block text-sm font-medium mb-1.5 text-primary">Message</label>
                <textarea 
                  className="w-full p-3 rounded-lg border border-border bg-surface/50 focus:ring-2 focus:ring-accent focus:outline-none transition-smooth min-h-[140px]"
                  placeholder="Tell me about your project, timeline, or goals..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message →
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
