import { useState, FormEvent } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import StaggerReveal from '../components/ui/StaggerReveal';
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
    <Section id="contact" className="py-24 bg-surface/50 relative overflow-hidden">
      {/* Background glow ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <Container>
        <div className="max-w-xl mx-auto">
          <StaggerReveal delay={0}>
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Let's build something exceptional</h2>
              <p className="text-secondary text-base">
                Have a question, an opportunity, or want to discuss Linux, homelabs, or systems architecture? Drop a message below.
              </p>
            </div>
          </StaggerReveal>

          {submitted ? (
            <StaggerReveal delay={100}>
              <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-4 shadow-xl card-lift">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto text-3xl font-bold animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-emerald-600">Message Delivered!</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Thank you for reaching out. Your message has been sent directly to my inbox and I will get back to you shortly.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="hover:scale-105 active:scale-95 transition-transform"
                >
                  Send Another Message
                </Button>
              </div>
            </StaggerReveal>
          ) : (
            <StaggerReveal delay={150}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-surface border border-border/80 p-8 rounded-2xl shadow-xl card-lift relative">
                {errorMessage && (
                  <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm text-center">
                    {errorMessage}
                  </div>
                )}

                <StaggerReveal delay={200}>
                  <Input 
                    label="Your Name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </StaggerReveal>

                <StaggerReveal delay={280}>
                  <Input 
                    label="Email Address" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </StaggerReveal>

                <StaggerReveal delay={360}>
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
                </StaggerReveal>

                <StaggerReveal delay={440}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-accent/25"
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
                </StaggerReveal>
              </form>
            </StaggerReveal>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
