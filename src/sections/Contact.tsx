import { useState, FormEvent } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '592aa0df-5454-4d72-9857-f19e48ea47c0',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="py-24 bg-surface/50">
      <Container>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Let's build something exceptional.</h2>
            <p className="text-secondary text-base">
              Have a question, an opportunity, or want to discuss Linux, homelabs, or systems architecture? Drop a message below.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Message Delivered!</h3>
              <p className="text-secondary text-sm">
                Thank you for reaching out. Your message has been sent directly to my inbox and I will get back to you shortly.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm text-center">
                  {errorMessage}
                </div>
              )}

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
                  className="w-full p-3 rounded-lg border border-border bg-surface/50 text-primary placeholder:text-secondary/60 focus:ring-2 focus:ring-accent focus:outline-none transition-smooth min-h-[140px]"
                  placeholder="Tell me about your project, questions, or ideas..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message →'
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
