
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-surface-secondary/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-border/50">
      <h3 className="text-2xl font-semibold mb-6 font-inter text-foreground">Formularz Kontaktowy</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label htmlFor="name" className="block text-foreground text-sm font-bold mb-2 font-inter transition-colors duration-300 group-focus-within:text-primary-light">
            Imię i Nazwisko
          </label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-3 px-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-300 bg-surface-primary/70 backdrop-blur-sm font-inter hover:border-primary-light/50"
            placeholder="Twoje imię i nazwisko" 
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2 font-inter transition-colors duration-300 group-focus-within:text-primary-light">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-3 px-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-300 bg-surface-primary/70 backdrop-blur-sm font-inter hover:border-primary-light/50" 
            placeholder="Twój adres email" 
          />
        </div>
        <div className="group">
          <label htmlFor="message" className="block text-foreground text-sm font-bold mb-2 font-inter transition-colors duration-300 group-focus-within:text-primary-light">
            Wiadomość
          </label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5} 
            className="w-full py-3 px-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-300 bg-surface-primary/70 backdrop-blur-sm font-inter hover:border-primary-light/50 resize-none" 
            placeholder="Twoja wiadomość"
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="group bg-gradient-to-r from-primary-light to-primary text-primary-foreground px-8 py-4 rounded-full hover:from-primary hover:to-primary-hover transition-all duration-300 shadow-medium font-semibold font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center">
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            {!isSubmitting && (
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            )}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
